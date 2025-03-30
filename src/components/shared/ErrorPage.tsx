import React from "react";
import ErrorImage from "@/assets/images/Error404image.jpg";
import HomePage from "@/pages/(business)/home";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-center relative max-h-[860px]">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${ErrorImage})`,
        }}
      ></div>
      <div className="absolute bottom-0 w-full text-center py-3">
        <p className="text-7xl font-[Unna-Bold] text-secondary pb-3">
          This Page was Lost at Sea
        </p>
        <button
          onClick={HomePage}
          className="bg-secondary px-6 py-2 rounded-full font-semibold text-xl text-orange-300"
        >
          Go back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
