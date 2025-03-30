import { useEffect, useState } from "react";
import ArtBaselMiami2025Img from "@/assets/images/art-basel-miami-2025.jpg";
import ArtBaselMiamiMuralImg from "@/assets/images/art-basel-miami-mural.jpg";
import ArtBaselSculp1Img from "@/assets/images/art-basel-miami-sculpture.jpg";
import ArtBaselSculp2Img from "@/assets/images/art-basel-miami-sculptures.jpg";
import CannesFilmFestivalCard2025Img from "@/assets/images/cannes-film-festival-2025-thumbnail.jpg";
import CannesLionsCard2026Img from "@/assets/images/cannes-lions-2025-thumbnail.jpg";
import MipcomCard2025Img from "@/assets/images/mipcom-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Footer from "@/components/shared/footer";
import { useNavigate } from "react-router-dom";
import UpcomingEventCard from "@/components/shared/upcoming-event-card";
import { paths } from "@/constants/paths";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const ArtBaselMiamiEvent = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="container py-5 px-0">
        <img
          src={ArtBaselMiami2025Img}
          alt="Art Basel Miami"
          className="w-full h-full object-cover"
        />
        <div className="flex gap-6">
          <div className="w-[70%]">
            <h1 className="text-[45px] font-[Unna-Bold] pt-6 text-secondary">
              Art Basel Miami 2025
            </h1>
            <h3 className="text-[25px] font-[Unna-Bold] text-gray-500">
              Miami, Florida
            </h3>
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="yacht-size" className="w-5" />
              <p className="text-[20px] text-gray-500">4 -7 Dec 2025</p>
            </div>
            <p className="pt-4 text-[25px] text-gray-400 leading-8">
              Miami is poised to enchant an audience of art enthusiasts as the
              renowned Art Basel Miami event returns, showcasing a remarkable
              array of the most sought-after artists.
            </p>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              With a distinctive flair that expands beyond the convention walls,
              stretching into the vibrant city of Miami, the artistic showcase
              includes numerous sculptures scattered throughout the surrounding
              area.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Highlights of Art Basel Miami 2025
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              A three-day event designed to immerse art enthusiasts in the
              diverse and captivating collections of globally renowned artists,
              Art Basel Miami has evolved into a focal corporate yacht charter
              event that unfolds at the iconic Miami Beach Convention Center.{" "}
              <br />
              <br />
              Anticipated to exhibit artworks from North and South America,
              Europe, Asia, and Africa, Art Basel Miami 2025 is poised to
              attract more than 70,000 visitors and exhibit the creations of
              around 2,000 artists.
            </p>
            <img
              src={ArtBaselMiamiMuralImg}
              alt="Art Basel Miami"
              className="py-6"
            />
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Sectors expected to return for Art Basel Miami 2025 include
              Galleries, Nova, Meridians, Positions, Survey, Kabinett, and
              Magazines. <br />
              <br />
              With over 250 galleries to explore throughout the exhibition, USA
              yacht charter guests can find exquisite masterpieces and
              intriguing displays of mesmerizing works of art.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Superyacht charters at Art Basel Miami
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Nestled in proximity to the marina, Art Basel and its multitude of
              enticing galleries stand as a perfect draw for North America yacht
              charters, offering charter guests sublime sandy beaches, downtown
              shopping, and easy access to some of the world's most beautiful
              islands, the Bahamas. <br />
              <br />
              With a host of luxurious amenities already on board, Art Basel
              offers a refined activity to delight both clients and those on
              family yacht charters.
            </p>
            <div className="flex gap-2 items-center w-[49%]">
              <img
                src={ArtBaselSculp1Img}
                alt="Art Basel"
                className="rounded-md"
              />
              <img
                src={ArtBaselSculp2Img}
                alt="Art Basel"
                className="rounded-md"
              />
            </div>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Art Basel Miami yacht charters: At a glance
            </h2>
            <p className="py-4 text-[20px] text-gray-800 leading-6 pb-10">
              With Miami offering a colorful fusion of American and Spanish
              cultures, this luxury charter yacht hotspot is an ideal stopover
              for a North America yacht charter. In between visits to the
              exhibits of the Art Basel showcase, charter guests can relax on
              the famous South Beach, head out to the beautiful UNESCO Heritage
              site of the Everglades, or enjoy a night out on the town in some
              of the area's best nightclubs. And, with the Bahamas and Exumas
              not too far away, a vision of paradise is just a stone's throw
              away.
            </p>
            <div className="bg-gray-300 px-9 py-12 flex gap-5 rounded-md">
              <img src={InfoIcon} alt="yacht-size" className="w-28" />
              <div>
                <p className="text-[35px] text-black font-[Unna-Bold] pb-4">
                  View yachts available for charter in Miami
                </p>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
                  onClick={() =>
                    navigate("/list?location=67e13d82d1935074ede66712")
                  }
                >
                  View Yachts
                </button>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col gap-6 pt-20 sticky top-[80px] self-start">
            <h2 className="text-[25px] font-[Unna-Bold] text-secondary flex justify-center">
              UPCOMING CORPORATE EVENTS
            </h2>
            <div className="bg-gray-200 flex flex-col gap-5 p-5">
              <UpcomingEventCard
                name="Cannes Film Festival 2025"
                image={CannesFilmFestivalCard2025Img}
                onClick={() => navigate(paths.EVENTS.CANNESF)}
              />
              <UpcomingEventCard
                name="Cannes Lions 2025"
                image={CannesLionsCard2026Img}
                onClick={() => navigate(paths.EVENTS.CANNESL)}
              />
              <UpcomingEventCard
                name="MIPCOM 2025"
                image={MipcomCard2025Img}
                onClick={() => navigate(paths.EVENTS.MIPCOM)}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ArtBaselMiamiEvent;
