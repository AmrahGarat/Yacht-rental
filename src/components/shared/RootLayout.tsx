import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import Footer from "./footer";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
