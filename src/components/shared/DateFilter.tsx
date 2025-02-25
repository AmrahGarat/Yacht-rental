import { DatePicker } from "@/components/ui/date-picker";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const DateFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pickupDate, setPickupDate] = useState<Date | undefined>(
    searchParams.get("pickup_date")
      ? new Date(searchParams.get("pickup_date")!)
      : undefined
  );
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(
    searchParams.get("dropoff_date")
      ? new Date(searchParams.get("dropoff_date")!)
      : undefined
  );

  function handleDateChange(type: "pickup" | "dropoff", date?: Date) {
    if (date) {
      searchParams.set(`${type}_date`, date.toISOString());
      setSearchParams(searchParams);
      if (type === "pickup") setPickupDate(date);
      else setDropoffDate(date);
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Pick-Up Date */}
      <div className="flex flex-col gap-2">
        <p className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic]">
          Pick-Up Date
        </p>
        <DatePicker
          onChange={(date) => handleDateChange("pickup", date)}
          defaultDate={pickupDate ? pickupDate.toISOString() : undefined}
          hidePastDates
        />
      </div>

      {/* Drop-Off Date */}
      <div className="flex flex-col gap-2">
        <p className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic]">
          Drop-Off Date
        </p>
        <DatePicker
          onChange={(date) => handleDateChange("dropoff", date)}
          defaultDate={dropoffDate ? dropoffDate.toISOString() : undefined}
          hidePastDates
        />
      </div>
    </div>
  );
};
