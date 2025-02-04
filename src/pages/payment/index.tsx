import Steps from "./components/Steps";
import PaymentSummary from "./components/Summary";

const PaymentPage = () => {
  return (
    <div className="container py-6 lg:py-8 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] lg:gap-x-8 gap-y-8">
      <Steps />
      <PaymentSummary />
    </div>
  );
};

export default PaymentPage;
