import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { selectUserData } from "@/store/features/userSlice";
import { toast } from "sonner";
import { FavoriteCard } from "./components/favoriteCard";
import { getFavorites, removeFromFavorites } from "@/services/favorite";
import { QUERY_KEYS } from "@/constants/query-keys";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { Rent } from "@/types";

interface Favorite {
  rent: Rent | null;
  _id: string;
  user: string;
}

export const FavoritesPage = () => {
  const queryClient = useQueryClient();
  const { user } = useSelector((state: RootState) => selectUserData(state));

  // Fetch favorites
  const {
    data: favorites,
    isLoading,
    isError,
  } = useQuery<Favorite[]>({
    queryKey: [QUERY_KEYS.FAVORITES, user?._id],
    queryFn: () => getFavorites(user?._id || ""),
    enabled: !!user?._id,
  });

  // Filter out favorites with null or undefined products
  const validFavorites = favorites?.filter((item) => item.rent) || [];

  // Log favorites on success
  useEffect(() => {
    if (favorites) {
      console.log("Favorites:", favorites);
    }
  }, [favorites]);

  // Mutation to remove a favorite
  const removeFavoriteMutation = useMutation({
    mutationFn: ({ userId, rentId }: { userId: string; rentId: string }) =>
      removeFromFavorites(userId, rentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FAVORITES] });
      toast.success("Removed from favorites!");
    },
    onError: (error) => {
      console.error("Failed to remove favorite:", error);
      toast.error("Failed to remove favorite.");
    },
  });

  const handleRemoveFavorite = (rentId: string) => {
    if (!user?._id) {
      toast.error("User not found. Please log in.");
      return;
    }
    removeFavoriteMutation.mutate({ userId: user._id, rentId });
  };

  if (isLoading)
    return <div className="text-center dark:text-gray-200">Loading...</div>;
  if (isError)
    return (
      <div className="text-center dark:text-gray-200">
        Error loading favorites
      </div>
    );
  if (!validFavorites || validFavorites.length === 0)
    return (
      <div className="text-center dark:text-gray-200">
        No favorite items found.
      </div>
    );

  return (
    <div className="container py-10">
      <ScrollToTop />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Your Favorites
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          All your favorite products in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {validFavorites.map((item) => (
          <FavoriteCard
            key={item._id}
            rent={item.rent}
            onRemove={handleRemoveFavorite}
          />
        ))}
      </div>
    </div>
  );
};
