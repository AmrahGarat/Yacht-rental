import { Button } from "@/components/ui/button";
import { useMemo, useRef, useState } from "react";
import FilterIcon from "@/assets/icons/filter.svg";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "usehooks-ts";
import { useQuery } from "@tanstack/react-query";
import categoryService from "@/services/category";
import { useSearchParams } from "react-router-dom";
import MultiRangeSlider from "@/components/shared/multi-shared-slider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LocationFilter } from "@/components/shared/LocationFilter";
import { DateFilter } from "@/components/shared/DateFilter";

// Define the types for the filters data
type FilterOption = {
  value: string;
  label: string;
  count?: number;
};

type Filters = {
  label: string;
  options: FilterOption[];
}[];

// Define the props for the Filters component
type FiltersProps = {
  location: string;
};

export const Filters = ({ location }: FiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState<string[]>([]);
  const [selectedCabins, setSelectedCabins] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const { data: categoryResponse } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getAll,
  });

  const categoryOptions = useMemo(() => {
    if (!categoryResponse) return [];
    return categoryResponse.data.items.map((category) => ({
      value: category._id,
      label: category.name,
      count: category.count,
    }));
  }, [categoryResponse]);

  const capacityOptions = [
    { value: "2", label: "2 Person" },
    { value: "4", label: "4 Person" },
    { value: "6", label: "6 Person" },
    { value: "10", label: "10 Person" },
    { value: "12", label: "12 Person" },
    { value: "14", label: "14 Person" },
    { value: "16", label: "16 Person" },
    { value: "18", label: "18 Person" },
    { value: "20", label: "20 Person" },
    { value: "22", label: "22 Person" },
  ];
  const cabinsOptions = [
    { value: "1", label: "1 Cabin" },
    { value: "2", label: "2 Cabins" },
    { value: "3", label: "3 Cabins" },
    { value: "4", label: "4 Cabins" },
    { value: "5", label: "5 Cabins" },
    { value: "6", label: "6 Cabins" },
    { value: "7", label: "7 Cabins" },
    { value: "8", label: "8 Cabins" },
    { value: "9", label: "9 Cabins" },
    { value: "10", label: "10 Cabins" },
    { value: "11", label: "11 Cabins" },
    { value: "12", label: "12 Cabins" },
    { value: "13", label: "13 Cabins" },
    { value: "14", label: "14 Cabins" },
    { value: "15", label: "15 Cabins" },
  ];

  const filters: Filters = useMemo(
    () => [
      {
        label: "Category",
        options: categoryOptions,
      },
    ],
    [categoryOptions]
  );

  function toggle() {
    setIsOpen(!isOpen);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleCapacityChange(value: string) {
    setSelectedCapacity((prev) => {
      const newSelection = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      searchParams.delete("capacity");
      if (newSelection.length > 0) {
        newSelection.forEach((cap) => searchParams.append("capacity", cap));
      }
      setSearchParams(searchParams);
      return newSelection;
    });
  }
  function handleCabinsChange(value: string) {
    setSelectedCabins((prev) => {
      const newSelection = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      searchParams.delete("cabins");
      if (newSelection.length > 0) {
        newSelection.forEach((cap) => searchParams.append("cabins", cap));
      }
      setSearchParams(searchParams);
      return newSelection;
    });
  }

  function handleCategoryChange(value: string) {
    setSelectedCategories((prev) => {
      const newSelection = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];

      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.delete("category");

      if (newSelection.length > 0) {
        newSelection.forEach((cat) => newSearchParams.append("category", cat));
      }

      setSearchParams(newSearchParams);
      return newSelection;
    });
  }

  function handleRangeChange(min: number, max: number) {
    if (min === 0) {
      searchParams.delete("min_price");
    } else {
      searchParams.set("min_price", String(min));
    }
    if (max === 1000) {
      searchParams.delete("max_price");
    } else {
      searchParams.set("max_price", String(max));
    }
    setSearchParams(searchParams);
  }
  function handleRangeChangeSize(min: number, max: number) {
    if (min === max) {
      searchParams.set("size", String(min));
      searchParams.delete("min_size");
      searchParams.delete("max_size");
    } else {
      searchParams.delete("size");
      searchParams.set("min_size", String(min));
      searchParams.set("max_size", String(max));
    }
    setSearchParams(searchParams);
  }

  useOnClickOutside(ref, handleClose);

  function handleResetFilters() {
    setSelectedCapacity([]);
    setSelectedCabins([]);
    setSearchParams(new URLSearchParams());
  }

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "p-8 bg-white w-[360px] h-[calc(100vh-80px)] md:h-[calc(100vh-142px)] overflow-auto fixed top-[80px] md:top-[142px] z-20 duration-200 pb-20",
          isOpen ? "left-0" : "-left-[360px] xl:left-0"
        )}
      >
        <div className="flex flex-col gap-y-8 lg:gap-y-14">
          <LocationFilter /> {/* Pass location to LocationFilter */}
          <DateFilter />
          {filters.map((filter) => (
            <div key={filter.label}>
              <h4 className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic]">
                {filter.label}
              </h4>
              <div className="flex flex-col gap-y-4 lg:gap-y-8 border border-gray-300 p-2 rounded-[5px]">
                {filter.options.map((option) => (
                  <div
                    key={option.value}
                    className={`flex gap-x-2 items-center cursor-pointer  ${
                      selectedCategories.includes(option.value)
                        ? "bg-gray-200 rounded-sm pl-2"
                        : ""
                    }`}
                    onClick={() => handleCategoryChange(option.value)}
                  >
                    <label
                      htmlFor={`${filter.label}-${option.value}`}
                      className="text-secondary text-lg lg:text-xl font-semibold leading-[150%] tracking-[-0.4px] cursor-pointer"
                    >
                      {option.label}{" "}
                      {option.count && (
                        <span className="text-secondary">({option.count})</span>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Capacity Dropdown */}
          <div>
            <h4 className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic]">
              Capacity
            </h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full border-gray-300 !text-left text-secondary bg-white !rounded-md !p-[12px] flex justify-start hover:bg-white shadow-none border">
                  {selectedCapacity.length > 0
                    ? `${selectedCapacity.join(", ")} Persons`
                    : "Select Number of Guests"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {capacityOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => handleCapacityChange(option.value)}
                    className={`cursor-pointer ${
                      selectedCapacity.includes(option.value)
                        ? "bg-gray-200 "
                        : ""
                    }`}
                  >
                    {option.label}{" "}
                    {selectedCapacity.includes(option.value) && "✔"}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Cabins Dropdown */}
          <div>
            <h4 className="text-[20px] font-semibold tracking-[-0.24px] text-secondary mb-7 uppercase font-[Unna-BoldItalic] ">
              Cabins
            </h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full border-gray-300 !text-left text-secondary bg-white !rounded-md !p-[12px] flex justify-start hover:bg-white shadow-none border">
                  {selectedCabins.length > 0
                    ? `${selectedCabins.join(", ")} Cabins`
                    : "Select Cabins"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {cabinsOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => handleCabinsChange(option.value)}
                    className={`cursor-pointer ${
                      selectedCabins.includes(option.value) ? "bg-gray-200" : ""
                    }`}
                  >
                    {option.label}{" "}
                    {selectedCabins.includes(option.value) && "✔"}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Price Filter */}
          <MultiRangeSlider
            min={10000}
            max={3000000}
            step={500}
            unit="$"
            onChange={handleRangeChange}
          />
          {/* Size Filter */}
          <MultiRangeSlider
            min={1}
            max={500}
            step={1}
            unit="ft²"
            onChange={handleRangeChangeSize}
          />
          {/* Reset Filters Button */}
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleResetFilters}
              variant="outline"
              className="w-full !text-left text-secondary bg-blue-300 !rounded-md"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant={"outline"}
        onClick={toggle}
        className="xl:hidden w-fit ml-6 lg:ml-8 mt-4 -mb-4"
      >
        <img className="w-6 lg:w-8" src={FilterIcon} alt="Filter" />
      </Button>
    </>
  );
};
