import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

type Props ={
    label: string;
    placeholder: string;
    options: {label: string; value: string}[];
    className?: string;
}

export const CustomSelect = ({label,options,placeholder,className}:Props) => {
  return (
    <div className={`custom-select-container ${className}`}>
    <p className="text-[17px]">
        {label}
    </p>
      <Select>
        <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {
            options.map((options) => (
                <SelectItem key={options.value} value={options.value}>
                    {options.label}
                </SelectItem>
            ))}
      </SelectContent>
      </Select>
    </div>
  )
}

        // <SelectGroup>
        //   <SelectLabel>North America</SelectLabel>
        //   <SelectItem value="USA">USA</SelectItem>
        //   <SelectItem value="Kanada">Kanada</SelectItem>
        //   <SelectItem value="Mexico">Mexico</SelectItem>
        // </SelectGroup>
        // <SelectGroup>
        //   <SelectLabel>Europe</SelectLabel>
        //   <SelectItem value="UK">UK</SelectItem>
        //   <SelectItem value="Germany">Germany</SelectItem>
        //   <SelectItem value="France">France</SelectItem>
        //   <SelectItem value="Monaco">Monaco</SelectItem>
        //   <SelectItem value="Italy">Italy</SelectItem>
        //   <SelectItem value="Spain">Spain</SelectItem>
        // </SelectGroup>
        // <SelectGroup>
        //   <SelectLabel>Asia</SelectLabel>
        //   <SelectItem value="Azerbaijan">Azerbaijan</SelectItem>
        //   <SelectItem value="Georgia">Georgia</SelectItem>
        //   <SelectItem value="Turkey">Turkey</SelectItem>
        //   <SelectItem value="UAE">UAE</SelectItem>
        //   <SelectItem value="South Korea">South Korea</SelectItem>
        //   <SelectItem value="China">China</SelectItem>
        // </SelectGroup>
        // <SelectGroup>
        //   <SelectLabel>Australia & Pacific</SelectLabel>
        //   <SelectItem value="Australia">Australian</SelectItem>
        //   <SelectItem value="New Zealand">New Zealand</SelectItem>
        // </SelectGroup>
        // <SelectGroup>
        //   <SelectLabel>South America</SelectLabel>
        //   <SelectItem value="Argentina">Argentina</SelectItem>
        //   <SelectItem value="Brazilia">Brasilia</SelectItem>
        //   <SelectItem value="Chile">Chile</SelectItem>
        // </SelectGroup>