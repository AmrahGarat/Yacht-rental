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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
// import locationService from "@/services/location";
// import { RenderIf } from "@/components/shared/RenderIf";
import { DatePicker } from "@/components/ui/date-picker";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";
// import rentService from "@/services/rents";
import { AxiosResponse } from "axios";
import { GetByIdRentResponseType } from "@/services/rents/types";
import { useEffect } from "react";
import { Location } from "@/types";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must contain at least 2 letters.",
  }),
  phoneNumber: z.string().min(3, {
    message: "Phone number is required",
  }),
  address: z.string().min(4, {
    message: "Address must contain at least 4 letters.",
  }),
  city: z.string().min(2, {
    message: "City name must contain at least 2 letters.",
  }),
  location: z.string().min(1, {
    message: "Location is required",
  }),
  pickUpDate: z.string().min(1, {
    message: "Pick up date is required",
  }),

  dropOffDate: z.string().min(1, {
    message: "Drop off date is required",
  }),
  newsLetter: z.boolean(),
  termsConditions: z.literal<boolean>(true, {
    message: "You must agree to terms and conditions",
  }),
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
      location: "",
      pickUpDate: "",
      dropOffDate: "",
      newsLetter: false,
      termsConditions: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:gap-y-8 gap-y-6 lg:order-none order-1"
      >
        <BillingStep form={form} />
        <RentalStep form={form} />
        <ConfirmationStep form={form} />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6">
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
                <PhoneInput
                  defaultCountry="AZ"
                  international
                  placeholder="Your Phone Number"
                  {...field}
                />
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
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData([
    QUERY_KEYS.RENT_DETAIL,
    id,
  ]) as AxiosResponse;

  const rentData = (data?.data as GetByIdRentResponseType) || null;
  const location = rentData?.item.location as Location;

  useEffect(() => {
    form.setValue("location", location._id);
  }, []);

  return (
    <div className="rounded-[10px] bg-white w-ful lg:p-6 p-4">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary">
            Rental Info
          </h2>
          <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
            Please enter your rental data
          </p>
        </div>
        <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
          Step 2 of 3
        </p>
      </div>
      <p className="text-secondary font-semibold text-base leading-[20px] tracking-[-0.32px] mb-2 lg:mb-3">
        Pick - Up / Drop - Off
      </p>
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value={location._id} disabled>
                  {location.name}
                </SelectItem>
                {/* <RenderIf condition={locationLoading}>
                  <SelectItem value="loading" disabled>
                    Loading...
                  </SelectItem>
                </RenderIf>
                {locations.map((location) => (
                  <SelectItem key={location._id} value={location._id}>
                    {location.name}
                  </SelectItem>
                ))} */}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* <p className="text-secondary font-semibold text-base leading-[20px] tracking-[-0.32px] mb-2 lg:mb-3 mt-10 lg:mt-12">
        Pick - Up / Drop - Off
      </p> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-4 lg:gap-y-6 mt-5 lg:mt-10">
        <FormField
          control={form.control}
          name="pickUpDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pick - Up</FormLabel>
              <DatePicker
                hidePastDates
                variant="secondary"
                onChange={(date) => field.onChange(date?.toISOString() || "")}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dropOffDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drop - Off</FormLabel>
              <DatePicker
                hidePastDates
                variant="secondary"
                onChange={(date) => field.onChange(date?.toISOString() || "")}
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

const ConfirmationStep = ({ form }: { form: FormType }) => {
  const errors = form.formState.errors;
  return (
    <div className="rounded-[10px] bg-white w-ful lg:p-6 p-4">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary">
            Confirmation
          </h2>
          <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
            We are getting to the end. <br /> Just few clicks and your rental is
            ready!
          </p>
        </div>
        <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
          Step 3 of 3
        </p>
      </div>
      <FormField
        control={form.control}
        name="newsLetter"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-5 space-y-0 rounded-[10px] bg-gray-100 p-4 lg:px-8">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="cursor-pointer">
                I agree to to receive newsletter with the latest news and
                promotions.
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="termsConditions"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-5 space-y-0 rounded-[10px] bg-gray-100 p-4 lg:px-8 mt-2 lg:mt-4">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel
                className={cn(
                  "cursor-pointer",
                  errors.termsConditions && "text-red-500"
                )}
              >
                By clicking here, I state that I have read and understood the
                terms and conditions.
              </FormLabel>
            </div>
          </FormItem>
        )}
      />
      <Button className="mt-6 lg:mt-8">Rent Now</Button>
    </div>
  );
};
