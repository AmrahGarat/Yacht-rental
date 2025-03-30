import axios from "axios";

export const addToFavorites = async (userId: string, rentId: string) => {
  if (!userId || !rentId) {
    throw new Error("User ID or rent ID is missing");
  }
  const response = await axios.post(`http://localhost:3000/favorite/add`, {
    userId,
    rentId,
  });
  return response.data;
};

export const removeFromFavorites = async (userId: string, rentId: string) => {
  if (!userId || !rentId) {
    throw new Error("User ID or rent ID is missing");
  }
  const response = await axios.delete(
    `http://localhost:3000/favorite/remove?userId=${userId}&rentId=${rentId}`
  );
  return response.data;
};

export const getFavorites = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is missing");
  }
  const response = await axios.get(`http://localhost:3000/favorite/${userId}`);
  return response.data;
};
