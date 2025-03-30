import { ForgotPasswordDialog } from "./ForgotPassword";
import LoginDialog from "./Login";
import RegisterDialog from "./Register";

export const Dialogs = () => {
  return (
    <>
      <LoginDialog />
      <RegisterDialog />
      <ForgotPasswordDialog />
    </>
  );
};

export default Dialogs;
