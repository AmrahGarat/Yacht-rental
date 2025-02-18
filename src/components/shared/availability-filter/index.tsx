import { Button } from "@/components/ui/button";
import { CustomSelect } from "../Select";
import { useQuery } from "@tanstack/react-query";
import locationService from "@/services/location";
import { useMemo, useState } from "react";
import { SelectOption } from "@/types";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { paths } from "@/constants/paths";
import { DatePicker } from "@/components/ui/date-picker";

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

        {/* Pick-Up Section with DatePicker */}
        <Card
          type="pickup"
          title="Pick - Up"
          options={locationsOptions}
          showDatePicker
        />

        {/* Drop-Off Section with DatePicker */}
        <Card
          type="dropoff"
          title="Drop - Off"
          options={locationsOptions}
          showDatePicker
        />
      </div>

      {/* Book Button */}
      <Button className="mt-3">Book</Button>
    </div>
  );
};

// ✅ Updated `Card` Component with DatePicker Support
const Card = ({
  title,
  type,
  options,
  showDatePicker = false,
}: {
  title: string;
  type: string;
  options: SelectOption[];
  showDatePicker?: boolean;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedValue = searchParams.get(`${type}`);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    searchParams.get(`${type}_date`)
      ? new Date(searchParams.get(`${type}_date`)!)
      : undefined
  );

  // const selectedValue = searchParams.get(`${type}_location`);

  function handleChange(value: string) {
    searchParams.set(`${type}`, value);
    setSearchParams(searchParams);
    if (location.pathname === "/") {
      navigate(paths.LIST + "?" + searchParams.toString());
    }
  }

  const todayDate = new Date();
  function handleDateChange(date?: Date) {
    console.log(date?.toISOString());
    if (date) {
      searchParams.set(`${type}_date`, date.toISOString());
      setSearchParams(searchParams);
      setSelectedDate(date);
    }
  }

  return (
    <div className="flex flex-col gap-2 w-[31%] text-white">
      <p className="text-lg font-semibold text-[22px]">{title}</p>
      {showDatePicker ? (
        <DatePicker
          onChange={handleDateChange}
          defaultDate={
            (selectedDate as unknown as string) ?? todayDate.toISOString()
          }
          hidePastDates
        />
      ) : (
        <CustomSelect
          value={selectedValue}
          onChange={handleChange}
          label=""
          options={options}
          placeholder={`Select ${title}`}
        />
      )}
    </div>
  );
};
