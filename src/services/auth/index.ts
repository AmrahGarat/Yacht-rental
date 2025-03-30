import {
  RegisterRequestPayloadType,
  AuthResponseType,
  LoginRequestPayloadType,
  ForgotPasswordRequestPayloadType,
  ResetPasswordRequestPayloadType,
} from "./types";
import axiosInstance from "../axiosInstance";

const login = async (payload: LoginRequestPayloadType) => {
  return await axiosInstance.post<AuthResponseType>("/auth/login", payload);
};

const register = async (payload: RegisterRequestPayloadType) => {
  return await axiosInstance.post<AuthResponseType>("/auth/register", payload);
};
const logout = async () => {
  return await axiosInstance.post("/auth/logout");
};

const getCurrentUser = async () => {
  return await axiosInstance.get("/auth/current-user");
};

const forgotPassword = async (payload: ForgotPasswordRequestPayloadType) => {
  return await axiosInstance.post("/auth/forgot-password", payload);
};

const resetPassword = async (payload: ResetPasswordRequestPayloadType) => {
  return await axiosInstance.post("/auth/reset-password", payload);
};

const authService = {
  login,
  register,
  getCurrentUser,
  logout,
  forgotPassword,
  resetPassword,
};

export default authService;
