import SearchIcon from "@/assets/icons/search.svg";
import FilterIcon from "@/assets/icons/filter.svg";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "@/constants/paths";

let timeoutId: NodeJS.Timeout;
export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isListingPage = location.pathname.includes("list");

  function handleSearch(searchText: string) {
    clearTimeout(timeoutId);
    if (!searchText) {
      searchParams.delete("search");
      setSearchParams(searchParams);
      return;
    }

    timeoutId = setTimeout(() => {
      searchParams.set("search", searchText);
      setSearchParams(searchParams);
      if (!isListingPage) navigate(paths.LIST + `?${searchParams.toString()}`);
    }, 300);
  }

  return (
    <div className="relative hidden md:block lg:w-[320px] xl:w-[500px]">
      <img
        src={SearchIcon}
        alt="searchicon"
        className="absolute left-5 w-5 top-3.5"
      />
      <input
        onChange={(e) => handleSearch(e.target.value.trim())}
        placeholder="Navigate to your dream yacht experience..."
        className="w-full border-[1px] border-blue-400 rounded-[70px] py-3 pl-12 lg:pl-16 pr-11 placeholder:text-secondary text-lg font-medium leading-[20px] tracking-[-0.3px]"
      />
      <img
        src={FilterIcon}
        alt="filtericon"
        className="absolute right-5 w-5 top-4"
      />
    </div>
  );
};
