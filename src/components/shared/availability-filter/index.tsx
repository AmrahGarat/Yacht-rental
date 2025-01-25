import { CustomSelect } from "../Select"

export const AvailabilityFilter = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#3bb5da] rounded-[20px] h-[350px] w-[370px] p-4">
        <p className="text-white font-[Unna-BoldItalic] tracking-[1.2px] text-[30px] mb-6">
            Plan Your Escape!
        </p>
        <div className="space-y-4 w-full">
            <div>
                <CustomSelect 
                    label="Locations" 
                    options={[
                        {label:"A", value:"A"},
                        {label:"B", value:"B"},
                        {label:"C", value:"C"},
                        {label:"D", value:"D"},
                    ]}
                    placeholder="Select Location"
                />
            </div>
            <div className="grid grid-cols-[1fr_1px_1fr] gap-x-6">
                <p className="col-span-1">Pick-up</p>
                {/* You can add your pick-up date/time selection component here */}
            </div>
            <div>
                <p>Drop-off</p>
                {/* You can add your drop-off date/time selection component here */}
            </div>
        </div>
    </div>
  )
}

