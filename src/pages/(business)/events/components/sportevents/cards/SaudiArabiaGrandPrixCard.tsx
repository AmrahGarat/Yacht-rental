import SaudiArabiaGrandPrix2026Img from "@/assets/images/saudi-arabia-grand-prix-2026-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import { Link } from "react-router-dom";

export const SaudiArabiaGrandPrixCard = () => {
  return (
    <div className="w-full bg-white rounded-[5px] max-w-[350px]">
      <Link to="/">
        <img
          src={SaudiArabiaGrandPrix2026Img}
          alt="monaco grand prix 2025"
          className="rounded-[5px] relative"
        />
        <div className="flex justify-between pt-1 pl-2">
          <h4 className="text-secondary font-[Unna-Italic] text-[20px] xl:text-[24px]">
            Saudi Arabia Grand Prix 2026
          </h4>
        </div>
      </Link>
      <div className="flex justify-between items-center pt-1 pl-2">
        <div className="flex gap-2 items-center">
          <img src={CalendarIcon} alt="yacht-size" className="w-4" />
          <p className="text-[#9499A6] text-base lg:text-sm xl:text-base leading-[140%]">
            TBA
          </p>
        </div>
      </div>
      <p className="text-[#9499A6] text-sm leading-[160%] py-1 pl-2">
        Jeddah Corniche Circuit, Jeddah, Saudi Arabia
      </p>
    </div>
  );
};
