import React from "react";

interface YachtCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const UpcomingEventCard: React.FC<YachtCardProps> = ({
  name,
  image,
  onClick,
}) => {
  return (
    <div
      className="relative border border-gray-400 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-300"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-full h-44 object-cover" />

      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-3">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
