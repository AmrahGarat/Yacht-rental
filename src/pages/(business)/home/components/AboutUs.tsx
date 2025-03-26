import Award1Img from "@/assets/images/award1.png";
import Award2Img from "@/assets/images/award2.png";
import Award3Img from "@/assets/images/award3.png";
import Award4Img from "@/assets/images/award4.avif";
import Award5Img from "@/assets/images/award5.png";
import Award6Img from "@/assets/images/award6.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="container lg:flex lg:gap-14 justify-between py-[40px] lg:py-[120px]">
      <div className="lg:max-w-[500px] text-white">
        <h3 className="text-[15px] lg:text-[20px] leading-[110%] tracking-[1.2px] mb-2.5 lg:mb-5">
          {t("aboutus.title")}
        </h3>
        <h1 className="text-[30px] lg:text-[48px] leading-[140%] mb-2.5 lg:mb-5">
          {t("aboutus.subtitle")}
        </h1>
        <p className="text-[12px] lg:text-[16px] leading-[160%] mb-2.5 lg:mb-5">
          {t("aboutus.description")}
        </p>
      </div>
      <div className="lg:max-w-[470px] flex flex-wrap justify-between items-center pt-14 lg:pt-0 grayscale-container cursor-pointer bg-white rounded-[20px] bg-opacity-50 gap-4 p-4 z-20">
        <Link to="https://awards.classicboat.co.uk/winners/">
          <img src={Award1Img} alt="award1img" className="h-[110px]" />
        </Link>
        <Link to="https://yachtsfrance.eu/world-yachts-trophies-2020/?lang=en">
          <img src={Award2Img} alt="award2img" className="h-[110px]" />
        </Link>
        <Link to="https://www.mby.com/motor-boat-awards/2025-motor-boat-awards-winners-best-motorboats-of-the-year-revealed-134060">
          <img
            src={Award5Img}
            alt="award5img"
            className="h-[100px] w-[100px] object-cover"
          />
        </Link>
        <Link to="https://www.deantonioyachts.com/awards">
          <img src={Award4Img} alt="award4img" className="h-[130px]" />
        </Link>
        <Link to="https://www.britishyachtingawards.com/winners/">
          <img src={Award3Img} alt="award3img" className="h-[100px]" />
        </Link>
        <Link to="https://yachtstyle.co/yacht-style-awards-2024-nominations/">
          <img src={Award6Img} alt="award6img" className="h-[110px]" />
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
