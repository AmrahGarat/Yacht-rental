import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z.string(),
  address: z.string(),
  city: z.string(),
});

type FormType = UseFormReturn<z.infer<typeof FormSchema>>;

export const Steps = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      address: "",
      city: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:gap-y-8 gap-y-6"
      >
        <BillingStep form={form} />
        <RentalStep form={form} />
      </form>
    </Form>
  );
};

export default Steps;

const BillingStep = ({ form }: { form: FormType }) => {
  return (
    <div className="rounded-[10px] bg-white w-ful lg:p-6 p-4">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary">
            Billing Info
          </h2>
          <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
            Please enter your biling info
          </p>
        </div>
        <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
          Step 1 of 3
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Your Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Your Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Your City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

const RentalStep = ({ form }: { form: FormType }) => {
  return (
    <div className="rounded-[10px] bg-white w-ful lg:p-6 p-4">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary">
            Rental Info
          </h2>
          <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
            Please enter your rental date
          </p>
        </div>
        <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
          Step 2 of 3
        </p>
      </div>
      <p className="text-secondary font-semibold text-base leading-[20px] tracking-[-0.32px] mb-4 lg:mb-6">
        Pick - Up
      </p>
    </div>
  );
};
