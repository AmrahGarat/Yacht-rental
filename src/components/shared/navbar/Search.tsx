import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { Search as SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import rentService from "@/services/rents";
import { QUERY_KEYS } from "@/constants/query-keys";
import { paths } from "@/constants/paths";
import { SearchRent } from "../SearchRent";
import { GetAllRentResponseType } from "@/services/rents/types";
import { AxiosResponse } from "axios";
import {
  useQuery as useReactQuery,
  QueryFunction,
  QueryKey,
} from "@tanstack/react-query";

function useQuery({
  queryKey,
  queryFn,
}: {
  queryKey: QueryKey;
  queryFn: QueryFunction<AxiosResponse<GetAllRentResponseType>>;
}) {
  return useReactQuery({
    queryKey,
    queryFn,
  });
}

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const { data: rentList } = useQuery({
    queryKey: [QUERY_KEYS.RENT_LIST],
    queryFn: () => rentService.getAll(),
  });

  const rents = rentList?.data.items;

  const filteredRents = rents?.filter((rent) =>
    rent.name.toLowerCase().includes(text.toLowerCase())
  );

  const displayedRents = filteredRents?.slice(0, 5);

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      searchParams.delete("search");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("search", searchText);
    setSearchParams(searchParams);

    if (
      !location.pathname.includes("detail") &&
      location.pathname !== paths.HOME
    ) {
      navigate(`${location.pathname}?${searchParams.toString()}`);
    }
  };

  const clearSearch = () => {
    setText("");
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (location.pathname.includes("detail")) {
      clearSearch();
    }
  }, [location.pathname]);

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative outline-none">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          value={text}
          placeholder="Search for Yachts..."
          className="w-full pl-10 pr-10 bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 rounded-full"
          onChange={(e) => {
            setText(e.target.value);
            handleSearch(e.target.value);
          }}
          onFocus={(e) => {
            setIsFocused(true);
            e.target.classList.add(
              "outline-none",
              "ring-2",
              "ring-primary-500",
              "border-transparent"
            );
          }}
          onBlur={(e) => {
            setTimeout(() => setIsFocused(false), 200);
            e.target.classList.remove(
              "outline-none",
              "ring-2",
              "ring-primary-500",
              "border-transparent"
            );
          }}
        />
        {text && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {isFocused && text && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
          <div className="max-h-60 overflow-y-auto">
            <div className="p-2">
              {displayedRents && displayedRents.length > 0 ? (
                <SearchRent rent={displayedRents} clearSearch={clearSearch} />
              ) : (
                <p className="p-2 text-gray-500 dark:text-gray-400">
                  Yahcts found
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
