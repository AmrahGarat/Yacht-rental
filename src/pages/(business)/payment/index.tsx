import { Spinner } from "@/components/shared/Spinner";
import Steps, { FormSchema } from "./components/Steps"; // Correct import
import PaymentSummary from "./components/Summary";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { paths } from "@/constants/paths";
import { QUERY_KEYS } from "@/constants/query-keys";
import { useQuery } from "@tanstack/react-query";
import rentService from "@/services/rents";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const PaymentPage = () => {
  const { id } = useParams<{ id: string }>();
  const form = useForm<z.infer<typeof FormSchema>>();

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.RENT_DETAIL, id],
    queryFn: () => rentService.getById(id!),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center mt-28">
        <Spinner />
        <p>Loading...</p>
      </div>
    );
  }

  const rent = data?.data?.item;

  if (isError || !rent) {
    return (
      <div className="flex flex-col justify-center items-center mt-28">
        <p className="text-2xl font-bold mb-3 text-primary">
          Something went wrong with your yacht!
        </p>
        <Button className="mt-4">
          <Link to={paths.HOME}>Back To Marina</Link>
        </Button>
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <div className="container py-6 lg:py-8 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] lg:gap-x-8 gap-y-8">
        <Steps />
        <PaymentSummary rent={rent} />
      </div>
    </FormProvider>
  );
};

export default PaymentPage;
