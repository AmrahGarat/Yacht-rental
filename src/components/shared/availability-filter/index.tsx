import { Button } from "@/components/ui/button";
import { CustomSelect } from "../Select";
import { useQuery } from "@tanstack/react-query";
import locationService from "@/services/location";
import { useMemo } from "react";
import { SelectOption } from "@/types";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "@/constants/paths";

export const AvailabilityFilter = () => {
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

  return (
    <div className="flex flex-col justify-center items-center bg-secondary rounded-[20px] p-4 w-full">
      <div className="flex md:flex-wrap gap-6 justify-between items-center w-full">
        {/* Location Section */}
        <Card type="location" title="Location" options={locationsOptions} />

        {/* Pick-Up Section */}
        <Card type="pickup" title="Pick - Up" options={locationsOptions} />

        {/* Drop-Off Section */}
        <Card type="dropoff" title="Drop - Off" options={locationsOptions} />
      </div>

      {/* Book Button */}
      <Button className="mt-1">Book</Button>
    </div>
  );
};

// ✅ Updated `Card` Component with Dynamic Search Params
const Card = ({
  title,
  type,
  options,
}: {
  title: string;
  type: string;
  options: SelectOption[];
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedValue = searchParams.get(`${type}`);

  function handleChange(value: string) {
    searchParams.set(`${type}`, value);
    setSearchParams(searchParams);
    if (location.pathname === "/") {
      navigate(paths.LIST + "?" + searchParams.toString());
    }
  }

  return (
    <div className="flex flex-col gap-2 w-[31%] text-white">
      <p className="text-lg font-semibold text-[22px]">{title}</p>
      <CustomSelect
        value={selectedValue}
        onChange={handleChange}
        label=""
        options={options}
        placeholder={`Select ${title}`}
      />
    </div>
  );
};
