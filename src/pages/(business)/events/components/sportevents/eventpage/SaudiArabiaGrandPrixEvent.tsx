import { useEffect, useState } from "react";
import Mipcom2025Img from "@/assets/images/mipcom-2025.jpg";
import MipcomImg1 from "@/assets/images/mipcom1.jpeg";
import MipcomImg2 from "@/assets/images/mipcom2.jpeg";
import MipcomImg3 from "@/assets/images/mipcom3.jpeg";
import MipcomImg4 from "@/assets/images/mipcom4.jpeg";
import MipcomImg5 from "@/assets/images/mipcom5.jpeg";
import CannesFilmFestivalCard2025Img from "@/assets/images/cannes-film-festival-2025-thumbnail.jpg";
import CannesLionsCard2026Img from "@/assets/images/cannes-lions-2025-thumbnail.jpg";
import ArtBaselMiamiCard2025Img from "@/assets/images/art-basel-miami-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Footer from "@/components/shared/footer";
import { useNavigate } from "react-router-dom";
import UpcomingEventCard from "@/components/shared/upcoming-event-card";
import { paths } from "@/constants/paths";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const MipcomEvent = () => {
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
          src={Mipcom2025Img}
          alt="Art Basel Miami"
          className="w-full h-full object-cover"
        />
        <div className="flex gap-6">
          <div className="w-[70%]">
            <h1 className="text-[45px] font-[Unna-Bold] pt-6 text-secondary">
              MIPCOM 2025
            </h1>
            <h3 className="text-[25px] font-[Unna-Bold] text-gray-500">
              Palais des Festivals, Cannes
            </h3>
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="yacht-size" className="w-5" />
              <p className="text-[20px] text-gray-500">13 - 16 Oct 2025</p>
            </div>
            <p className="pt-4 text-[25px] text-gray-400 leading-8">
              MIPCOM descends on the iconic Palais de Festivals once again to
              celebrate the latest achievements in media and offer sneak peeks
              into the exciting year ahead.
            </p>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Dubbed as the world's greatest gathering of TV executives, the
              41st edition of the event will host a wide array of screenings,
              exclusive meet-and-greet sessions, seminars and insights into
              future and forthcoming projects in the media industry.
              <br />
              <br />
              Annually attracting about 15,000 visitors and a curated collection
              of 2,000 exhibitors, MIPCOM brings Cannes to life every October
              with an audience including some of the most influential people in
              the industry worldwide.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Highlights of Art Basel Miami 2025
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              A three-day event designed to immerse art enthusiasts in the
              diverse and captivating collections of globally renowned artists,
              Art Basel Miami has evolved into a focal corporate yacht charter
              event that unfolds at the iconic Miami Beach Convention Center.
              <br />
              <br />
              Anticipated to exhibit artworks from North and South America,
              Europe, Asia, and Africa, Art Basel Miami 2025 is poised to
              attract more than 70,000 visitors and exhibit the creations of
              around 2,000 artists.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Highlights of MIPCOM 2025
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Covering almost 25,000 sqm of exhibition space, there are
              certainly a lot of reasons why a corporate yacht charter would be
              a perfect match for this event. Having a private yacht rental
              anchored in the Bay of Cannes makes a real statement and opens up
              plenty of opportunities to seal exciting deals there and then in
              the South of France.
            </p>
            <img src={MipcomImg1} alt="Art Basel Miami" className="py-6" />
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Running over four days, MIPCOM has long been associated as being
              the place to be for mixing with media enthusiasts, along with the
              Cannes Film Festival which France also plays host to. <br />
              <br />
              Providing a full program of keynote speeches, early previews, and
              chances to obtain official merchandise, visitors to the show have
              unrivaled access to many perks throughout the duration of the
              show, and with a luxury charter yacht anchored a stone's throw
              away, the evening festivities continue late into the night with
              free-flowing champagne and networking opportunities.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Superyacht charters at MIPCOM
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Experience the extravagance of the Palais des Festivals from the
              privacy of a motor yacht charter in Vieux Port, offering
              unparalleled views of the event's main spectacle. <br />
              <br />
              With features like cocktail parties and exclusive outdoor cinemas
              on deck, charter guests can elevate their MIPCOM experience to a
              new level of luxury and exclusivity.
            </p>
            <img src={MipcomImg2} alt="Art Basel Miami" className="py-6" />
            <div className="flex gap-5 items-center w-[49%]">
              <img src={MipcomImg3} alt="Art Basel" className="rounded-md" />
              <img src={MipcomImg4} alt="Art Basel" className="rounded-md" />
            </div>
            <p className="py-4 text-[20px] text-gray-800 leading-6 pb-10">
              Known to welcome some captivating motor yacht charters, Vieux Port
              has welcomed a broad range of luxury yacht charters including
              125ft (38.1m) yacht rental CHARADE, 128.11ft (39.3m) luxury yacht
              charter S7, and 171.9ft (52.35m) superyacht charter DB9.
            </p>
            <h2 className="text-secondary font-[Unna-Bold] text-[25px] leading-8">
              MIPCOM 2025 Opening Times
            </h2>
            <p className="py-4 text-[20px] text-gray-800 leading-6 pb-10">
              Dates and opening times for MIPCOM 2025 are yet to be announced.
            </p>
            <h2 className="text-secondary font-[Unna-Bold] text-[25px] leading-8">
              MIPCOM and Cannes yacht charters: At a glance
            </h2>
            <p className="py-4 text-[20px] text-gray-800 leading-6 pb-10">
              An indulgent location that is renowned for its style, cuisine, and
              of course its heritage, Cannes is an ideal stop for a South of
              France yacht charter itinerary with two captivating marinas and
              the iconic La Croisette just beckoning charter guests for a
              leisurely stroll. In between MIPCOM and other events, charter
              guests exploring the area will enjoy tasting delicious
              locally-made wines or venturing into the deep to explore the
              enticing Cannes Underwater Museum.
            </p>
            <img src={MipcomImg5} alt="Art Basel Miami" className="pb-3" />
            <p className="py-4 text-[20px] text-gray-800 leading-6">
              To find out more about exploring the region, read our guide to
              Cannes yacht charters and view some sample Cannes yacht charter
              itineraries for ideas on the best attractions to include.
            </p>
            <div className="bg-gray-300 px-9 py-12 flex gap-5 rounded-md">
              <img src={InfoIcon} alt="yacht-size" className="w-28" />
              <div>
                <p className="text-[35px] text-black font-[Unna-Bold] pb-4">
                  View yachts available for charter in Cannes
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold">
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
                name="Art Basel Miami 2025"
                image={ArtBaselMiamiCard2025Img}
                onClick={() => navigate(paths.EVENTS.ARTBASEL)}
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

export default MipcomEvent;
