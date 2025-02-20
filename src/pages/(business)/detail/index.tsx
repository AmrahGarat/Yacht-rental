import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { FeaturedYachts } from "../home/components/FeaturedYachts";
import Reviews from "./components/Reviews";
import YachtAmenities from "./components/YachtAmenities";
import YachtInformation from "./components/YachtInformation";
import YachtMainPictutes from "./components/YachtMainPictutes";
import YachtOtherPictures from "./components/YachtOtherPictures";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import rentService from "@/services/rents";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Spinner } from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";

const RentDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: featuredData, isLoading: featuredLoading } = useQuery({
    queryKey: [QUERY_KEYS.FEATURED_RENTS],
    queryFn: () => rentService.getAll({ type: "featured" }),
  });

  const featuredRents = featuredData?.data.items;
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.RENT_DETAIL, id],
    queryFn: () => rentService.getById(id!),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center mt-28">
        <Spinner />
        <p>Loading...</p>
      </div>
    );
  }

  const rent = data?.data?.item;

  if (isError || !rent) {
    return (
      <div className="flex flex-col justify-center items-center mt-28">
        <p className="text-2xl font-bold mb-3 text-primary">
          Something went wrong with your yacht!
        </p>
        <Button className="mt-4">
          <Link to={paths.HOME}>Back To Marina</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="pb-8 lg:pb-16">
      <YachtMainPictutes images={rent.images} />
      <YachtInformation rent={rent} />
      <YachtOtherPictures />
      <YachtAmenities />
      <Reviews />
      <FeaturedYachts isLoading={featuredLoading} rents={featuredRents} />
      <ScrollToTop />
    </div>
  );
};

export default RentDetailPage;
