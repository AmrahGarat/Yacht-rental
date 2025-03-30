import { formatPrice } from "@/lib/utils";
import { Rent } from "@/types";
import { useFormContext, useWatch } from "react-hook-form"; // Add useWatch
import { z } from "zod";
import { FormSchema } from "./Steps";
import { useEffect, useState } from "react"; // Add these imports

type Props = {
  rent: Rent;
};

export const PaymentSummary = ({ rent }: Props) => {
  const { name, images, price, description } = rent;
  const mainImage = images[0];
  const form = useFormContext<z.infer<typeof FormSchema>>();

  // Use useWatch to properly watch form values and trigger re-renders
  const pickUpDate = useWatch({ control: form.control, name: "pickUpDate" });
  const dropOffDate = useWatch({ control: form.control, name: "dropOffDate" });

  // State to hold calculated values
  const [calculatedTotal, setCalculatedTotal] = useState({
    subtotal: price,
    tax: 0,
    fees: 150,
    total: price + 150,
    days: 1,
  });

  // Recalculate whenever dates change
  useEffect(() => {
    const calculateTotal = () => {
      if (!pickUpDate || !dropOffDate) {
        return {
          subtotal: price,
          tax: 0,
          fees: 150,
          total: price + 150,
          days: 1,
        };
      }

      const start = new Date(pickUpDate);
      const end = new Date(dropOffDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

      const subtotal = price * diffDays;
      const taxRate = 0.1;
      const tax = subtotal * taxRate;
      const fees = 150;
      const total = subtotal + tax + fees;

      return { subtotal, tax, fees, total, days: diffDays };
    };

    setCalculatedTotal(calculateTotal());
  }, [pickUpDate, dropOffDate, price]);

  const { subtotal, tax, fees, total, days } = calculatedTotal;
  const hasDatesSelected = pickUpDate && dropOffDate;

  // ... rest of your component remains the same ...

  return (
    <div className="rounded-[10px] bg-white p-4 lg:p-6 h-fit lg:sticky top-[174px]">
      <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary">
        Rental Summary
      </h2>
      <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6 overflow-hidden overflow-ellipsis line-clamp-3">
        {description}
      </p>
      <div className="flex justify-start items-center gap-x-4">
        <img
          className="max-w-[250px] sm:max-w-[400px] lg:max-w-[200px] xl:max-w-[300px] rounded-md object-cover"
          src={mainImage}
          alt="main image"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-[Unna-Italic] text-secondary leading-[150%] tracking-[-0.96px]">
            {name}
          </h2>
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary lg:my-8 my-6" />

      {/* Show daily price only when no dates are selected */}
      {!hasDatesSelected && (
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
            Rental Price / Day
          </h4>
          <p className="text-secondary text-xl lg:text-2xl leading-normal font-bold">
            {formatPrice(price)}
          </p>
        </div>
      )}

      {/* Show calculated total when dates are selected */}
      {hasDatesSelected && (
        <>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Daily Rate
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal">
              {formatPrice(price)}
            </p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Rental Days
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal">
              {days} {days > 1 ? "days" : "day"}
            </p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Rental Period
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal">
              {new Date(pickUpDate).toLocaleDateString()} -{" "}
              {new Date(dropOffDate).toLocaleDateString()}
            </p>
          </div>
          <div className="w-full h-[1px] bg-gray-200 my-2" />
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Subtotal
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal">
              {formatPrice(subtotal)}
            </p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Tax (10%)
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal">
              {formatPrice(tax)}
            </p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Cleaning Fee
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal">
              {formatPrice(fees)}
            </p>
          </div>
          <div className="w-full h-[1px] bg-gray-200 my-2" />
          <div className="flex justify-between items-center mt-4">
            <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
              Total Price
            </h4>
            <p className="text-secondary text-xl lg:text-2xl leading-normal font-bold">
              {formatPrice(total)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentSummary;
