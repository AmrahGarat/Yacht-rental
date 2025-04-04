import { RenderIf } from "@/components/shared/RenderIf";
import { RentCard } from "@/components/shared/rent-card";
import { Button } from "@/components/ui/button";
import { paths } from "@/constants/paths";
import { Rent } from "@/types";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

type Props = {
  isLoading?: boolean;
  rents?: Rent[];
};

export const FeaturedYachts = ({ isLoading = false, rents }: Props) => {
  const navigate = useNavigate();
  function navigateToList() {
    navigate(paths.LIST);
  }
  const { t } = useTranslation();

  return (
    <div className="bg-gray-200 bg-opacity-80">
      <div className="container py-[50px] lg:py-[120px]">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-5">
          <h3 className="text-[30px] lg:text-[48px] font-[Unna-Italic] text-secondary leading-[140%] lg:pb-0 pb-5">
            {t("home.featured_yachts")}
          </h3>
          <Button
            variant={"link"}
            className="text-secondary text-[20px] lg:!text-[25px]"
            onClick={navigateToList}
          >
            {t("home.view_all")}
          </Button>
        </div>

        {/* Swiper for all screen sizes with autoplay */}
        <div className="w-full">
          <Swiper
            loop
            autoplay={{
              delay: 2000, // auto-swiping delay (2000ms = 2 seconds)
              disableOnInteraction: false, // keep autoplay running after interaction
            }}
            spaceBetween={30} // Adjust the space between slides
            // slidesPerView={"auto"} // Set slides per view to auto for responsive behavior
            breakpoints={{
              640: { slidesPerView: 2 }, // 2 slides per view on small tablets
              768: { slidesPerView: 2 }, // 2 slides per view on medium devices
              1024: { slidesPerView: 3 }, // 3 slides per view on larger screens
            }}
            className="w-full"
            modules={[Autoplay]}
          >
            <RenderIf condition={!isLoading}>
              {rents?.map((rent) => (
                <SwiperSlide key={rent._id} style={{ minWidth: "250px" }}>
                  {" "}
                  {/* Add min-width for 3 slides */}
                  <div className="w-full flex justify-center">
                    <RentCard rent={rent} />
                  </div>
                </SwiperSlide>
              ))}
            </RenderIf>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
