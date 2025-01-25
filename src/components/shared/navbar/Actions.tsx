import ProfileIcon from "@/assets/icons/profile.svg"
import MenuIcon from "@/assets/icons/menu.svg"
import { Link } from "react-router-dom"

export const NavbarActions = () => {
  return (
    <div className="flex gap-3 lg:gap-5">
      <Link to="/" className="rounded-full border border-[blue] opacity-80 hover:opacity-100 duration-75 p-2.5">
        <img src={ProfileIcon} alt="profile icon" className="h-[10px] md:h-[20px] lg:h-[40px]"/>
      </Link>
      <button className="rounded-full border border-[blue] opacity-80 hover:opacity-100 duration-75 p-2.5">
        <img src={MenuIcon} alt="menu icon" className="h-[10px] md:h-[20px] lg:h-[40px]"/>
      </button>
    </div>
  )
}