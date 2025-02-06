import { Button } from "@/components/ui/button";
import { CustomSelect } from "../Select";

export const AvailabilityFilter = ({
  pageType,
}: {
  pageType?: "home" | "rentList";
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-secondary rounded-[20px] p-4 ${
        pageType === "rentList" ? "w-full" : "w-[370px] h-[600px]"
      }`}
    >
      {pageType !== "rentList" && (
        <p className="text-white font-[Unna-BoldItalic] tracking-[1.2px] text-[30px] mb-6">
          Plan Your Escape!
        </p>
      )}
      <div
        className={`w-full ${
          pageType === "rentList"
            ? "flex md:flex-wrap gap-6 justify-between items-center"
            : ""
        }`}
      >
        {/* City Section */}
        <div
          className={`flex flex-col gap-2 ${
            pageType === "rentList"
              ? "w-[31%] min-h-[140px] gap-1 text-white"
              : ""
          }`}
        >
          <p className="text-lg font-semibold text-[22px] text-white">
            Locations
          </p>
          <CustomSelect
            label="City"
            options={[
              { label: "A", value: "A" },
              { label: "B", value: "B" },
              { label: "C", value: "C" },
              { label: "D", value: "D" },
            ]}
            placeholder="Select Location"
          />
        </div>

        {/* Pick-up Section */}
        <div
          className={`flex flex-col gap-2 pt-10 ${
            pageType === "rentList" ? "w-[31%] min-h-[140px] gap-1 !pt-0" : ""
          }`}
        >
          <p className="text-lg font-semibold text-[22px] text-white">
            Pick - Up
          </p>
          <div className="flex sm:flex-row gap-4 text-white">
            <CustomSelect
              label="Date"
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              placeholder="Select Date"
              className="w-full"
            />
            <CustomSelect
              label="Time"
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              placeholder="Select Time"
              className="w-full"
            />
          </div>
        </div>

        {/* Drop-off Section */}
        <div
          className={`flex flex-col gap-2 pt-10 ${
            pageType === "rentList"
              ? "w-[31%] min-h-[140px] gap-1 !pt-0 text-white"
              : ""
          }`}
        >
          <p className="text-lg font-semibold text-[22px] text-white">
            Drop - Off
          </p>
          <div className="flex sm:flex-row gap-4">
            <CustomSelect
              label="Date"
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              placeholder="Select Date"
              className="w-full"
            />
            <CustomSelect
              label="Time"
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              placeholder="Select Time"
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* Book Button */}
      <Button className={`mt-6 ${pageType === "rentList" ? "mt-1" : ""}`}>
        Book
      </Button>
    </div>
  );
};
