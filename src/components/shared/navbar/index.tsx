import { NavbarActions } from "./Actions"
import { Search } from "./Search"
import YachtIcon from "@/assets/icons/yacht.svg"

export const Navbar = () => {
  return (
    <div className="bg-white  py-6 md:py-10 sticky top-0 z-20">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-x-2.5 md:gap-x-5 lg:gap-x-10">
          <img src={YachtIcon} alt="yacht icon" className="h-[25px] md:h-[50px] sm:mr-[-20px] md:mr-[-30px]" />
          <h1 className="text-[20px] md:text-[35px] text-secondary tracking-[2.4px]">
          OceanicOdyssey
          </h1>
          <Search/>
        </div>
        <NavbarActions/>
      </div>
    </div>
  )
}
