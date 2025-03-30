import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import GuestsSizeImg from "@/assets/icons/guests-size.svg";
import BedroomNumberImg from "@/assets/icons/bedroom-number.svg";
import CrewSizeImg from "@/assets/icons/crew-size.svg";
import YachtSizeImg from "@/assets/icons/yacht-size.svg";

interface Rent {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: { name: string };
  size: number;
  capacity: number;
  cabins: number;
  crew: number;
  description: string;
}

interface FavoriteCardProps {
  rent: Rent | null;
  onRemove: (rentId: string) => void;
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({
  rent,
  onRemove,
}) => {
  if (!rent) {
    return null;
  }

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
    <div className="w-full bg-white rounded-[20px] shadow-md relative">
      {/* Favorite Remove Button - positioned absolutely */}
      <button
        onClick={() => onRemove(_id)}
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
      >
        <Heart className="w-6 h-6 text-red-600 fill-red-600" />
      </button>

      {/* Image - matches RentCard styling exactly */}
      <Link to={paths.DETAIL(_id)} className="block">
        <img
          src={mainImage}
          alt={name}
          className="w-full rounded-t-[20px] cursor-pointer"
          style={{ height: "auto", aspectRatio: "16/9" }}
        />
      </Link>

      {/* Content - matches RentCard structure */}
      <div className="flex justify-between p-4 pt-2">
        <div className="flex flex-col gap-1 text-md text-secondary">
          <Link
            to={paths.DETAIL(_id)}
            className="text-secondary font-[Unna-Italic] text-[24px] cursor-pointer hover:underline"
          >
            {name}
          </Link>
          <p>{category.name}</p>
        </div>
      </div>

      {/* Yacht Details - matches RentCard exactly */}
      <div className="flex justify-between items-center p-2 md:p-4">
        <div className="flex gap-1 items-center">
          <img src={YachtSizeImg} alt="yacht-size" className="w-3 md:w-5" />
          <p className="text-[#9499A6] text-xs md:text-sm lg:text-sm xl:text-base leading-[140%]">
            {size}” ft
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={GuestsSizeImg} alt="guests-size" className="w-3 md:w-5" />
          <p className="text-[#9499A6] text-xs md:text-sm lg:text-sm xl:text-base leading-[140%]">
            {capacity} Guests
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img
            src={BedroomNumberImg}
            alt="bedroom-number"
            className="w-3 md:w-5"
          />
          <p className="text-[#9499A6] text-xs md:text-sm lg:text-sm xl:text-base leading-[140%]">
            {cabins} Cabins
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={CrewSizeImg} alt="crew-size" className="w-3 md:w-5" />
          <p className="text-[#9499A6] text-xs md:text-sm lg:text-sm xl:text-base leading-[140%]">
            {crew} Crew
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#9499A6] text-xs md:text-sm leading-[160%] p-2 md:p-4 overflow-hidden overflow-ellipsis line-clamp-3">
        {description}
      </p>

      {/* Price & Button */}
      <div className="flex justify-between items-center p-4">
        <p className="text-secondary text-md md:text-xl">
          {formatPrice(price)} / <span className="text-sm md:text-md">Day</span>
        </p>
        <Button asChild>
          <Link to={paths.PAYMENT(_id)}>Book Now</Link>
        </Button>
      </div>
    </div>
  );
};
