import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { z } from "zod";

import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { AuthResponseType } from "@/services/auth/types";
import authService from "@/services/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { DialogDescription } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { getCurrentUserAsync } from "@/store/features/userSlice";
import { useAppDispatch } from "@/hooks/redux";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export const LoginDialog = () => {
  const { isOpen, closeDialog, type, openDialog } = useDialog();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();

  const { mutate, isPending } = useMutation({
    mutationFn: authService.login,
    onSuccess: (response) => {
      toast.success(response.data.message);
      closeDialog();
      dispatch(getCurrentUserAsync());
    },
    onError: (error: AxiosError<AuthResponseType>) => {
      const message =
        error.response?.data.message ??
        "Something went wrong! Please try again";
      toast.error(message);
    },
  });

  if (isOpen && type !== ModalTypeEnum.LOGIN) {
    return null;
  }

  console.log(isOpen, type);

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl lg:text-3xl">Sign In</DialogTitle>
          <DialogDescription>
            Still haven’t claimed your Captain’s title?{"  "}
            <button
              onClick={() => openDialog(ModalTypeEnum.REGISTER)}
              className="text-blue-500"
            >
              Create an account
            </button>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="************"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign In
            </Button>
          </form>
        </Form>
        <Button
          type="button"
          onClick={() =>
            (window.location.href = "http://localhost:3000/auth/google")
          }
          className="w-full"
          disabled={isPending}
        >
          Google Log in
        </Button>
        <DialogDescription>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("click");

              openDialog(ModalTypeEnum.FORGOT_PASSWORD);
            }}
            className="w-full text-blue-700 dark:text-blue-400 underline"
            // variant="link"
          >
            Forgot Password?
          </button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
