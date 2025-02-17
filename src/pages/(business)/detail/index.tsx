import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { FeaturedYachts } from "../home/components/FeaturedYachts";
import Reviews from "./components/Reviews";
import YachtAmenities from "./components/YachtAmenities";
import YachtInformation from "./components/YachtInformation";
import YachtMainPictutes from "./components/YachtMainPictutes";
import YachtOtherPictures from "./components/YachtOtherPictures";

const RentDetailPage = () => {
  return (
    <div className="pb-8 lg:pb-16">
      <ScrollToTop />
      <YachtMainPictutes />
      <YachtInformation />
      <YachtOtherPictures />
      <YachtAmenities />
      <Reviews />
      <FeaturedYachts />
    </div>
  );
};

export default RentDetailPage;
