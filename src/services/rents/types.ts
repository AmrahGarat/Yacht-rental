import { Rent } from "@/types";

export type GetAllRentResponseType = {
  items: Rent[];
  message: string;
  total: number;
  skip: number;
  take: number;
};
export type GetByIdRentResponseType = {
  item: Rent;
  message: string;
};

export type RentRequestPayload = {
  name: string;
  price: number;
  description: string;
  size: number;
  capacity: number;
  cabins: number;
  crew: number;
  categoryId: string;
  location: string;
  images?: File[];
  showInFeatured: boolean;
};
