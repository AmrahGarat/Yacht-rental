import MenuIcon from "@/assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { LogOutIcon } from "lucide-react";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { logoutAsync, selectUserData } from "@/store/features/userSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRole } from "@/types";
import { paths } from "@/constants/paths";
import { selectLikedItems } from "@/store/features/likesSlice";
import HeartEmptyImg from "@/assets/icons/heart-empty.svg";

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  const { user } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAsync());
  };
  const likedItems = useAppSelector(selectLikedItems);
  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      {/* <Link to={paths.LIKES}> */}
      <Link to="/likes" className="inline-flex items-center justify-center">
        <button className="relative flex items-center justify-center">
          <img src={HeartEmptyImg} alt="heart" className="h-7" />
          {likedItems.length > 0 && (
            <span className="absolute text-xl text-red-500 font-extrabold">
              {likedItems.length}
            </span>
          )}
        </button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 h-10 w-10 p-2 bg-gray-100">
            <img src={MenuIcon} alt="menu icon" className="h-[20px]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={paths.HOME}>Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={paths.EVENTS.MAIN}>Events</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={paths.LIST}>Yachts</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={paths.QUESTIONS}>FAQ</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {user ? (
            <>
              {user.role === UserRole.Admin && (
                <DropdownMenuItem>
                  <Link to={paths.DASHBOARD.MAIN}>Dashboard</Link>
                </DropdownMenuItem>
              )}

              <DropdownMenuItem>
                <Link to={paths.ADMINPROFILE}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/reservations">Reservations</Link>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                <LogOutIcon />
                <span>Log out</span>
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem asChild>
              <Button
                onClick={() => openDialog(ModalTypeEnum.LOGIN)}
                className="w-full !px-3 lg:px-5 !py-1 !h-9 !text-sm !rounded-lg !bg-secondary hover:!bg-blue-700"
              >
                Sign In
              </Button>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
