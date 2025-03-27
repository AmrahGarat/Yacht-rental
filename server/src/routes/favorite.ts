import express from "express";
import {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} from "../controllers/favorite";

const router = express.Router();

router.post("/add", addToFavorites);
router.delete("/remove", removeFromFavorites); // DELETE metodunu kullanın
router.get("/:userId", getFavorites);

export default router;
