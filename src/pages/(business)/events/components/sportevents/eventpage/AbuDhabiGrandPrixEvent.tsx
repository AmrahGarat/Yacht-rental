import { useEffect, useState } from "react";
import AbuDhabiGrandPrix2025Img from "@/assets/images/abu-dhabi-grand-prix-2025.jpg";
import AbuDhabi1Img from "@/assets/images/abu-dhabi-img1.jpeg";
import AbuDhabi2Img from "@/assets/images/abu-dhabi-img2.jpeg";
import AbuDhabi3Img from "@/assets/images/abu-dhabi-img3.jpeg";
import AbuDhabi4Img from "@/assets/images/abu-dhabi-img4.jpeg";
import AbuDhabi5Img from "@/assets/images/abu-dhabi-img5.jpeg";
import AbuDhabi6Img from "@/assets/images/abu-dhabi-img6.jpeg";
import AbuDhabi7Img from "@/assets/images/abu-dhabi-img7.jpeg";
import MonacoEPrixCard2025Img from "@/assets/images/monaco-e-prix-2025-thumbnail.jpg";
import MonacoGrandPrixCard2025Img from "@/assets/images/monaco-grand-prix-2025-thumbnail.jpg";
import SaudiArabiaGrandPrixCard2026Img from "@/assets/images/saudi-arabia-grand-prix-2026-thumbnail.jpg";
// import AbuDhabiGrandPrixCard2025Img from "@/assets/images/abu-dhabi-grand-prix-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Footer from "@/components/shared/footer";
import { useNavigate } from "react-router-dom";
import UpcomingEventCard from "@/components/shared/upcoming-event-card";
import { paths } from "@/constants/paths";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const AbuDhabiGrandPrixEvent = () => {
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
          src={AbuDhabiGrandPrix2025Img}
          alt="Art Basel Miami"
          className="w-full h-full object-cover"
        />
        <div className="flex gap-6">
          <div className="w-[70%]">
            <h1 className="text-[45px] font-[Unna-Bold] pt-6 text-secondary">
              Abu Dhabi Grand Prix 2025
            </h1>
            <h3 className="text-[25px] font-[Unna-Bold] text-gray-500">
              Yas Marina, Abu Dhabi
            </h3>
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="yacht-size" className="w-5" />
              <p className="text-[20px] text-gray-500">5 - 7 Dec 2025</p>
            </div>
            <p className="pt-4 text-[25px] text-gray-400 leading-8">
              Yas Marina is set to host an exhilarating finale to the 2025 Grand
              Prix in Abu Dhabi, promising a high-energy spectacle filled with
              adrenaline-pumping thrills.
            </p>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              In tandem with Port Hercule in Monaco, the Abu Dhabi Grand Prix
              stands out as one of just two circuits providing exclusive
              trackside berths for luxury yacht charters to experience the
              excitement of the race while sipping cocktails on the deck.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Highlights of the Abu Dhabi Grand Prix
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              With over 50,000 spectators flocking to the Yas Marina Circuit
              each year for the Grand Prix finale, securing private facilities
              that offer unparalleled views and complimentary champagne is
              undoubtedly the ultimate way to savor the event in all its glory.
            </p>
            <img src={AbuDhabi1Img} alt="Art Basel Miami" className="py-6" />
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Unfolding under the enchanting twilight of the United Arab
              Emirates, drivers navigate the circuit meticulously crafted by
              renowned architect Hermann Tilke, tackling one of the longest
              courses in the racing circuit. Positioned mere meters from this
              exhilarating spectacle, Abu Dhabi yacht charter guests are poised
              in Yas Marina for an unforgettable experience that will be etched
              in their memories forever. <br />
              <br />
              Immersed in the vibrant pulse of life in Abu Dhabi, the
              entertainment extravaganza extends after the race and podium
              ceremony to various clubs, exquisite restaurants, and exclusive
              superyacht parties, providing opportunities to socialize with
              Formula 1 stars.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Superyacht charters at the Abu Dhabi Grand Prix
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Perfect for a family retreat or a corporate charter, this Yas
              marina offers access to a diverse range of entertainment that is
              appealing to charter guests of all ages and creates an immersive
              atmosphere for both clients and siblings. <br />
              <br />
              Awarded with the highly sought-after 5 Gold Anchor Platinum
              accreditation from The Yacht Harbour Association, the Yas Marina
              hosts 227 berths, with superyacht visitor berths accommodating
              motor yacht charters up to 574ft.
            </p>
            <img src={AbuDhabi2Img} alt="Art Basel Miami" className="py-6" />
            <div className="flex gap-5 items-center w-[49%]">
              <img src={AbuDhabi3Img} alt="Art Basel" className="rounded-md" />
              <img src={AbuDhabi4Img} alt="Art Basel" className="rounded-md" />
            </div>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Abu Dhabi Grand Prix Opening Times
            </h2>
            <p className="py-4 text-[20px] text-gray-800 leading-6 pb-10">
              The 2025 Abu Dhabi Grand Prix is scheduled to run from 4 -7
              December.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Abu Dhabi Grand Prix yacht charters: At a glance
            </h2>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              For those seeking to blend an Abu Dhabi crewed yacht charter with
              the excitement of the Grand Prix, this region is renowned for
              providing exceptional luxury yacht charter experiences with a
              wealth of attractions and opportunities to make the most of the
              waves with vast stretches of coastline and abundant diving
              hotspots.
            </p>
            <img src={AbuDhabi5Img} alt="Art Basel Miami" className="py-6" />
            <div className="flex gap-5 items-center w-[49%]">
              <img src={AbuDhabi6Img} alt="Art Basel" className="rounded-md" />
              <img src={AbuDhabi7Img} alt="Art Basel" className="rounded-md" />
            </div>
            <p className="py-4 text-[20px] text-gray-800 leading-6">
              To find out more about chartering in Abu Dhabi and the Middle
              East, take a look at some sample Abu Dhabi yacht charter
              itineraries for the top recommendations on activities in the area
              and read our complete guide to Abu Dhabi yacht charters.
            </p>
            <div className="bg-gray-300 px-9 py-12 flex gap-5 rounded-md">
              <img src={InfoIcon} alt="yacht-size" className="w-28" />
              <div>
                <p className="text-[35px] text-black font-[Unna-Bold] pb-4">
                  View yachts available for charter in Abu Dhabi
                </p>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
                  onClick={() =>
                    navigate("/list?location=67e13c89d1935074ede666fd")
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
                name="Monaco E Prix 2025"
                image={MonacoEPrixCard2025Img}
                onClick={() => navigate(paths.EVENTS.ARTBASEL)}
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

export default AbuDhabiGrandPrixEvent;
