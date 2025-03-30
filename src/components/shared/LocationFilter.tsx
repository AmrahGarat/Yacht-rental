import { CustomSelect } from "./Select";
import { useQuery } from "@tanstack/react-query";
import locationService from "@/services/location";
import { useMemo } from "react";
import { SelectOption } from "@/types";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "@/constants/paths";

export const LocationFilter = () => {
  const location = useLocation(); // This is used to read the current location
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
      value: location._id, // Value to be passed to the select
      label: location.name, // Display name of the location
    }));
  }, [locationsResponse]);

  // Handle the change event for the location
  function handleChange(value: string) {
    searchParams.set("location", value); // Update search params with new location
    setSearchParams(searchParams); // Set the updated search params in URL
    if (location.pathname === "/") {
      navigate(paths.LIST + "?" + searchParams.toString()); // Navigate with the updated query
    }
  }

  // Get the selected location value from the query params
  const selectedLocation = searchParams.get("location");

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic]">
        Location
      </p>
      <CustomSelect
        label="Location"
        placeholder="Select Location"
        options={locationsOptions}
        value={selectedLocation}
        onChange={handleChange}
      />
    </div>
  );
};
