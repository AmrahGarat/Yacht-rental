// import { resolve } from "path";
import axiosInstance from "../axiosInstance";
import { GetAllLocationResponseType } from "./types";

const getAll = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return await axiosInstance.get<GetAllLocationResponseType>("/location");
};

const locationService = { getAll };
export default locationService;
