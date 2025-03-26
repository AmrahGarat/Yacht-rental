import { useState, useEffect } from "react";
import bgImage from "@/assets/images/pxfuel.jpg";
import VideoSection from "./components/VideoSection";
import { SportEvents } from "./components/sportevents/SportEvents";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { CircleFadingArrowUp } from "lucide-react";
import Footer from "@/components/shared/footer";
import InfoSection from "./components/InfoSection";
import { CorporateEvents } from "./components/corporateevents/CorporateEvents";
import { YachtEvents } from "./components/yachtevents/YachtEvents";
import CharterExpertSection from "./components/ContactSection";

const EventsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setLoading(false), 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const backgroundPosition = `center ${scrollY * 0.4}px`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

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
      <VideoSection />
      <InfoSection />
      <SportEvents />
      <YachtEvents />
      <CorporateEvents />
      <CharterExpertSection />
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

export default EventsPage;
