import { CustomSelect } from "./Select";
import { useQuery } from "@tanstack/react-query";
import locationService from "@/services/location";
import { useMemo } from "react";
import { SelectOption } from "@/types";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "@/constants/paths";

export const LocationFilter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: locationsResponse } = useQuery({
    queryKey: ["locations"],
    queryFn: locationService.getAll,
  });

  // Memoized Location Options
  const locationsOptions = useMemo(() => {
    if (!locationsResponse) return [];
    return locationsResponse.data.items.map((location) => ({
      value: location._id,
      label: location.name,
    }));
  }, [locationsResponse]);

  function handleChange(value: string) {
    searchParams.set("location", value);
    setSearchParams(searchParams);
    if (location.pathname === "/") {
      navigate(paths.LIST + "?" + searchParams.toString());
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic]">
        Location
      </p>
      <CustomSelect
        value={searchParams.get("location")}
        onChange={handleChange}
        label=""
        options={locationsOptions}
        placeholder="Select Location"
      />
    </div>
  );
};
