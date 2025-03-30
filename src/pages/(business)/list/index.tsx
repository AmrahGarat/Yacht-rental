import { useSearchParams } from "react-router-dom"; // Already imported
import { RentCard } from "@/components/shared/rent-card"; // Already imported
import { Filters } from "./components/Filters"; // Already imported
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import rentService from "@/services/rents"; // Already imported
import { QUERY_KEYS } from "@/constants/query-keys"; // Already imported
import { LIST_TAKE_COUNT } from "@/constants"; // Already imported
import { useEffect, useMemo, useState } from "react";
import { Rent } from "@/types"; // Already imported
import { RenderIf } from "@/components/shared/RenderIf"; // Already imported
import { ClipLoader } from "react-spinners"; // Already imported
import { ScrollToTop } from "@/components/shared/ScrollToTop";

export const RentListPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const location = searchParams.get("location") || ""; // Get location filter from query parameters

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.RENT_LIST, searchParams.toString()],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      rentService.getAll(
        {
          take: LIST_TAKE_COUNT,
          skip: pageParam,
        },
        searchParams.toString() // This sends the location query parameter to the API
      ),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const hasNextPage =
        lastPage.data.total > lastPage.data.skip + lastPage.data.take;
      if (!hasNextPage) return null;
      return lastPage.data.skip + lastPage.data.take;
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  const rents = useMemo(() => {
    if (!data) return [];
    return data.pages.reduce((prev: Rent[], page) => {
      return [...prev, ...page.data.items];
    }, []);
  }, [data]);

  return (
    <div className="grid xl:grid-cols-[360px,1fr]">
      <Filters location={location} /> {/* Pass location to Filters component */}
      <div className="bg-white" />
      <div className="flex flex-col gap-y-6 lg:gap-y-8 pt-6 lg:pt-8 px-6 lg:px-8 pb-10">
        <InfiniteScroll
          dataLength={rents.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div className="flex flex-col items-center w-60 mx-auto gap-x-3 text-muted-foreground mt-4">
              <ClipLoader />
              <p>Loading more yachts...</p>
            </div>
          }
          endMessage={
            <RenderIf condition={!isLoading}>
              <p className="mt-4 text-center text-muted-foreground">
                No more yachts to show
              </p>
            </RenderIf>
          }
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
            <RenderIf condition={isLoading}>
              {[...Array(LIST_TAKE_COUNT)].map((_, index) => (
                <RentCard.Skeleton key={index} />
              ))}
            </RenderIf>

            {rents.map((rent) => (
              <RentCard key={rent._id} rent={rent} />
            ))}
          </div>
        </InfiniteScroll>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default RentListPage;
