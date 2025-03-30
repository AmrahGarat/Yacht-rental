import MenuIcon from "@/assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { Heart, LogOutIcon } from "lucide-react";
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
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  const { user } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  const { data: favorites } = useQuery({
    queryKey: [QUERY_KEYS.FAVORITES, user?._id],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/favorite/${user?._id}`)
        .then((res) => res.data),
    enabled: !!user?._id,
  });

  const favoritesItemCount = favorites?.items?.length || 0;

  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      {/* <Link to={paths.LIKES}> */}
      <Link
        to="/likes"
        className="inline-flex items-center justify-center"
      ></Link>

      <DropdownMenu>
        <Link to={paths.FAVORITES} className="relative dark:text-white">
          <Heart />
          {favoritesItemCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-red-600 fill-red-600 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {favoritesItemCount}
            </div>
          )}
        </Link>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2">
            <button className="rounded-full border border-gray-300 opacity-80 hover:opacity-100 duration-75 h-10 w-10 p-2 bg-gray-100">
              <img src={MenuIcon} alt="menu icon" className="h-[20px]" />
            </button>
          </div>
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

              {user.role === UserRole.Admin ? (
                <DropdownMenuItem>
                  <Link to={paths.ADMINPROFILE}>Profile</Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  <Link to={paths.PROFILE}>Profile</Link>
                </DropdownMenuItem>
              )}

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
