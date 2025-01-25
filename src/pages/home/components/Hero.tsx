import MainYachtImage from "@/assets/images/main yacht.jpeg"
import { AvailabilityFilter } from "@/components/shared/availability-filter"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="relative h-[1150px] w-full text-white">
        <img src={MainYachtImage} alt="main yacht image" className="w-full h-full object-cover" />
        <div className="flex items-center justify-center">
            <div className="absolute left-[50px] lg:left-[150px] top-[50px] right-[50px] lg:right-[0px] lg:top-[150px] max-w-[1000px] xl:max-w-[520px]">
            <h3 className="text-[15px] lg:text-[20px] leading-[110%] tracking-[1.2px] mb-3 lg:mb-6 font-[Unna-BoldItalic]">YACHT CLUB & BOAT RENTAL</h3>
            <h1 className="text-[60px] lg:text-[85px] leading-[115%] mb-3 lg:mb-6 font-[Unna-BoldItalic]">Discover the Freedom of the Open Sea</h1>
            <p className="text-[15px] lg:text-[20px] leading-[160%] mb-3 lg:mb-6">Experience the ultimate in luxury and relaxation as you cruise the open waters. Whether you're looking for a serene getaway or an adventurous day on the sea, our yachts offer unparalleled comfort and style. With professional crews and customizable itineraries, every journey is tailored to your desires. Let us help you create unforgettable memories on the water.</p>
            <Button>
                Discover More
            </Button>
        </div>
        <div className="absolute lg:right-[150px] bottom-[50px] lg:bottom-[50px] xl:top-[150px]">
            <AvailabilityFilter/>
        </div>
        </div>

    </div>
  )
}

export default Hero
