import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import GuestsSizeImg from "@/assets/icons/guests-size.svg";
import BedroomNumberImg from "@/assets/icons/bedroom-number.svg";
import CrewSizeImg from "@/assets/icons/crew-size.svg";
import YachtSizeImg from "@/assets/icons/yacht-size.svg";
import { Skeleton } from "@/components/ui/skeleton";
import { Rent } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";
import { toast } from "sonner";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} from "@/services/favorite";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type Props = {
  rent: Rent;
};

export const RentCard = ({ rent }: Props) => {
  const { user } = useSelector(selectUserData);
  const { openDialog } = useDialog();
  const userId = user?._id;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!userId || !rent?._id) return;

    const checkFavorite = async () => {
      try {
        const favorites = await getFavorites(userId);
        const isFav = favorites.some(
          (fav: { rent: { _id: string } }) => fav.rent?._id === rent._id
        );
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Error during control of favorites:", error);
      }
    };

    checkFavorite();
  }, [userId, rent?._id]);

  const toggleFavorite = async () => {
    if (!userId || !rent?._id) return;

    try {
      if (isFavorite) {
        await removeFromFavorites(userId, rent._id);
      } else {
        await addToFavorites(userId, rent._id);
      }

      setIsFavorite(!isFavorite);

      // Güncellenen favori listesini al ve konsola yazdır
      const updatedFavorites = await getFavorites(userId);
      console.log("Güncellenmiş Favoriler:", updatedFavorites);
    } catch (error) {
      console.error("Favori işlemi sırasında hata oluştu:", error);
    }
  };

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
          alt={name}
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
          {userId && (
            <button
              onClick={toggleFavorite}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              {isFavorite ? (
                <Heart className="w-4 lg:w-6 h-4 lg:h-6 text-red-600 fill-red-600" />
              ) : (
                <Heart className="w-4 lg:w-6 h-4 lg:h-6 text-gray-500 dark:text-gray-300" />
              )}
            </button>
          )}
        </div>
      </div>
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
      <p className="text-[#9499A6] text-xs md:text-sm leading-[160%] p-2 md:p-4 overflow-hidden overflow-ellipsis line-clamp-3">
        {description}
      </p>

      <div className="flex justify-between items-center p-4">
        <p className="text-secondary text-md md:text-xl">
          {formatPrice(price)} / <span className="text-sm md:text-md">Day</span>
        </p>
        <Button asChild>
          <Link
            to={paths.PAYMENT(_id)}
            onClick={() => {
              if (!user) {
                toast.warning("Please login to book the Yacht");
                openDialog(ModalTypeEnum.LOGIN);
              }
            }}
          >
            Book Now
          </Link>
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
