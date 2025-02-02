import MainYachtImage from "@/assets/images/yacht-flying-fox.jpeg";
import YachtImage1 from "@/assets/images/yacht-flying-fox.jpeg";
import YachtImage2 from "@/assets/images/yacht-flying-fox.jpeg";
import YachtImage3 from "@/assets/images/yacht-flying-fox.jpeg";
import YachtImage4 from "@/assets/images/yacht-flying-fox.jpeg";
import SearchWhite from "@/assets/icons/search-white.svg";

export const YachtMainPictures = () => {
  return (
    <div className="relative w-full text-white">
      <div className="flex w-full gap-[2px]">
        {/* Main Image */}
        <div className="w-[70%]">
          <img
            src={MainYachtImage}
            alt="main yacht image"
            className="w-full h-[auto] object-cover"
          />
        </div>

        {/* Image Grid */}
        <div className="w-[30%] grid grid-cols-2 gap-[2px] h-[auto]">
          {/* Image 1 */}
          <div className="w-full h-full overflow-hidden relative group">
            <img
              src={YachtImage1}
              alt="Yacht 1"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-z-[20px] group-hover:origin-center"
            />
            <img
              src={SearchWhite}
              alt="SVG Centered Image"
              className="absolute inset-0 w-16 h-16 mx-auto my-auto opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="w-full h-full overflow-hidden relative group">
            <img
              src={YachtImage2}
              alt="Yacht 2"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-z-[20px] group-hover:origin-center"
            />
            <img
              src={SearchWhite}
              alt="SVG Centered Image"
              className="absolute inset-0 w-16 h-16 mx-auto my-auto opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />
          </div>

          {/* Image 3 */}
          <div className="w-full h-full overflow-hidden relative group">
            <img
              src={YachtImage3}
              alt="Yacht 3"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-z-[20px] group-hover:origin-center"
            />
            <img
              src={SearchWhite}
              alt="SVG Centered Image"
              className="absolute inset-0 w-16 h-16 mx-auto my-auto opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />
          </div>

          {/* Image 4 */}
          <div className="w-full h-full overflow-hidden relative group">
            <img
              src={YachtImage4}
              alt="Yacht 4"
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 group-hover:translate-z-[20px] group-hover:origin-center"
            />
            <img
              src={SearchWhite}
              alt="SVG Centered Image"
              className="absolute inset-0 w-16 h-16 mx-auto my-auto opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YachtMainPictures;
