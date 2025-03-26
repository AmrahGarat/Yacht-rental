// likesSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikesState {
  likedItems: string[]; // assuming liked items are just ids
}

const initialState: LikesState = {
  likedItems: JSON.parse(localStorage.getItem("likedItems") || "[]"), // Load from localStorage on page load
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    likeItem: (state, action: PayloadAction<string>) => {
      if (!state.likedItems.includes(action.payload)) {
        state.likedItems.push(action.payload);
        localStorage.setItem("likedItems", JSON.stringify(state.likedItems)); // Save to localStorage
      }
    },
    unlikeItem: (state, action: PayloadAction<string>) => {
      state.likedItems = state.likedItems.filter((id) => id !== action.payload);
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems)); // Save to localStorage
    },
  },
});

export const { likeItem, unlikeItem } = likesSlice.actions;
export const selectLikedItems = (state: any) => state.likes.likedItems;

export default likesSlice.reducer;
