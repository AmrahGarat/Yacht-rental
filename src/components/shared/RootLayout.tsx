import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";
import Dialogs from "./dialogs";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { getCurrentUserAsync } from "@/store/features/userSlice";

const RootLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Dialogs />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
