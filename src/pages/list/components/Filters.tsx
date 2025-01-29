import { Button } from "@/components/ui/button";
import { useState } from "react"
import FilterIcon from "@/assets/icons/filter.svg";


export const Filters = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
      <div className="hidden xl:block bg-white w-[360px] h-[calc(100vh-142px)] fixed top-[142px]">
        <Filters/>
      </div>
      <Button className="xl:hidden">
        <img src={FilterIcon} alt="Filter" />
      </Button>
    </div>
  )
}
