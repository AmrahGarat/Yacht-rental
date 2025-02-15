import MenuIcon from "@/assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { LogOutIcon, User2Icon } from "lucide-react";
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

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  const { user } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAsync());
  };
  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <button className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 h-10 w-10 p-2 bg-gray-100">
        <img src={MenuIcon} alt="menu icon" className="h-[20px]" />
      </button>
      {/* <button
        onClick={() => openDialog(ModalTypeEnum.LOGIN)}
        className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 p-2"
      >
        <img src={LogInIcon} alt="log in" />
      </button> */}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 h-10 w-10 p-2 bg-gray-100">
              <User2Icon className="w-full h-full text-secondary" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user.role === UserRole.Admin && (
              <DropdownMenuItem>
                <Link to={paths.DASHBOARD.MAIN}>Dashboard</Link>
              </DropdownMenuItem>
            )}

            <DropdownMenuItem>
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link to="/reservations">Reservations</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
              <LogOutIcon />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          onClick={() => openDialog(ModalTypeEnum.LOGIN)}
          className="!px-3 lg:px-5 !py-0 !h-9 !text-sm !rounded-lg !bg-secondary hover:!bg-blue-700"
        >
          Sign In
        </Button>
      )}
    </div>
  );
};
