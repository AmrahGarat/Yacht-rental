import { Button } from "@/components/ui/button";
import { CustomSelect } from "../Select";

export const AvailabilityFilter = ({ pageType }: { pageType?: 'home' | 'rentList' }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-[#3bb5da] rounded-[20px] p-4 ${pageType === 'rentList' ? 'w-full' : 'w-[370px] h-[550px]'}`}
    >
      {pageType !== 'rentList' && (
        <p className="text-white font-[Unna-BoldItalic] tracking-[1.2px] text-[30px] mb-6">
          Plan Your Escape!
        </p>
      )}
      <div
        className={`space-y-4 w-full ${pageType === 'rentList' ? 'flex md:flex-wrap gap-6 justify-between items-center space-y-0' : ''}`}
      >
        {/* City Section */}
        <div className={`flex flex-col gap-4 ${pageType === 'rentList' ? 'w-[31%] min-h-[140px] gap-1' : ''}`}>
          <p className="text-lg font-semibold text-[22px]">Locations</p>
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
        <div className={`flex flex-col gap-4 ${pageType === 'rentList' ? 'w-[31%] min-h-[140px] gap-1' : ''}`}>
          <p className="text-lg font-semibold text-[22px]">Pick - Up</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomSelect
              label="From"
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
              label="To"
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              placeholder="Select Date"
              className="w-full"
            />
          </div>
        </div>

        {/* Drop-off Section */}
        <div className={`flex flex-col gap-4 ${pageType === 'rentList' ? 'w-[31%] min-h-[140px] gap-1' : ''}`}>
          <p className="text-lg font-semibold text-[22px]">Drop - Off</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CustomSelect
              label="From"
              options={[
                { label: "A", value: "A" },
                { label: "B", value: "B" },
                { label: "C", value: "C" },
                { label: "D", value: "D" },
              ]}
              placeholder="Select Time"
              className="w-full"
            />
            <CustomSelect
              label="To"
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
      <Button className={`mt-6 ${pageType === 'rentList' ? 'mt-1' : ''}`}>
        Book
      </Button>
    </div>
  );
};
