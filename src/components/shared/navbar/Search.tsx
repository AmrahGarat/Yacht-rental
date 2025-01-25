import SearchIcon from "@/assets/icons/search.svg"
import FilterIcon from "@/assets/icons/filter.svg"

export const Search = () => {
  return (
    <div className="relative hidden md:block lg:w-[320px] xl:w-[500px]">
        <img src={SearchIcon} alt="searchicon" className="absolute left-5 w-8 top-2.5"/>
        <input placeholder="Navigate to your dream yacht experience..." className="w-full border-4 border-[#2a4fad] rounded-[70px] py-3 pl-12 lg:pl-16 pr-11 placeholder:text-secondary text-lg font-medium leading-[20px] tracking-[-0.3px]"/>
        <img src={FilterIcon} alt="filtericon" className="absolute right-5 w-8 top-2.5"/>
    </div>
  )
}
