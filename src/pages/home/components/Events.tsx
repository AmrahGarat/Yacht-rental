import { EventsCard } from "@/components/shared/event-card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const Events = () => {
  return (
    <div className="bg-white">
        <div className="container mt-[120px]">
            <div className="flex flex-col justify-center items-center max-w-[660px] mx-auto text-center gap-5 pt-[100px] pb-[65px]">
                <h1 className="text-[48px] font-[Unna-Italic] text-secondary leading-[140%]">Attend Events</h1>
                <p>A luxury charter yacht offers a platform unsurpassed in terms of luxury, privacy, and flexibility. View and attend some of the worlds most prestigious and high-octane events from the comfort of your own floating seven-star accommodation.</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-5 lg:gap-3 xl:gap-5 justify-center">
              <EventsCard/>
              <EventsCard/>
              <EventsCard/>
              <EventsCard/>
            </div>
            <div className="flex justify-center pt-6 pb-[100px]">
              <Button asChild>
                <Link to="/" className="!text-[15px] lg:!text-[20px]">More Events</Link>
            </Button>
            </div>
        </div>
    </div>
  )
}
