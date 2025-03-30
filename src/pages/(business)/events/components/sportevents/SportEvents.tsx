import { AbuDhabiGrandPrixCard } from "./cards/AbuDhabiGrandPrixCard";
import { MonacoEPrixCard } from "./cards/MonacoEPrixCard";
import { MonacoGrandPrixCard } from "./cards/MonacoGrandPrixCard";
import { SaudiArabiaGrandPrixCard } from "./cards/SaudiArabiaGrandPrixCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const SportEvents = () => {
  return (
    <div className="relative w-full bg-cover bg-top bg-no-repeat bg-[url('@/assets/images/skysports-f1-2022-driver-preview_5706316.jpg')]">
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      <div className="relative container pl-0 pr-0">
        <div className="flex flex-col justify-center items-center max-w-[660px] mx-auto text-center gap-5 pt-[100px] pb-[50px]">
          <h1 className="text-[48px] font-[Unna-BoldItalic] text-secondary leading-[140%]">
            Sporting Events
          </h1>
          <p className="text-xl">
            A luxury charter yacht offers a platform unsurpassed in terms of
            luxury, privacy, and flexibility. View some of the world’s most
            prestigious and high-octane sporting competitions from the comfort
            of your own floating seven-star accommodation.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 lg:gap-3 xl:gap-5 justify-center">
          <MonacoEPrixCard />
          <MonacoGrandPrixCard />
          <AbuDhabiGrandPrixCard />
          <SaudiArabiaGrandPrixCard />
        </div>
        <div className="flex justify-center pt-6 pb-[100px]">
          <Button asChild>
            <Link
              to=""
              className="!text-[15px] lg:!text-[20px] !bg-white !text-secondary"
            >
              More Sporting Events
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
