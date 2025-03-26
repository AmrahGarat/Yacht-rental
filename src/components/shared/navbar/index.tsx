import { Link } from "react-router-dom";
import { NavbarActions } from "./Actions";
import { Search } from "./Search";
import YachtIcon from "@/assets/icons/yacht.svg";
import { paths } from "@/constants/paths";
// import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/select/LanguageSelect";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  // const { t } = useTranslation();
  return (
    <div className="bg-white  py-6 md:py-10 sticky top-0 z-30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-x-2.5 md:gap-x-5 lg:gap-x-10">
          <img
            src={YachtIcon}
            alt="yacht icon"
            className="h-[35px] lg:h-[50px] sm:mr-[-5px] lg:mr-[-30px]"
          />
          <Link
            to={paths.HOME}
            className="text-[20px] lg:text-[35px] text-secondary tracking-[2.4px]"
          >
            OceanicOdyssey
          </Link>
          <Search />
        </div>
        <div className="flex gap-2 items-center">
          <LanguageSelector />
          <ModeToggle />
        </div>
        <NavbarActions />
      </div>
    </div>
  );
};
