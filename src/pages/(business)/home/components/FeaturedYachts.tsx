import { RentCard } from "@/components/shared/rent-card";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import { Link, useNavigate } from "react-router-dom";

export const FeaturedYachts = () => {
  const navigate = useNavigate();
  function navigateToList() {
    navigate(paths.LIST);
  }
  return (
    <div className="container mt-[120px]">
      <div className="flex justify-between items-center pb-5">
        <h3 className="text-[48px] font-[Unna-Italic] text-secondary leading-[140%]">
          Featured Yacths
        </h3>
        <Button
          variant={"link"}
          className="text-secondary !text-[25px]"
          onClick={navigateToList}
        >
          See All
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-3 xl:gap-6 justify-center">
        <RentCard />
        <RentCard />
        <RentCard />
      </div>
    </div>
  );
};
