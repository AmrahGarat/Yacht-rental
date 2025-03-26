import { useEffect, useState } from "react";
import CannesFilmFestival2025Img from "@/assets/images/cannes-film-festival-2025.jpg";
import CannesFilmFestivalImg1 from "@/assets/images/lady-grey-dress-cannes-film-festival.jpg";
import CannesFilmFestivalImg2 from "@/assets/images/cannes-dusk.jpg";
import CannesLionsCard2026Img from "@/assets/images/cannes-lions-2025-thumbnail.jpg";
import MipcomCard2025Img from "@/assets/images/mipcom-2025-thumbnail.jpg";
import ArtBaselMiamiCard2025Img from "@/assets/images/art-basel-miami-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Footer from "@/components/shared/footer";
import { useNavigate } from "react-router-dom";
import UpcomingEventCard from "@/components/shared/upcoming-event-card";
import { paths } from "@/constants/paths";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const CannesFilmFestivalEvent = () => {
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
          src={CannesFilmFestival2025Img}
          alt="Art Basel Miami"
          className="w-full h-full object-cover"
        />
        <div className="flex gap-6">
          <div className="w-[70%]">
            <h1 className="text-[45px] font-[Unna-Bold] pt-6 text-secondary">
              Cannes Film Festival 2025
            </h1>
            <h3 className="text-[25px] font-[Unna-Bold] text-gray-500">
              Cannes, France
            </h3>
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="yacht-size" className="w-5" />
              <p className="text-[20px] text-gray-500">13 - 24 May 2025</p>
            </div>
            <p className="pt-4 text-[25px] text-gray-400 leading-8">
              Cannes comes alive as the red carpet returns to make way for one
              of the biggest events in the film industry, the Cannes Film
              Festival.
            </p>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Globally known for being one of the most glamorous events along
              the Cote d'Azur, the Cannes Film Festival celebrates its 78th
              edition this year, and is a must when chartering around the South
              of France. <br />
              <br />
              Whether you're planning a fun-filled family charter or a highly
              indulgent corporate charter, visiting Cannes during the 11-day
              festival will allow charter guests to experience the thrills of
              film premieres, red carpet glitz and of course the sought-after
              social events.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              A glamorous social occasion
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Film enthusiasts and corporate charter groups alike will revel in
              the long list of perks that come with berthing in the picturesque
              Vieux Port adjacent to the venue of Palais des Festivals.
              <br />
              <br />
              Just a stone's throw away from the main action, celebrities and
              A-listers attending the Cannes Film Festival regularly join yacht
              parties on attending superyacht charters, dancing till dawn with
              free-flowing champagne.
              <br />
              <br />
              Following an exciting day of viewing exclusive screenings of the
              latest films, the parties begin as dusk falls. Actors, supermodels
              and directors are seen in most directions around the marina and
              charter guests could find themselves mingling with some of the
              biggest names on the screen. A real perk in itself.
            </p>
            <img
              src={CannesFilmFestivalImg1}
              alt="Cannes Img 2"
              className="py-6"
            />
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Cannes charters during the Film Festival
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              An ideal way to warm-up for the Mediterranean yacht charter
              season, the Cannes Film Festival is one of the first major events
              of the year in Cannes and annually attracts fleets of superyachts
              to the glistening Bay of Cannes. <br />
              <br />
              With the marina so close to all the action, choosing a Cannes Film
              Festival charter will ensure the best views of Cannes itself, plus
              a second-to-none private venue for unforgettable yacht parties and
              mingling with a wide array of A-listers. <br />
              <br />
              Located in close proximity to many other Cote d'Azur favorites
              like Antibes, and of course Monaco slightly further along,
              charters incorporating the Cannes Film Festival will provide
              charter guests with a long list of memorable events and plenty of
              incentive to return the following year.
            </p>
            <img
              src={CannesFilmFestivalImg2}
              alt="Cannes img 2"
              className="py-6"
            />
            <div className="bg-gray-300 px-9 py-12 flex gap-5 rounded-md">
              <img src={InfoIcon} alt="yacht-size" className="w-28" />
              <div>
                <p className="text-[35px] text-black font-[Unna-Bold] pb-4">
                  View yachts available for charter in Cannes
                </p>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
                  onClick={() =>
                    navigate("/list?location=67e13d77d1935074ede6670f")
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
                name="Art Basel Miami 2025"
                image={ArtBaselMiamiCard2025Img}
                onClick={() => navigate(paths.EVENTS.ARTBASEL)}
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

export default CannesFilmFestivalEvent;
