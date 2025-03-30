import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { FeaturedYachts } from "../home/components/FeaturedYachts";
import { ReviewsSection } from "./components/Reviews";
import YachtAmenities from "./components/YachtAmenities";
import YachtInformation from "./components/YachtInformation";
import YachtMainPictutes from "./components/YachtMainPictutes";
import YachtOtherPictures from "./components/YachtOtherPictures";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import rentService from "@/services/rents";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import { useEffect, useState } from "react";

const RentDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  const { data: featuredData, isLoading: featuredLoading } = useQuery({
    queryKey: [QUERY_KEYS.FEATURED_RENTS],
    queryFn: () => rentService.getAll({ type: "featured" }),
  });

  const featuredRents = featuredData?.data.items;
  const { data, isError } = useQuery({
    queryKey: [QUERY_KEYS.RENT_DETAIL, id],
    queryFn: () => rentService.getById(id!),
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  const rent = data?.data?.item;
  console.log(rent);

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
    <div>
      <YachtMainPictutes images={rent.images} />
      <YachtInformation rent={rent} />
      <YachtOtherPictures images={rent.images} />
      <YachtAmenities />
      <ReviewsSection reviews={rent.reviews} />
      <FeaturedYachts isLoading={featuredLoading} rents={featuredRents} />
      <ScrollToTop />
    </div>
  );
};

export default RentDetailPage;
