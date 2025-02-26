import { useState, useEffect } from "react";
import Yacht1 from "@/assets/images/yacht-flying-fox.jpeg";
import Yacht2 from "@/assets/images/yacht-gallery-1.jpeg";
import Yacht3 from "@/assets/images/yacht-gallery-2.avif";
import MainYachtVideo from "@/assets/videos/videoplayback.mp4";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { paths } from "@/constants/paths";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState<number>(0);
  const navigate = useNavigate();
  function navigateToList() {
    navigate(paths.LIST);
  }

  useEffect(() => {
    if (isOpen) {
      // Show images one by one with a delay
      const timers = [1, 2, 3, 4, 5, 6, 7, 8].map((i) =>
        setTimeout(() => setVisibleImages(i), i * 200)
      );
      return () => timers.forEach(clearTimeout);
    } else {
      // Hide images one by one in reverse order
      const timers = [7, 6, 5, 4, 3, 2, 1, 0].map((i) =>
        setTimeout(() => setVisibleImages(i), (8 - i) * 200)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [isOpen]);

  return (
    <div className="relative h-[900px] w-full text-white">
      <video
        src={MainYachtVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="flex items-center justify-center z-10 h-full relative">
        {/* Content on the left */}
        <div className="absolute left-[50px] lg:left-[150px] top-[50px] right-[50px] lg:right-[150px] xl:top-[150px] max-w-[1000px] xl:max-w-[520px]">
          <h1 className="text-[60px] xl:text-[85px] leading-[115%] mb-3 lg:mb-6 font-[Unna-BoldItalic]">
            Discover the Freedom of the Open Sea
          </h1>
          <p className="text-[15px] xl:text-[20px] leading-[160%] mb-3 lg:mb-6">
            Experience the ultimate in luxury and relaxation as you cruise the
            open waters. Whether you're looking for a serene getaway or an
            adventurous day on the sea, our yachts offer unparalleled comfort
            and style. With professional crews and customizable itineraries,
            every journey is tailored to your desires. Let us help you create
            unforgettable memories on the water.
          </p>
          <Button className="text-white !text-[20px]" onClick={navigateToList}>
            Discover more
          </Button>
        </div>

        {/* Expandable Stacked Images */}
        <div
          className="absolute xl:right-[200px] bottom-[-100px] sm:bottom-0 xl:bottom-[-200px] xl:top-1/2 transform -translate-y-1/2 flex flex-col items-center z-10 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Main Clickable Image */}
          <img
            src={Yacht1}
            alt="Yacht1"
            className={`z-10 rounded-xl w-[250px] xl:w-[400px] transition-transform duration-300 ${
              !isOpen ? "animate-ship-sway" : ""
            }`}
          />

          {/* Other Images - Appear One by One */}
          {visibleImages >= 1 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[220px] xl:w-[360px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "-10deg",
                  "--translateX": "-60px",
                } as React.CSSProperties
              }
            />
          )}

          {visibleImages >= 2 && (
            <img
              src={Yacht3}
              alt="Yacht3"
              className="z-10 rounded-xl w-[190px] xl:w-[320px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "10deg",
                  "--translateX": "60px",
                } as React.CSSProperties
              }
            />
          )}

          {visibleImages >= 3 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[160px] xl:w-[280px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "-10deg",
                  "--translateX": "-60px",
                } as React.CSSProperties
              }
            />
          )}

          {visibleImages >= 4 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[130px] xl:w-[240px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "10deg",
                  "--translateX": "60px",
                } as React.CSSProperties
              }
            />
          )}
          {visibleImages >= 5 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[100px] xl:w-[200px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "-10deg",
                  "--translateX": "-60px",
                } as React.CSSProperties
              }
            />
          )}
          {visibleImages >= 6 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[70px] xl:w-[160px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "10deg",
                  "--translateX": "60px",
                } as React.CSSProperties
              }
            />
          )}
          {visibleImages >= 7 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[40px] xl:w-[120px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "-10deg",
                  "--translateX": "-60px",
                } as React.CSSProperties
              }
            />
          )}
          {visibleImages >= 8 && (
            <img
              src={Yacht2}
              alt="Yacht2"
              className="z-10 rounded-xl w-[10px] xl:w-[80px] opacity-0 animate-fade-slide"
              style={
                {
                  "--rotate": "10deg",
                  "--translateX": "60px",
                } as React.CSSProperties
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
