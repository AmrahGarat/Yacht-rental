import { Button } from "@/components/ui/button"
import { CustomSelect } from "../Select"

export const AvailabilityFilter = () => {
return (
    <div className="flex flex-col justify-center items-center bg-[#3bb5da] rounded-[20px] h-[550px] w-[370px] p-4">
        <p className="text-white font-[Unna-BoldItalic] tracking-[1.2px] text-[30px] mb-6">
            Plan Your Escape!
        </p>
        <div className="space-y-4 w-full">
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold text-[22px]">Locations</p>
                    <CustomSelect 
                        label="City" 
                        options={[
                            {label:"A", value:"A"},
                            {label:"B", value:"B"},
                            {label:"C", value:"C"},
                            {label:"D", value:"D"},
                        ]}
                        placeholder="Select Location"
                    />
                </div>
            </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold text-[22px]">Pick - Up</p>
                    <div className="flex flex-row gap-4">
                        <CustomSelect 
                        label="From" 
                        options={[
                            {label:"A", value:"A"},
                            {label:"B", value:"B"},
                            {label:"C", value:"C"},
                            {label:"D", value:"D"},
                        ]}
                        placeholder="Select Date"
                        className="w-full sm:w-1/2"
                        />
                        <CustomSelect 
                        label="To" 
                        options={[
                            {label:"A", value:"A"},
                            {label:"B", value:"B"},
                            {label:"C", value:"C"},
                            {label:"D", value:"D"},
                        ]}
                        placeholder="Select Date"
                        className="w-full sm:w-1/2"
                        />
                    </div>
                </div>
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold text-[22px]">Drop - Off</p>
                    <div className="flex flex-row gap-4">
                        <CustomSelect 
                        label="From" 
                        options={[
                            {label:"A", value:"A"},
                            {label:"B", value:"B"},
                            {label:"C", value:"C"},
                            {label:"D", value:"D"},
                        ]}
                        placeholder="Select Time"
                        className="w-full sm:w-1/2"
                        />
                        <CustomSelect 
                        label="To" 
                        options={[
                            {label:"A", value:"A"},
                            {label:"B", value:"B"},
                            {label:"C", value:"C"},
                            {label:"D", value:"D"},
                        ]}
                        placeholder="Select Time"
                        className="w-full sm:w-1/2"
                        />
                    </div>
                </div>
            </div>
        </div>
            <Button className="mt-4">
                Book
            </Button>
    </div>
)}

