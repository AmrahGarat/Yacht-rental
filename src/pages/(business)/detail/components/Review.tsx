import { formatDate } from "@/lib/utils";
import { Review as TReview } from "@/types";
import { User2Icon } from "lucide-react";

type Props = {
  review: TReview;
};

export const Review = ({ review }: Props) => {
  const { author, createdAt, content } = review;

  const fullName = `${author.name} ${author.surname}`;

  return (
    <div className="flex gap-x-4">
      <div className="bg-blue-500 rounded-full h-14 w-14 p-3">
        <User2Icon className="w-full h-full text-white" />
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div>
            <h6 className="text-gray-700 text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              {fullName}
            </h6>
          </div>
          <p className="text-gray-500 text-md font-medium leading-[150%] tracking-[-0.28px]">
            {formatDate(createdAt, "DD MMM yyyy")}
          </p>
        </div>
        <p className="text-sm font-normal !leading-[200%] max-w-[1000px] tracking-[-0.28px] mt-3 text-gray-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Review;
