import { Rent } from "@/types";
import { Link } from "react-router-dom";
import { paths } from "@/constants/paths";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";
import { toast } from "sonner";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";

// import DOMPurify from "dompurify";

type Props = {
  rent: Rent;
};

export const YachtInformation = ({ rent }: Props) => {
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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap">
        <div className="flex flex-col w-full lg:w-2/3 lg:pr-10">
          <h2 className="text-2xl md:text-4xl font-[Unna-BoldItalic] pb-6 text-secondary text-transparent: uppercase">
            {name} YACHT CHARTER
          </h2>
          <div className="text-gray-600 text-sm md:text-md md:text-lg lg:text-xl xl:text-2xl leading-[200%]">
            {description}
          </div>
          <h2 className="text-gray-700 text-xl md:text-2xl font-[Unna-Bold] pt-6 pb-3">
            Special Features
          </h2>
          <div className="text-gray-500 text-md md:text-lg lg:text-xl xl:text-2xl leading-[200%]">
            This luxurious yacht is custom-built for world-class luxury yacht
            chartering, offering a wealth of spacious living areas and fabulous
            amenities, you'll be in for a treat from the moment you step on
            board. Her features include a beauty salon, elevator, underwater
            lights, beach club and gym.
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
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-secondary">
              SPECIFICATIONS
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 items-start text-black">
                <ul className="flex flex-col gap-4 text-[13px] md:text-[15px]">
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
                <p className="text-[12px] md:text-[18px]">
                  <span className="text-[12px] md:text-[18px]">{size}</span>{" "}
                  meters
                </p>
                <p>
                  Up to{" "}
                  <span className="text-[12px] md:text-[18px]">{capacity}</span>
                </p>
                <p>
                  <span className="text-[12px] md:text-[18px]">{cabins}</span>{" "}
                  bedrooms
                </p>
                <p>
                  <span className="text-[12px] md:text-[18px]">{crew}</span>{" "}
                  members
                </p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-lg md:text-xl font-semibold mb-4">PRICE</h2>
            <div className="flex flex-row items-center justify-between mb-4">
              <p className="text-xl md:text-2xl font-bold text-secondary">
                {formatPrice(price)}
                <span className="text-[15px] md:text-[20px]"> USD / Day</span>
              </p>
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
