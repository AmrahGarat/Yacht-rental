// rentsSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for Rent
interface Rent {
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
}

// Define initial state
interface RentState {
  allRents: Rent[];
  loading: boolean;
  error: string | null;
}

const initialState: RentState = {
  allRents: [],
  loading: false,
  error: null,
};

// Create an async thunk to fetch Rent data from API
export const fetchRents = createAsyncThunk("rents/fetchRents", async () => {
  const response = await axios.get("/api/rents"); // Replace with your actual API URL
  return response.data;
});

// Create the slice
const rentsSlice = createSlice({
  name: "rents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRents.fulfilled, (state, action) => {
        state.loading = false;
        state.allRents = action.payload;
      })
      .addCase(fetchRents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch rents";
      });
  },
});

export default rentsSlice.reducer;
