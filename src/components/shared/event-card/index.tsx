import MonacoGrandPrix2025Img from "@/assets/images/monaco-grand-prix-2025.jpg"
import CalendarIcon from "@/assets/icons/calendar-icon.svg"
import { Link } from "react-router-dom"

export const EventsCard = () => {
  return (
    <div className="w-full bg-white rounded-[10px] max-w-[350px]">
        <Link to="/">
            <img src={MonacoGrandPrix2025Img} alt="monaco grand prix 2025" className="rounded-[10px] relative" />
            <div className="flex justify-between pt-1">
                <h4 className="text-secondary font-[Unna-Italic] text-[20px] xl:text-[24px]">
                    Monaco Grand Prix 2025
                </h4>
            </div>
        </Link>
        <div className="flex justify-between items-center pt-1">
            <div className="flex gap-2 items-center">
                <img src={CalendarIcon} alt="yacht-size" className="w-4"/>
                <p className="text-[#9499A6] text-base lg:text-sm xl:text-base leading-[140%]">3 - 4 May 2025</p>
            </div>
        </div>
        <p className="text-[#9499A6] text-sm leading-[160%] pt-1">Monte Carlo, Monaco</p>
    </div>
  )
}
