import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

import AbuDhabiGrandPrix from "@/assets/images/abu-dhabi-grand-prix-2025.jpg";
import SaudiGrandPrix from "@/assets/images/saudi-arabia-grand-prix-2026.jpg";
import MonacoGrandPrix from "@/assets/images/monaco-grand-prix-2025.jpg";

// Sample event data
const events = [
  {
    id: 1,
    title: "Saudi Arabia Grand Prix 2025",
    location: "Jeddah Corniche Circuit, Jeddah, Saudi Arabia",
    date: "18 - 20 Apr 2025",
    description:
      "Launching onto the scene in 2021, the Saudi Arabia Grand Prix has rapidly become the must-see high-octane event along the Red Sea coast. The street circuit offers an electrifying atmosphere, blending speed, luxury, and stunning waterfront views.",
    image: SaudiGrandPrix,
  },
  {
    id: 2,
    title: "Monaco Grand Prix 2025",
    location: "Circuit de Monaco, Monte Carlo, Monaco",
    date: "22 - 25 May 2025",
    description:
      "Experience the thrill of Formula 1 racing in the luxurious setting of Monaco. The tight street circuit, surrounded by yachts and grandstands, makes this one of the most prestigious and glamorous races in the world.",
    image: MonacoGrandPrix,
  },
  {
    id: 3,
    title: "Abu Dhabi Grand Prix 2025",
    location: "Yas Marina Circuit, Abu Dhabi, UAE",
    date: "5 - 7 Dec 2025",
    description:
      "Witness the grand finale of the Formula 1 season at the spectacular Yas Marina Circuit. This breathtaking night race under the Arabian sky delivers high-speed drama, fireworks, and unmatched luxury hospitality.",
    image: AbuDhabiGrandPrix,
  },
];

const InfoSection = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h2 className="text-6xl font-[Unna-Bold] text-center text-secondary mb-6">
          Yachting & Luxury Events
        </h2>
        <p className="text-center text-gray-600 max-w-5xl mx-auto mb-10 text-xl">
          Chartering a luxury yacht is the perfect way to enjoy unsurpassed
          entertainment at some of the planet's most prestigious events. Soak up
          the glamorous atmosphere of film festivals and iconic sporting
          fixtures. Be on the sidelines at the most thrilling sailing meets or
          experience the action for yourself as part of a regatta charter.
          Whether for business or pleasure, event charters offer a unique kind
          of entertainment, providing a floating front row seat to the world's
          most unmissable events. For shows which are not open to the public, be
          sure to get in touch with your preferred charter broker to find out
          how they might usefully represent you.
        </p>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay, EffectFade]}
            slidesPerView={1}
            loop
            effect="fade"
            autoplay={{ delay: 4000 }}
            speed={800}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="rounded-lg shadow-lg"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-row-reverse">
                  {/* Event Details */}
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center p-6 text-white max-w-[500px] z-10">
                    <h3 className="text-4xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-xl text-gray-300">
                      {event.location}
                    </p>

                    <div className="flex items-center mt-4 space-x-2 text-gray-300">
                      <Calendar size={18} />
                      <span className="text-xl">{event.date}</span>
                    </div>

                    <p className="mt-4 text-xl text-gray-300">
                      {event.description}
                    </p>

                    <button className="mt-6 px-5 py-2 bg-white text-blue-900 font-bold rounded-full shadow-md hover:bg-gray-200">
                      More
                    </button>
                  </div>

                  {/* Event Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-[700px] object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <ArrowLeft size={24} />
          </button>
          <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
