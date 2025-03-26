import { formatPrice } from "@/lib/utils";
import { Rent } from "@/types";

type Props = {
  rent: Rent;
};

export const PaymentSummary = ({ rent }: Props) => {
  const { name, images, price, description } = rent;
  const mainImage = images[0];

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
      <div className="flex justify-between items-center">
        <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
          Rental Price / Day
        </h4>
        <p className="text-secondary text-xl lg:text-2xl leading-normal font-bold">
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default PaymentSummary;
