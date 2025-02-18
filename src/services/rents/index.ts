import axiosInstance from "../axiosInstance";
import {
  RentRequestPayload,
  GetAllRentResponseType,
  GetByIdRentResponseType,
  // GetAllRequestQueryData,
} from "./types";

const getAll = async (
  pageParams?: {
    take?: number;
    skip?: number;
    type?: "featured";
  },
  searchParamsStr?: string
) => {
  const searchParams = new URLSearchParams(searchParamsStr);
  if (pageParams?.take) searchParams.append("take", pageParams.take.toString());
  if (pageParams?.skip) searchParams.append("skip", pageParams.skip.toString());
  if (pageParams?.type) searchParams.append("type", pageParams.type);

  return await axiosInstance.get<GetAllRentResponseType>(
    `/rent?${searchParams.toString()}`
  );
};
// const getAll = async (queryData: GetAllRequestQueryData) => {
//   const searchParams = new URLSearchParams();
//   const keys = Object.keys(queryData);

//   keys.forEach((key) => {
//     if (queryData[key as keyof GetAllRequestQueryData]) {
//       searchParams.append(
//         key,
//         String(queryData[key as keyof GetAllRequestQueryData])
//       );
//     }
//   });

//   return await axiosInstance.get<GetAllRentResponseType>(
//     `/rent?${searchParams.toString()}`
//   );
// };

const getById = async (id: string) => {
  return await axiosInstance.get<GetByIdRentResponseType>(`/rent/${id}`);
};
const create = async (data: RentRequestPayload) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("price", data.price.toString());
  formData.append("description", data.description);
  formData.append("size", data.size.toString());
  formData.append("capacity", data.capacity.toString());
  formData.append("cabins", data.cabins.toString());
  formData.append("crew", data.crew.toString());
  formData.append("categoryId", data.categoryId);
  formData.append("location", data.location);

  data.images?.forEach((image) => {
    formData.append("images", image);
  });
  formData.append("showInFeatured", data.showInFeatured.toString());

  return await axiosInstance.post("/rent", formData);
};
const edit = async (data: RentRequestPayload & { id?: string }) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("price", data.price.toString());
  formData.append("description", data.description);
  formData.append("size", data.size.toString());
  formData.append("capacity", data.capacity.toString());
  formData.append("cabins", data.cabins.toString());
  formData.append("crew", data.crew.toString());
  formData.append("categoryId", data.categoryId);
  formData.append("location", data.location);

  if (data.images)
    Array.from(data.images).forEach((image) => {
      formData.append(`images`, image);
    });
  formData.append("showInFeatured", data.showInFeatured.toString());

  return await axiosInstance.put(`/rent/${data.id}`, formData);
};

const rentService = { getAll, create, edit, getById };
export default rentService;
