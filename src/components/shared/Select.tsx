import { useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import ArrowDownImg from "@/assets/icons/menu.svg";
import { RenderIf } from "./RenderIf";

type Props = {
  label: string;
  placeholder: string;
  options: { label: string; value: string }[];
  value: string | null;
  onChange: (value: string) => void;
};

export const CustomSelect = ({
  label,
  options,
  placeholder,
  value,
  onChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Find the label of the selected option
  const selectedOptionLabel = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [options, value]
  );

  function toggle() {
    setIsOpen(!isOpen);
  }

  function close() {
    setIsOpen(false);
  }

  useOnClickOutside(ref, close);

  return (
    <div>
      {/* Dropdown Label */}
      <h5 className="text-secondary-500 text-base font-bold leading-[20px] tracking-[-0.32px]">
        {label}
      </h5>

      <div ref={ref} className="relative">
        {/* Dropdown Trigger */}
        <div
          onClick={toggle}
          className="flex justify-between cursor-pointer border border-gray-300 px-3 py-2 rounded-md bg-white text-secondary"
        >
          <p className="text-md text-secondary-300 font-medium tracking-[-0.24px]">
            {selectedOptionLabel || placeholder}
          </p>
          <img src={ArrowDownImg} className="w-[15px]" alt="Arrow Down" />
        </div>

        {/* Dropdown Content */}
        <RenderIf condition={isOpen}>
          <div className="absolute top-10 w-full bg-white mt-1 border border-secondary/50 z-20 shadow-md rounded-md text-secondary">
            <ul>
              {options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    close();
                  }}
                  className="p-2 hover:bg-information/60 cursor-pointer"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        </RenderIf>
      </div>
    </div>
  );
};
