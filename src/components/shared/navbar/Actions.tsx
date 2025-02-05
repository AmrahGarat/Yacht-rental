import MenuIcon from "@/assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { User2Icon } from "lucide-react";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { Button } from "@/components/ui/button";

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  return (
    <div className="flex gap-2 lg:gap-4 items-center">
      <Link to="/">
        <div className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 h-10 w-10 p-2 bg-gray-100">
          <User2Icon className="w-full h-full text-secondary" />
        </div>
      </Link>
      <button className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 h-10 w-10 p-2 bg-gray-100">
        <img src={MenuIcon} alt="menu icon" className="h-[20px]" />
      </button>
      {/* <button
        onClick={() => openDialog(ModalTypeEnum.LOGIN)}
        className="rounded-full border border-gray-100 opacity-80 hover:opacity-100 duration-75 p-2"
      >
        <img src={LogInIcon} alt="log in" />
      </button> */}
      <Button
        onClick={() => openDialog(ModalTypeEnum.LOGIN)}
        className="!px-3 lg:px-5 !py-0 !h-9 !text-sm !rounded-lg !bg-secondary hover:!bg-blue-700"
      >
        Sign In
      </Button>
    </div>
  );
};
