import SummaryImg from "@/assets/images/yacht-flying-fox.jpeg";

export const PaymentSummary = () => {
  return (
    <div className="rounded-[10px] bg-white p-4 lg:p-6 h-fit lg:sticky top-[174px]">
      <h2 className="text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px] text-secondary">
        Rental Summary
      </h2>
      <p className="text-gray-600 text-sm font-medium leading-[150%] tracking-[-0.28px] mt-1 lg:mb-8 mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat hic
        necessitatibus fugit et iure tenetur illo ipsam voluptatum. Nam,
        inventore?
      </p>
      <div className="flex justify-start items-center gap-x-4">
        <img
          className="max-w-[250px] sm:max-w-[400px] lg:max-w-[200px] xl:max-w-[300px] rounded-md object-contain"
          src={SummaryImg}
          alt="summary img"
        />
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-[Unna-Italic] text-secondary leading-[150%] tracking-[-0.96px]">
            Flying Fox
          </h2>
        </div>
      </div>
      <div className="w-full h-[1px] bg-secondary lg:my-8 my-6" />
      <div className="flex justify-between items-center">
        <h4 className="text-secondary text-lg lg:text-xl font-bold leading-[150%] tracking-[-0.6px]">
          Rental Price / Week
        </h4>
        <p className="text-secondary text-xl lg:text-2xl leading-normal font-bold">
          $3,000,000
        </p>
      </div>
    </div>
  );
};

export default PaymentSummary;
