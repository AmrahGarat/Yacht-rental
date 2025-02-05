import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";
import Dialogs from "./dialogs";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Dialogs />
      <Footer />
    </div>
  );
};

export default RootLayout;
