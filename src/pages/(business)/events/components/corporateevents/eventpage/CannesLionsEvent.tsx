import { useEffect, useState } from "react";
import CannesLions2025Img from "@/assets/images/cannes-lions-2025.jpg";
import CannesLionsImg1 from "@/assets/images/cannes-lions-exterior.jpg";
import CannesLionsImg2 from "@/assets/images/superyacht-berthed-cannes.jpg";
import CannesFilmFestivalCard2025Img from "@/assets/images/cannes-film-festival-2025-thumbnail.jpg";
import MipcomCard2025Img from "@/assets/images/mipcom-2025-thumbnail.jpg";
import ArtBaselMiamiCard2025Img from "@/assets/images/art-basel-miami-2025-thumbnail.jpg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import InfoIcon from "@/assets/icons/info.svg";
import Footer from "@/components/shared/footer";
import { useNavigate } from "react-router-dom";
import UpcomingEventCard from "@/components/shared/upcoming-event-card";
import { paths } from "@/constants/paths";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const CannesLionsEvent = () => {
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
          src={CannesLions2025Img}
          alt="Art Basel Miami"
          className="w-full h-full object-cover"
        />
        <div className="flex gap-6">
          <div className="w-[70%]">
            <h1 className="text-[45px] font-[Unna-Bold] pt-6 text-secondary">
              Cannes Lions 2025
            </h1>
            <h3 className="text-[25px] font-[Unna-Bold] text-gray-500">
              Cannes, France
            </h3>
            <div className="flex gap-2 items-center">
              <img src={CalendarIcon} alt="yacht-size" className="w-5" />
              <p className="text-[20px] text-gray-500">16 - 20 Jun 2025</p>
            </div>
            <p className="pt-4 text-[25px] text-gray-400 leading-8">
              One of the biggest events of the year for the global creative
              community, the Cannes Lions International Festival of Creativity
              is renowned for celebrating the best in the industry across
              multiple niches.
            </p>
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              An extravagant showcase for the latest and most innovative
              elements of the creative industry, many niches come together to be
              celebrated as one faction with a multitude of exclusive
              exhibitions and seminars. <br />
              <br />
              Ideal to integrate into corporate yacht charters, the Cannes Lions
              International Festival of Creativity offers charter guests plenty
              of opportunities to mingle with some of the most highly respected
              industry professionals and celebrities alike.
            </p>
            <img src={CannesLionsImg1} alt="Art Basel Miami" className="py-6" />
            <p className="pt-4 text-[20px] text-gray-800 leading-6">
              Priding itself as an event that indulges visitors with 'insight
              and inspiration' for the creative arts, the Cannes Lions event
              commends talents that are both on and off the big screen, with
              around 30 accolades being presented during an elaborate
              prize-giving ceremony. <br />
              <br />
              Covering a total of nine categories, the awards combined with the
              exciting exhibits and inside scoop on upcoming projects, luxury
              yacht charters will have a great view of all the action from the
              nearby Vieux Port, plus a luxurious space to host some
              high-profile yacht parties in the evening.
            </p>
            <h2 className="pt-10 text-secondary font-[Unna-Bold] text-[25px] leading-8">
              Chartering the South of France and the Cannes Lions International
              Festival of Creativity
            </h2>
            <img src={CannesLionsImg2} alt="Art Basel Miami" className="py-6" />
            <p className="py-4 text-[20px] text-gray-800 leading-6">
              Annually anticipating a large array of CEOs, celebrities, and
              artists to descend on the South of France for the event, hiring a
              charter yacht around the Cote d'Azur will be nothing but exquisite
              and unforgettable.
              <br />
              <br />
              Perfect for entertaining private clients or luxury escapes with
              friends, hiring a Cannes yacht charter that integrates the Cannes
              Lions will provide all charter guests not only with a chance to
              meet some incredible people, but also to bask in the Mediterranean
              sun in one of the most iconic areas along the whole southern
              coast.
              <br />
              <br />
              To find out more about visiting the Cannes Lions Festival of
              Creativity on your next South of France yacht charter contact your
              preferred yacht charter broker today for more details.
            </p>
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
                name="Cannes Film Festival 2025"
                image={CannesFilmFestivalCard2025Img}
                onClick={() => navigate(paths.EVENTS.CANNESF)}
              />
              <UpcomingEventCard
                name="Art Basel Miami 2025"
                image={ArtBaselMiamiCard2025Img}
                onClick={() => navigate(paths.EVENTS.ARTBASEL)}
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

export default CannesLionsEvent;
