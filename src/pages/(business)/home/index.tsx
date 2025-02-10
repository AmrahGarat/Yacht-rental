import React, { useState, useEffect } from "react";
import bgImage from "@/assets/images/pxfuel.jpg";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import { VideoAdd } from "./components/VideoAdd";
import { FeaturedYachts } from "./components/FeaturedYachts";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundPosition = `center ${scrollY * 0.4}px`;

  return (
    <div className="relative pb-8 lg:pb-16 bg-transparent">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: backgroundPosition,
        }}
      />
      <Hero />
      <AboutUs />
      <VideoAdd />
      <FeaturedYachts />
      <Events />
      <Gallery />
    </div>
  );
};

export default HomePage;
