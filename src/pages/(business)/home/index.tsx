import { useState, useEffect } from "react";
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
import { CircleFadingArrowUp } from "lucide-react";
import Footer from "@/components/shared/footer";

const HomePage = () => {
  const { data: featuredData, isLoading: featuredLoading } = useQuery({
    queryKey: [QUERY_KEYS.FEATURED_RENTS],
    queryFn: () => rentService.getFeature(),
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-transparent">
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
      <Footer />

      {/* Scroll to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-20 p-3 bg-blue-500 text-white rounded-full shadow-lg transition hover:bg-blue-600"
        >
          <CircleFadingArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default HomePage;
