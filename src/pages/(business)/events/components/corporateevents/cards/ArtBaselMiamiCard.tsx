import ArtBaselMiamiCard2025Img from "@/assets/images/art-basel-miami-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";

export const ArtBaselMiamiCard = () => {
  return (
    <div className="w-full bg-white rounded-[5px] max-w-[350px]">
      <Link to={paths.EVENTS.ARTBASEL} className="block">
        <img
          src={ArtBaselMiamiCard2025Img}
          alt="monaco grand prix 2025"
          className="rounded-[5px] relative"
        />
        <div className="flex justify-between pt-1 pl-2">
          <h4 className="text-secondary font-[Unna-Italic] text-[20px] xl:text-[24px]">
            Art Basel Miami 2025
          </h4>
        </div>
      </Link>
      <div className="flex justify-between items-center pt-1 pl-2">
        <div className="flex gap-2 items-center">
          <img src={CalendarIcon} alt="yacht-size" className="w-4" />
          <p className="text-[#9499A6] text-base lg:text-sm xl:text-base leading-[140%]">
            5 - 7 Dec 2025
          </p>
        </div>
      </div>
      <p className="text-[#9499A6] text-sm leading-[160%] py-1 pl-2">
        Miami, Florida
      </p>
    </div>
  );
};
