import MediterraneanShowCard2025Img from "@/assets/images/mediterranean-yacht-show-medys-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import { Link } from "react-router-dom";

export const MediterraneanShowCard = () => {
  return (
    <div className="w-full bg-gray-100 rounded-[5px] max-w-[350px]">
      <Link to="/">
        <img
          src={MediterraneanShowCard2025Img}
          alt="monaco grand prix 2025"
          className="rounded-[5px] relative"
        />
        <div className="flex justify-between pt-1 pl-2">
          <h4 className="text-secondary font-[Unna-Italic] text-[20px] xl:text-[24px]">
            Mediterranean Yacht Show 2025
          </h4>
        </div>
      </Link>
      <div className="flex justify-between items-center pt-1 pl-2">
        <div className="flex gap-2 items-center">
          <img src={CalendarIcon} alt="yacht-size" className="w-4" />
          <p className="text-[#9499A6] text-base lg:text-sm xl:text-base leading-[140%]">
            3 - 7 May 2025
          </p>
        </div>
      </div>
      <p className="text-[#9499A6] text-sm leading-[160%] py-1 pl-2">
        Nafplion, Greece
      </p>
    </div>
  );
};
