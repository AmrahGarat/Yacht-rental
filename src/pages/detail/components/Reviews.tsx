import { useState } from "react";
import Review from "./Review";

export const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const reviews = [
    <Review key={1} />,
    <Review key={2} />,
    <Review key={3} />,
    <Review key={4} />,
  ];
  const toggleShowAll = () => setShowAll((prev) => !prev);

  return (
    <div className="my-6 lg:my-8 bg-white p-5 lg:p-6">
      <div className="container px-0">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg lg:text-xl font-semibold text-secondary">
            Reviews
          </h2>
          <div className="py-1.5 px-3 bg-blue-600 text-white rounded-[4px] font-bold text-sm">
            4
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:gap-y-6 mt-6 lg:mt-8">
          {reviews.slice(0, showAll ? reviews.length : 2)}{" "}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={toggleShowAll}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-300"
          >
            {showAll ? "Show Less" : "Show All Reviews"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
