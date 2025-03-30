import { Request, Response } from "express";
import Favorite from "../mongoose/schemas/favorite";
import { Rent } from "../types/schema";

// Favorilere ekle
export const addToFavorites = async (req: Request, res: Response) => {
  const { userId, rentId } = req.body;

  try {
    const existingFavorite = await Favorite.findOne({
      user: userId,
      rent: rentId,
    });
    if (existingFavorite) {
      res.status(400).json({ message: "rent already in favorites" });
      return;
    }

    const favorite = new Favorite({ user: userId, rent: rentId });
    await favorite.save();

    res.status(201).json({ message: "rent added to favorites", favorite });
  } catch (error) {
    console.error("Add to favorites error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Favorilerden çıkar
export const removeFromFavorites = async (req: Request, res: Response) => {
  const { userId, rentId } = req.query;

  try {
    const favorite = await Favorite.findOneAndDelete({
      user: userId,
      rent: rentId,
    });
    if (!favorite) {
      res.status(404).json({ message: "rent not found in favorites" });
      return;
    }

    res.status(200).json({ message: "rent removed from favorites" });
  } catch (error) {
    console.error("Remove from favorites error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Kullanıcının favorilerini getir
export const getFavorites = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const favorites = await Favorite.find({ user: userId }).populate("rent");
    favorites.map(
      (favorite) =>
        ((favorite.rent as unknown as Rent).images = (
          favorite.rent as unknown as Rent
        ).images.map((image) => `${process.env.BASE_URL}/public/rent/${image}`))
    );
    res.status(200).json(favorites);
  } catch (error) {
    console.error("Get favorites error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
