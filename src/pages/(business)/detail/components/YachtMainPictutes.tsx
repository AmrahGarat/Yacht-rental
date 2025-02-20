import SearchWhite from "@/assets/icons/search-white.svg";

import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation, Zoom, Autoplay } from "swiper/modules";

type Props = {
  images: string[];
};
export const YachtMainPictures = ({ images }: Props) => {
  const sliderRef = useRef<SwiperRef>(null);

  function handleActiveSlideChange(index: number) {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(index);
    }
  }
  return (
    <div className="relative w-full text-white">
      <div className="flex w-full gap-[2px]">
        <div className="w-full">
          <Swiper
            zoom
            ref={sliderRef}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="w-full"
            modules={[Navigation, Zoom, Autoplay]}
            loop
            navigation
            autoplay={{ delay: 2000 }}
            speed={1000}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container cursor-zoom-in">
                  <img
                    src={image}
                    alt="main yacht image"
                    className="w-full max-h-[585px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="w-[30%] h-[auto]">
          <Swiper
            navigation
            spaceBetween={2}
            slidesPerView={3}
            pagination={{ clickable: true }}
            className="w-full h-full"
            modules={[Navigation]}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="cursor-pointer"
                onClick={() => handleActiveSlideChange(index)}
              >
                <div className="w-full h-full overflow-hidden relative group">
                  <img
                    src={image}
                    alt="Yacht other images"
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-z-[20px] group-hover:origin-center"
                  />
                  <img
                    src={SearchWhite}
                    alt="SVG Centered Image"
                    className="absolute inset-0 w-16 h-16 mx-auto my-auto opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default YachtMainPictures;
