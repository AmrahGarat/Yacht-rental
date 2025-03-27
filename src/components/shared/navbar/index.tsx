import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { NavbarActions } from "./Actions";
import { Search } from "./Search";
import YachtIcon from "@/assets/icons/yacht.svg";
import { paths } from "@/constants/paths";
import LanguageSelector from "@/components/select/LanguageSelect";
import { ModeToggle } from "@/components/mode-toggle";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { logoutAsync, selectUserData } from "@/store/features/userSlice";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/types";

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDialog } = useDialog();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUserData);

  const handleLogout = () => {
    dispatch(logoutAsync());
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white py-6 md:py-10 sticky top-0 w-full z-30">
      <div className="container flex justify-between items-center px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-x-4 md:gap-x-6">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link to={paths.HOME} className="flex items-center gap-2">
            <img src={YachtIcon} alt="yacht icon" className="h-[35px]" />
            <span className="text-[20px] lg:text-[35px] text-secondary tracking-[2.4px]">
              OceanicOdyssey
            </span>
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <Search />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex gap-3 items-center">
          <LanguageSelector />
          <ModeToggle />
          <NavbarActions />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>

        {/* Mobile Menu Links */}
        <nav className="mt-10 flex flex-col space-y-4 px-6">
          <Link
            to={paths.HOME}
            className="text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={paths.EVENTS.MAIN}
            className="text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to={paths.LIST}
            className="text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Yachts
          </Link>
          <Link
            to={paths.QUESTIONS}
            className="text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>

          {user ? (
            <>
              {user.role === UserRole.Admin && (
                <Link
                  to={paths.DASHBOARD.MAIN}
                  className="text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              )}
              <Link
                to={paths.ADMINPROFILE}
                className="text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                to="/reservations"
                className="text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservations
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center text-lg text-red-600 mt-2"
              >
                <LogOut className="mr-2" size={18} />
                Log out
              </button>
            </>
          ) : (
            <Button
              onClick={() => {
                openDialog(ModalTypeEnum.LOGIN);
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Sign In
            </Button>
          )}
        </nav>

        {/* Language & Theme Selector */}
        <div className="px-6 mt-6 flex flex-col space-y-3">
          <LanguageSelector />
          <ModeToggle />
        </div>

        {/* Mobile Search (Hidden by default) */}
        <div className="px-6 mt-6">
          <Search />
        </div>
      </div>
    </div>
  );
};
