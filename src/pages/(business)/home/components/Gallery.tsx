import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import YachtGallery1 from "@/assets/images/yacht-gallery-1.jpeg";
import YachtGallery2 from "@/assets/images/yacht-gallery-2.avif";
import YachtGallery3 from "@/assets/images/yacht-gallery-3.avif";
import YachtGallery4 from "@/assets/images/yacht-gallery-4.jpeg";
import YachtGallery5 from "@/assets/images/yacht-gallery-5.avif";
import InstagramLogo from "@/assets/images/instagram-logo-png_seeklogo-307581.png";
import { useTranslation } from "react-i18next";

export const Gallery = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-200 bg-opacity-30">
      <div className="container py-[50px] lg:py-[120px]">
        <div className="flex flex-col lg:flex-row justify-between items-center pb-5">
          <h3 className="flex text-center md:text-left text-[30px] md:text-[48px] font-[Unna-Italic] text-secondary leading-[140%] max-w-[500px]">
            {t("GALLERY.TITLE")}
          </h3>
          <Button variant={"link"} asChild>
            <Link
              to="https://www.instagram.com/yachtcharterfleet/"
              className="text-secondary !md:text-[25px] flex sm:flex-row flex-col pt-10 md:pt-0 pb-5 md:pb-0"
            >
              {t("GALLERY.INSTAGRAM")}
              <img
                src={InstagramLogo}
                alt="InstagramLogo"
                className="w-[30px] md:w-[70px] bg-red-400 bg-opacity-30 rounded-[10px]"
              />
            </Link>
          </Button>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mb-4 lg:mb-8">
          <div className="bg-gray-300 h-[150px] sm:h-[400px] rounded-[10px]">
            <img
              src={YachtGallery1}
              alt="yacht gallery 1"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="bg-gray-300 h-[150px] sm:h-[400px] rounded-[10px]">
            <img
              src={YachtGallery5}
              alt="yacht gallery 5"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="bg-gray-300 h-[150px] sm:h-[300px] rounded-[10px]">
            <img
              src={YachtGallery4}
              alt="yacht gallery 4"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="bg-gray-300 h-[150px] sm:h-[300px] rounded-[10px]">
            <img
              src={YachtGallery2}
              alt="yacht gallery 2"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="bg-gray-300 h-[150px] sm:h-[300px] rounded-[10px]">
            <img
              src={YachtGallery3}
              alt="yacht gallery 3"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
