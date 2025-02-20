import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";

import HeartEmptyImg from "@/assets/icons/heart-empty.svg";
import HeartFilledRedImg from "@/assets/icons/heart-filled-red.svg";
import YachtFlyingFoxImg from "@/assets/images/yacht-flying-fox.jpeg";
import GuestsSizeImg from "@/assets/icons/guests-size.svg";
import BedroomNumberImg from "@/assets/icons/bedroom-number.svg";
import CrewSizeImg from "@/assets/icons/crew-size.svg";
import YachtSizeImg from "@/assets/icons/yacht-size.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { Rent } from "@/types";
import { formatPrice } from "@/lib/utils";

type Props = {
  rent: Rent;
};

export const RentCard = ({ rent }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();
  // const id = "asdc-12d1w-12d1w-12d1w-12d1w";
  const {
    _id,
    name,
    category,
    description,
    images,
    size,
    capacity,
    cabins,
    crew,
    price,
  } = rent;
  const mainImage = images[0];

  return (
    <div className="w-full bg-white rounded-[20px]">
      <Link to={paths.DETAIL(_id)}>
        <img
          src={mainImage}
          alt="yacht flying fox"
          className="pb-2 rounded-[20px] cursor-pointer"
        />
      </Link>
      <div className="flex justify-between p-4">
        <div className="flex flex-col gap-1 text-md text-secondary">
          <Link
            to={paths.DETAIL(_id)}
            className="text-secondary font-[Unna-Italic] text-[24px] cursor-pointer hover:underline"
          >
            {name}
          </Link>
          <p>{category.name}</p>
        </div>
        <button onClick={() => setIsLiked(!isLiked)}>
          <img src={isLiked ? HeartFilledRedImg : HeartEmptyImg} alt="heart" />
        </button>
      </div>
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-1 items-center">
          <img src={YachtSizeImg} alt="yacht-size" className="w-3 md:w-5" />
          <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
            {size}” ft
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={GuestsSizeImg} alt="guests-size" className="w-5" />
          <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
            {capacity} Guests
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={BedroomNumberImg} alt="bedroom-number" className="w-5" />
          <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
            {cabins} Cabins
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={CrewSizeImg} alt="crew-size" className="w-5" />
          <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
            {crew} Crew
          </p>
        </div>
      </div>
      <p className="text-[#9499A6] text-sm leading-[160%] p-4 overflow-hidden overflow-ellipsis line-clamp-3">
        {description}
      </p>

      <div className="flex justify-between items-center p-4">
        <p className="text-secondary text-xl">
          {formatPrice(price)} / <span className="text-sm">week</span>
        </p>
        <Button asChild>
          <Link to={paths.PAYMENT(_id)}>Book Now</Link>
        </Button>
      </div>
    </div>
  );
};

RentCard.Skeleton = function () {
  return (
    <div className="w-full bg-white rounded-[20px] shadow-lg overflow-hidden">
      <Skeleton className="w-full h-[200px] md:h-[220px] rounded-[20px] bg-gradient-to-r from-blue-100 to-white" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-7 w-3/5 rounded-lg bg-blue-200" />
        <Skeleton className="h-4 w-1/4 rounded-lg bg-blue-100" />
      </div>
      <div className="flex justify-between items-center p-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Skeleton className="w-6 h-6 rounded-full bg-blue-300 shadow-sm" />
            <Skeleton className="h-4 w-16 rounded bg-blue-100" />
          </div>
        ))}
      </div>
      <div className="p-4">
        <Skeleton className="h-16 w-full rounded-lg bg-gradient-to-r from-blue-100 to-white" />
      </div>
      <div className="flex justify-between items-center p-4">
        <Skeleton className="h-7 w-1/4 rounded-lg bg-blue-300" />
        <Skeleton className="h-10 w-24 rounded-lg bg-blue-400 shadow-md animate-pulse" />
      </div>
    </div>
  );
};
