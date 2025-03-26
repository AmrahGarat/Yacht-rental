import { useState } from "react";
import HeartEmptyImg from "@/assets/icons/heart-empty.svg";
import HeartFilledRedImg from "@/assets/icons/heart-filled-red.svg";
import { Rent } from "@/types";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";
import { toast } from "sonner";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  likeItem,
  unlikeItem,
  selectLikedItems,
} from "@/store/features/likesSlice";
// import DOMPurify from "dompurify";

type Props = {
  rent: Rent;
};

export const YachtInformation = ({ rent }: Props) => {
  const dispatch = useAppDispatch();
  const likedItems = useAppSelector(selectLikedItems);

  const { user } = useSelector(selectUserData);
  const { openDialog } = useDialog();
  // const [isLiked, setIsLiked] = useState(false);
  const {
    _id,
    name,
    description,
    size,
    capacity,
    cabins,
    crew,
    price,
    category,
    location,
  } = rent;

  const [isLiked, setIsLiked] = useState(likedItems.includes(_id));
  const handleLike = () => {
    if (isLiked) {
      dispatch(unlikeItem(_id));
    } else {
      dispatch(likeItem(_id));
    }
    setIsLiked(!isLiked);
  };

  // const sanitizedDescription = DOMPurify.sanitize(description);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full lg:w-2/3 lg:pr-10">
          <h2 className="text-2xl font-[Unna-BoldItalic] mb-6 text-secondary text-transparent: uppercase">
            {name} YACHT CHARTER
          </h2>
          <div className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
            {description}
          </div>
          {/* <div
            className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]"
            dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
          ></div> */}
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          {/* <div className="flex flex-col gap-4 p-4 border-b-2 border-secondary">
            <div className="flex gap-4 mb-4"> */}
          {/* <button onClick={handleLike}>
            <img
              src={isLiked ? HeartFilledRedImg : HeartEmptyImg}
              alt="heart"
              className="h-8"
            />
          </button> */}
          {/* </div>
          </div> */}

          <div className="p-4 border-b-2 border-secondary">
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              SPECIFICATIONS
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 items-start text-black">
                <ul className="flex flex-col gap-4">
                  <li>CITY</li>
                  <li>CATEGORY</li>
                  <li>LENGTH</li>
                  <li>GUESTS</li>
                  <li>CABINS</li>
                  <li>CREW</li>
                </ul>
                {/* <p>CITY</p>
                <p>CATEGORY</p>
                <p>LENGTH</p>
                <p>GUESTS</p>
                <p>CABINS</p>
                <p>CREW</p> */}
              </div>
              <div className="flex flex-col gap-3 text-black text-right">
                <p>{location.name}</p>
                <p>{category.name}</p>
                <p className="text-[18px]">
                  <span className="text-[20px]">{size}</span> meters
                </p>
                <p>
                  Up to <span className="text-[20px]">{capacity}</span>
                </p>
                <p>
                  <span className="text-[20px]">{cabins}</span> bedrooms
                </p>
                <p>
                  <span className="text-[20px]">{crew}</span> members
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div>
              <h2 className="text-xl font-semibold mb-4">PRICE</h2>
              <p className="text-2xl font-bold text-secondary mb-4">
                {formatPrice(price)}
                <span className="text-[20px]"> USD / Day</span>
              </p>
              <button onClick={handleLike}>
                <img
                  src={isLiked ? HeartFilledRedImg : HeartEmptyImg}
                  alt="heart"
                  className="h-8"
                />
              </button>
            </div>

            <div className="w-full bg-secondary text-white py-3 rounded-md text-lg hover:bg-blue-500 transition duration-300">
              <Button
                asChild
                className="w-full bg-transparent h-full hover:bg-transparent border-none shadow-none"
              >
                <Link
                  to={paths.PAYMENT(_id)}
                  onClick={() => {
                    if (!user) {
                      toast.warning("Please login to book the Yacht");
                      openDialog(ModalTypeEnum.LOGIN);
                    }
                  }}
                >
                  Book This Yacht
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtInformation;
