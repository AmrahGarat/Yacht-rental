import React from "react";
import { useAppSelector } from "@/hooks/redux";
import { selectLikedItems } from "@/store/features/likesSlice";
import { RentCard } from "@/components/shared/rent-card";

type Rent = {
  _id: string;
  name: string;
  price: number;
  description: string;
  size: number;
  capacity: number;
  cabins: number;
  crew: number;
  createdAt: string;
  currency: string;
  location: string;
  images: string[];
  showInFeatured: boolean;
};

export const LikesPage = () => {
  // Assuming likedItems is an array of Rent objects
  const likedItems: Rent[] = useAppSelector(selectLikedItems);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Liked Yachts</h1>

      {likedItems.length === 0 ? (
        <p className="text-xl text-gray-600">No liked items yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {likedItems.map((rent) => (
            // Pass the full rent object, not just the _id
            <RentCard key={rent._id} rent={rent} />
          ))}
        </div>
      )}
    </div>
  );
};
