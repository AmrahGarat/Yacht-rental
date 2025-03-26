import { useEffect, useState } from "react";
import MonacoEPrix2025Img from "@/assets/images/monaco-e-prix-2025.jpg";
import MonacoE1Img from "@/assets/images/monaco-e-prix-img1.jpeg";
import MonacoE2Img from "@/assets/images/monaco-e-prix-img2.jpeg";
import MonacoE3Img from "@/assets/images/monaco-e-img3.jpeg";
import MonacoGrandPrixCard2025Img from "@/assets/images/monaco-grand-prix-2025-thumbnail.jpg";
import SaudiArabiaGrandPrixCard2026Img from "@/assets/images/saudi-arabia-grand-prix-2026-thumbnail.jpg";
import AbuDhabiGrandPrixCard2025Img from "@/assets/images/abu-dhabi-grand-prix-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Footer from "@/components/shared/footer";
import { useNavigate } from "react-router-dom";
import UpcomingEventCard from "@/components/shared/upcoming-event-card";
import { paths } from "@/constants/paths";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const MonacoEPrixEvent = () => {
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
          src={MonacoEPrix2025Img}
          alt="Art Basel Miami"
          className="w-full h-full object-cover"
        />
        <div className="flex gap-6">
          <div className="w-[70%]">
            <h1 className="text-[45px] font-[Unna-Bold] pt-6 text-secondary">
              Monaco E-Prix 2025
            </h1>
            <h3 className="text-[25px] font-[Unna-Bold] text-gray-500">
              Monte Carlo, Monaco
            </h3>
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="yacht-size" className="w-5" />
              <p className="text-[20px] text-gray-500">3 - 4 May 2025</p>
            </div>
            <p className="pt-4 text-[25px] text-gray-400 leading-8">
              Monaco prepares for another exciting race as the Monaco E-Prix
              brings an electric atmosphere to Monte Carlo.
            </p>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Now embarking on its eighth edition, the Monaco E-Prix returns
              once again to own the streets of Monte Carlo, showing that
              electricity really can rule the track.
              <br />
              <br />
              Annually attracting thousands of visitors to the stands, the
              E-Prix uses the same race track used in the world-renowned Monaco
              Grand Prix, complete with all its challenging elevation changes,
              tight bends and lack of run-off areas.
            </p>
            <img src={MonacoE1Img} alt="Art Basel Miami" className="py-6" />
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Using the full Circuit de Monaco track in its entirety since 2021,
              the E-Prix has rapidly grown in popularity and has proved an
              exciting addition to Monaco luxury charters. <br />
              <br />
              Thanks to the exceptional trackside berths in Port Hercule, which
              we highly recommend booking in advance, the race is a mesmerizing
              fossil fuel-free event not just for family charters, but it's also
              a great networking opportunity for corporate charters.
            </p>
            <img src={MonacoE2Img} alt="Art Basel Miami" className="py-6" />
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Even with the high-speed action on the track, the Monaco E-Prix
              keeps on delivering with side attractions including the pop-up
              Allianz Village. <br />
              <br />
              Known to draw in around 40,000 visitors a day, the attraction
              brings everyone closer to the action with exclusive meet-and-greet
              sessions with the racers, merchandise exhibitors, racing
              simulators and a resident DJ throughout the event. <br />
              <br />
              Further away, and in touch with the real prestige feel of Monaco,
              the BOSS Emotion Club offers charter guests further immersion into
              the E-Prix experience.
              <br />
              <br />
              Featuring fine dining packages, dedicated Q & A sessions with the
              racers and an array of other VIP benefits, the BOSS Emotion Club
              is the perfect way to mingle with other racing enthusiasts within
              the charter lifestyle.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Chartering Monaco
            </h2>
            <img src={MonacoE3Img} alt="Art Basel Miami" className="py-6" />
            <p className="py-4 text-[20px] text-gray-800 leading-6">
              Taking a luxury yacht charter around Monaco and the South of
              France can be a truly memorable experience. With stunning displays
              of historical significance and cosmopolitan highlights, there
              really is something for all charter guests along the esteemed Cote
              d'Azur.v <br />
              <br />
              Michelin-style cuisine awaits at every corner in Monte Carlo,
              along with exquisite clubs and bars showcasing the vibrant Monaco
              night life. Charter guests can make the most of the exotic
              destination before heading back to the luxury charter for a
              nightcap and a night with an exceptional view. <br />
              <br />
              To find out more about Monaco yacht charters, or how to integrate
              the Monaco E-Prix into your forthcoming booking, contact your
              preferred yacht charter broker today.
            </p>
            <div className="bg-gray-300 px-9 py-12 flex gap-5 rounded-md">
              <img src={InfoIcon} alt="yacht-size" className="w-28" />
              <div>
                <p className="text-[35px] text-black font-[Unna-Bold] pb-4">
                  View yachts available for charter in Monaco
                </p>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
                  onClick={() =>
                    navigate("/list?location=67ab2a3f8863a4d0ac950d98")
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
                name="Abu Dhabi Grand Prix 2025"
                image={AbuDhabiGrandPrixCard2025Img}
                onClick={() => navigate(paths.EVENTS.ABUDHABI)}
              />
              <UpcomingEventCard
                name="Monaco Grand Prix 2025"
                image={MonacoGrandPrixCard2025Img}
                onClick={() => navigate(paths.EVENTS.CANNESL)}
              />
              <UpcomingEventCard
                name="Saudi Arabia Grand Prix 2026"
                image={SaudiArabiaGrandPrixCard2026Img}
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

export default MonacoEPrixEvent;
