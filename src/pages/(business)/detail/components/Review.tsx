import { User2Icon } from "lucide-react";

export const Review = () => {
  return (
    <div className="flex gap-x-4">
      <div className="bg-blue-500 rounded-full h-14 w-14 p-3">
        <User2Icon className="w-full h-full text-white" />
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <div>
            <h6 className="text-gray-700 text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Anna Michaelson
            </h6>
            <p className="text-gray-500 text-md font-medium leading-[150%] tracking-[-0.28px]">
              Company Owner
            </p>
          </div>
          <p className="text-gray-500 text-md font-medium leading-[150%] tracking-[-0.28px]">
            15 March 2024
          </p>
        </div>
        <p className="text-sm font-normal !leading-[200%] max-w-[1000px] tracking-[-0.28px] mt-3 text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          deleniti ipsum possimus libero necessitatibus officia quidem facilis
          architecto natus repellat. Earum veniam tempora voluptatibus eaque,
          accusamus eligendi at quaerat delectus perferendis maxime beatae
          officia, laboriosam error tenetur atque rem dignissimos illum
          blanditiis dolore, consequatur odio consequuntur odit vel. Nostrum,
          tempore!
        </p>
      </div>
    </div>
  );
};

export default Review;
