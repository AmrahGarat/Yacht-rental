import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

type Props = {
  images: string[];
};

export const YachtOtherPictures = ({ images }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentPictureIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-[Unna-BoldItalic] mb-6 text-secondary">
          PICTURES
        </h2>

        {/* Grid Layout for Pictures */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.slice(0, 8).map((image, index) => (
            <div
              key={index}
              className="cursor-pointer aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Yacht picture ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {images.length > 8 && (
          <div className="text-center mt-6">
            <button
              onClick={() => openModal(0)}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              View All Pictures ({images.length})
            </button>
          </div>
        )}

        {/* Modal for Fullscreen View */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl z-50"
              onClick={closeModal}
            >
              &times;
            </button>

            <div className="relative w-full max-w-6xl">
              <Swiper
                initialSlide={currentPictureIndex}
                modules={[Navigation, Zoom]}
                navigation
                zoom
                spaceBetween={20}
                slidesPerView={1}
                className="w-full"
                onSlideChange={(swiper) =>
                  setCurrentPictureIndex(swiper.activeIndex)
                }
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                      <img
                        src={image}
                        alt={`Yacht picture ${index + 1}`}
                        className="w-full max-h-[80vh] object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-between mt-4">
                {/* <button
                  onClick={goToPrevious}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                >
                  Previous
                </button> */}
                <span className="text-white">
                  {currentPictureIndex + 1} / {images.length}
                </span>
                {/* <button
                  onClick={goToNext}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                >
                  Next
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YachtOtherPictures;
