import { MybaShowCard } from "./cards/MybaShowCard";
import { EastMedShowCard } from "./cards/EastMedShowCard";
import { MediterraneanShowCard } from "./cards/MediterraneanShowCard";
import { TybaShowCard } from "./cards/TybaShowCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const YachtEvents = () => {
  return (
    <div className="bg-gray-100">
      <div className="container pr-0 pl-0">
        <div className="flex flex-col justify-center items-center max-w-[660px] mx-auto text-center gap-5 pt-[100px] pb-[50px]">
          <h1 className="text-[48px] font-[Unna-BoldItalic] text-secondary leading-[140%]">
            Yacht Shows
          </h1>
          <p className="text-xl">
            Throughout the year, the finest luxury charter yachts are exhibited
            in some of the globe’s most spectacular destinations. Allowing
            brokers and their clients to familiarise themselves with the latest
            designs, refits, and charter crews, these events are all but
            unmissable.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 lg:gap-3 xl:gap-5 justify-center">
          <MybaShowCard />
          <EastMedShowCard />
          <MediterraneanShowCard />
          <TybaShowCard />
        </div>
        <div className="flex justify-center pt-6 pb-[100px]">
          <Button asChild>
            <Link
              to=""
              className="!text-[15px] lg:!text-[20px] !bg-white !text-secondary"
            >
              More Yacht Shows
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
