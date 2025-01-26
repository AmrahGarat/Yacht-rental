import HeartEmptyImg from "@/assets/icons/heart-empty.svg"
import HeartFilledRedImg from "@/assets/icons/heart-filled-red.svg"
import YachtFlyingFoxImg from "@/assets/images/yacht-flying-fox.jpeg"
import GuestsSizeImg from "@/assets/icons/guests-size.svg"
import BedroomNumberImg from "@/assets/icons/bedroom-number.svg"
import CrewSizeImg from "@/assets/icons/crew-size.svg"
import YachtSizeImg from "@/assets/icons/yacht-size.svg"


import { useState } from "react"
import { Button } from "@/components/ui/button"

export const PopularYachts = () => {
const [isLiked, setIsLiked] = useState(false)
return (
    <div className="w-full bg-white rounded-[20px]">
        <img src={YachtFlyingFoxImg} alt="yacht flying fox" className="pb-2 rounded-[20px]" />
        <div className="flex justify-between p-4">
        <h4 className="text-secondary font-[Unna-Italic] text-[24px]">
            Flying Fox
        </h4>
        <button onClick={() => setIsLiked(!isLiked)}>
            <img src={isLiked ? HeartFilledRedImg: HeartEmptyImg} alt="heart" />
        </button>
        </div>
        <div className="flex justify-between items-center p-4">
            <div className="flex gap-1 items-center">
                <img src={YachtSizeImg} alt="yacht-size" className="w-3 md:w-5"/>
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">446” ft</p>
            </div>
            <div className="flex gap-1 items-center">
                <img src={GuestsSizeImg} alt="guests-size" className="w-5"/>
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">22 Guests</p>
            </div>
            <div className="flex gap-1 items-center">
                <img src={BedroomNumberImg} alt="bedroom-number" className="w-5"/>
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">11 Cabins</p>
            </div>
            <div className="flex gap-1 items-center">
                <img src={CrewSizeImg} alt="crew-size" className="w-5"/>
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">55 Crew</p>
            </div>
        </div>
        <p className="text-[#9499A6] text-sm leading-[160%] p-4">Built in 2019, Flying Fox is custom-built for world-class luxury yacht chartering, offering a wealth of spacious living areas and fabulous amenities, you'll be in for a treat from the moment you step on board.</p>
        <div className="flex justify-between items-center p-4">
            <p className="text-secondary text-xl">$3,000,000 / <span className="text-sm">week</span></p>
            <Button>Book Now</Button>
        </div>
    </div>
)}