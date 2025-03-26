import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArtBaselMiamiCard } from "./cards/ArtBaselMiamiCard";
import { CannesFilmFestivalCard } from "./cards/CannesFilmFestivalCard";
import { CannesLionsCard } from "./cards/CannesLionsCard";
import { MipcomCard } from "./cards/MipcomCard";

export const CorporateEvents = () => {
  return (
    <div className="relative w-full bg-cover bg-top bg-no-repeat bg-[url('@/assets/images/Cannes.jpeg')]">
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      <div className="relative container pl-0 pr-0">
        <div className="flex flex-col justify-center items-center max-w-[660px] mx-auto text-center gap-5 pt-[100px] pb-[50px]">
          <h1 className="text-[48px] font-[Unna-BoldItalic] text-secondary leading-[140%]">
            Corporate Charter Events
          </h1>
          <p className="text-xl">
            Many prestigious events in the yachting calendar provide the perfect
            setting for a corporate yacht charter. Renting a superyacht for
            meetings and product launches is also the ultimate way to get
            noticed and impress.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 lg:gap-3 xl:gap-5 justify-center">
          <CannesFilmFestivalCard />
          <CannesLionsCard />
          <ArtBaselMiamiCard />
          <MipcomCard />
        </div>
        <div className="flex justify-center pt-6 pb-[100px]">
          <Button asChild>
            <Link
              to=""
              className="!text-[15px] lg:!text-[20px] !bg-white !text-secondary"
            >
              More Corporate Charter Events
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
