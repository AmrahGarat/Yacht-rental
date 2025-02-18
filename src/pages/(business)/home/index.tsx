import React, { useState, useEffect } from "react";
import bgImage from "@/assets/images/pxfuel.jpg";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import { VideoAdd } from "./components/VideoAdd";
import { FeaturedYachts } from "./components/FeaturedYachts";
import { Events } from "./components/Events";
import { Gallery } from "./components/Gallery";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/constants/query-keys";
import rentService from "@/services/rents";

const HomePage = () => {
  const { data: featuredData, isLoading: featuredLoading } = useQuery({
    queryKey: [QUERY_KEYS.FEATURED_RENTS],
    queryFn: () => rentService.getAll({ type: "featured" }),
  });
  const featuredRents = featuredData?.data.items;

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
      <ScrollToTop />
      <Hero />
      <AboutUs />
      <VideoAdd />
      <FeaturedYachts isLoading={featuredLoading} rents={featuredRents} />
      <Events />
      <Gallery />
    </div>
  );
};

export default HomePage;
