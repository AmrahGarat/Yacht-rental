import { useState } from "react";

import yachtPic1 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic2 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic3 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic4 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic5 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic6 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic7 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic8 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic9 from "@/assets/images/yacht-flying-fox.jpeg";
import yachtPic10 from "@/assets/images/yacht-flying-fox.jpeg";

export const YachtOtherPictures = () => {
const pictures = [yachtPic1, yachtPic2, yachtPic3, yachtPic4, yachtPic5, yachtPic6, yachtPic7, yachtPic8, yachtPic9, yachtPic10];

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

const openModal = (index: number) => {setCurrentPictureIndex(index); setIsModalOpen(true);};
const closeModal = () => {setIsModalOpen(false);};
const goToPrevious = () => {setCurrentPictureIndex((prevIndex) =>prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);};
const goToNext = () => {setCurrentPictureIndex((prevIndex) => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1);};
const handleBackdropClick = (e: React.MouseEvent) => {if (e.target === e.currentTarget) {closeModal();}};

return (
    <div className="container mx-auto px-4 py-12">
    <h2 className="text-2xl font-[Unna-BoldItalic] mb-6 text-secondary">
        PICTURES
    </h2>
    <div className="flex flex-wrap gap-8 justify-center">
        {pictures.slice(0, 5).map((pic, index) => (
        <div key={index} className="cursor-pointer w-72 sm:w-80 md:w-88 lg:w-96 xl:w-104" onClick={() => openModal(index)}>
            <img src={pic} alt={`Yacht Picture ${index + 1}`} className="w-full h-auto object-cover rounded-md shadow-md"/>
        </div>
        ))}
    </div>
    <div className="text-center mt-6">
        <button onClick={() => openModal(0)} className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-300">
        View All Pictures
        </button>
    </div>
    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleBackdropClick}>
        <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full sm:max-w-5xl lg:max-w-6xl">
            <button className="absolute top-2 right-2 text-2xl font-bold text-gray-500" onClick={closeModal}>
            &times;
            </button>
            <div className="relative">
            <img src={pictures[currentPictureIndex]} alt={`Yacht Picture ${currentPictureIndex + 1}`} className="w-full h-auto max-h-[650px] object-contain rounded-md"/>
            </div>
            <button onClick={goToPrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-6 rounded-full text-5xl shadow-lg hover:bg-blue-500 transition duration-300">
            &#8249;
            </button>
            <button onClick={goToNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-6 rounded-full text-5xl shadow-lg hover:bg-blue-500 transition duration-300">
            &#8250;
            </button>
        </div>
        </div>
    )}
    </div>
);
};

export default YachtOtherPictures;
