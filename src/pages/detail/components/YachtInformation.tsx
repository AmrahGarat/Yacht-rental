import { useState } from "react";
import GuestsSizeImg from "@/assets/icons/guests-size.svg";
import BedroomNumberImg from "@/assets/icons/bedroom-number.svg";
import CrewSizeImg from "@/assets/icons/crew-size.svg";
import HeartEmptyImg from "@/assets/icons/heart-empty.svg"
import HeartFilledRedImg from "@/assets/icons/heart-filled-red.svg"

export const YachtInformation = () => {
const [isReadMoreVisible, setIsReadMoreVisible] = useState(false);
const [isLiked, setIsLiked] = useState(false)

const toggleReadMore = () => {
    setIsReadMoreVisible(!isReadMoreVisible);
};

const fullText = (
    <>
    <p className="mb-4">
        The 136m/446'2" 'Flying Fox' motor yacht built by the German shipyard Lurssen is available for charter for up to 22 guests in 11 cabins. This multi-award winning yacht features interior styling by British designer Mark Berryman Design.
    </p>
    <p className="mb-4">
        With an abundance of space and superlative amenities across her luxurious decks, you'll be spoilt for choice on a luxury yacht charter aboard Flying Fox. She has sensational features such as a helipad, wheelchair accessibility, movie theatre, spa, elevator, underwater lights, beach club and gym.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">GUEST ACCOMMODATION</h2>
    <p className="mb-4">
        Built in 2019, Flying Fox offers guest accommodation for up to 22 guests in 11 suites comprising a master suite and ten VIP cabins. The master suite incorporates its own study and benefits from a his-and-her bathroom. Excellent service is guaranteed, with fifty-five crew members on board to look after your every need.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">ONBOARD COMFORT & ENTERTAINMENT</h2>
    <p className="mb-4">
        On your charter, you'll find plenty to keep you busy and entertained, particularly a stunning fireplace, providing the perfect place to curl up and relax. The yacht's library is a beautiful addition to her range of leisure facilities, and acts as a lovely spot for relaxing or browsing. Alternatively, the yacht boasts a movie theatre, perfect for relaxing after a long day on the water. Elsewhere, the latest beauty and hair treatments are available in the luxurious beauty room and, in addition, the steam room is great for your skin and a perfect place to unwind. Revive yourself after an intense workout in the sauna or elsewhere, kick back and relax in the well-appointed spa. Take a plunge in the pool under the sun. Plus, even the most discerning of charter guests will enjoy the included beach club. A gym with all the latest equipment is available for a good workout or retreat to the deck jacuzzi and soak up the scenery.
    </p>

    <p className="mb-4">
        Flying Fox benefits from some excellent features to improve your charter, particularly wheelchair-friendly access, making this vessel suitable for all guests. Guests of all ages and physical abilities can enjoy any part of the yacht thanks to the elevator. In addition, the yacht features a helipad, so you can arrive in ultimate style and comfort. Satellite communication systems keep you in touch wherever you voyage. Elsewhere, make your evenings more memorable with stunning underwater lights. Whether you want to work, use social media, or stream movies on board this yacht, you can with Wi-Fi connectivity. Plus, you can stay comfortable on board whatever the weather, with air conditioning during your charter.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">PERFORMANCE & RANGE</h2>
    <p className="mb-4">
        Built with a steel hull and aluminum superstructure, she offers greater on-board space and is more stable when at anchor thanks to her full-displacement hull. Powered by twin MTU engines, she comfortably cruises at 15 knots, reaches a maximum speed of 20 knots with a range of up to 6,500 nautical miles from her 682,500-litre fuel tanks at cruising speed.
    </p>

    <h2 className="text-xl font-semibold mt-6 mb-2">TOYS</h2>
    <p className="mb-4">
        Onboard Flying Fox, there is a large selection of toys and accessories to keep you and your guests entertained on the water throughout your stay. Principle among these are Flyboards, which allow you to experience flying in and out of the water with the latest in high-adrenaline watersport. In addition, there are two Tiwal 3 sailboats to bring out the explorer in you. There are also waterslides letting guests speed from the sun deck to the water in seconds. If that isn't enough, Flying Fox also features Jet Skis, towable toys, waterskis, a Kite Surfer, scuba diving equipment and much more. When it comes to Tenders, Flying Fox has you covered – with six tenders, including a 12.5m/41' Compass Limo Tender.
    </p>

    <p className="mb-4">
        Flying Fox and her crew are available for charter this winter for cruising within the Indian Ocean. She is already accepting bookings this summer for cruising in the Mediterranean.
    </p>

    <p className="mb-4">
        Showcasing meticulous craftsmanship coupled with high-end luxurious finishes, motor yacht Flying Fox certainly has the "wow" factor, along with state-of-the-art amenities and an array of water toys, promising truly unforgettable yacht charters for even the most discerning guests.
    </p>
    </>
);

const truncatedText = (
    <>
    <p className="mb-4">
        The 136m/446'2" 'Flying Fox' motor yacht built by the German shipyard Lurssen is available for charter for up to 22 guests in 11 cabins. This multi-award winning yacht features interior styling by British designer Mark Berryman Design.
    </p>
    <p className="mb-4">
        With an abundance of space and superlative amenities across her luxurious decks, you'll be spoilt for choice on a luxury yacht charter aboard Flying Fox. She has sensational features such as a helipad, wheelchair accessibility, movie theatre, spa, elevator, underwater lights, beach club and gym.
    </p>
    <h2 className="text-xl font-semibold mt-6 mb-2">GUEST ACCOMMODATION</h2>
    <p className="mb-4">
        Built in 2019, Flying Fox offers guest accommodation for up to 22 guests in 11 suites comprising a master suite and ten VIP cabins. The master suite incorporates its own study and benefits from a his-and-her bathroom. Excellent service is guaranteed, with fifty-five crew members on board to look after your every need.
    </p>
    </>
);

return (
    <div className="container mx-auto px-4 py-12">
    <div className="flex flex-wrap">
        <div className="flex flex-col w-full lg:w-2/3 lg:pr-10">
        <h2 className="text-2xl font-[Unna-BoldItalic] mb-6 text-secondary">FLYING FOX YACHT CHARTER</h2>
        <div className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
            {isReadMoreVisible ? fullText : truncatedText}
            <button onClick={toggleReadMore} className="text-blue-600 mt-4 underline hover:text-blue-500 transition duration-300">
            {isReadMoreVisible ? "Read Less" : "Read More"}
            </button>
        </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <div className="flex flex-col gap-4 p-4 border-b-2 border-secondary">
            <div className="flex gap-4 mb-4">
            <div className="flex gap-1 items-center">
                <img src={GuestsSizeImg} alt="Guests size" className="w-5" />
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">22 Guests</p>
            </div>
            <div className="flex gap-1 items-center">
                <img src={BedroomNumberImg} alt="Bedroom number" className="w-5" />
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">11 Cabins</p>
            </div>
            <div className="flex gap-1 items-center">
                <img src={CrewSizeImg} alt="Crew size" className="w-5" />
                <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">55 Crew</p>
            </div>
            <button onClick={() => setIsLiked(!isLiked)}>
                <img src={isLiked ? HeartFilledRedImg: HeartEmptyImg} alt="heart" className="w-14"/>
            </button>
            </div>
            <div className="flex gap-1 items-center">
            <p className="text-[#9499A6] text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">Cabin Configuration:</p>
            <p className="text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">1 Master, 10 VIP</p>
            </div>
        </div>

        <div className="p-4 border-b-2 border-secondary">
            <h2 className="text-xl font-semibold mb-4 text-secondary">SPECIFICATIONS</h2>
            <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col items-start text-black text-sm md:text-base lg:text-sm xl:text-base">
                <div className="flex mb-4">
                <p className="leading-[140%]">LENGTH</p>
                </div>
                <div className="flex mb-4">
                <p className="leading-[140%]">BEAM</p>
                </div>
                <div className="flex mb-4">
                <p className="leading-[140%]">DRAFT</p>
                </div>
                <div className="flex mb-4">
                <p className="leading-[140%]">GROSS TONNAGE</p>
                </div>
                <div className="flex mb-4">
                <p className="leading-[140%]">CRUISING SPEED</p>
                </div>
                <div className="flex mb-4">
                <p className="leading-[140%]">BUILT</p>
                </div>
            </div>

            <div className="flex flex-col text-sm md:text-base lg:text-sm xl:text-base leading-[140%]">
                <div className="flex mb-4">
                <p className="ml-auto">446'2 / 136m</p>
                </div>
                <div className="flex mb-4">
                <p className="ml-auto">73'10 / 22.5m</p>
                </div>
                <div className="flex mb-4">
                <p className="ml-auto">16'9 / 5.1m</p>
                </div>
                <div className="flex mb-4">
                <p className="ml-auto">9,022 GT</p>
                </div>
                <div className="flex mb-4">
                <p className="ml-auto">15 Knots</p>
                </div>
                <div className="flex mb-4">
                <p className="ml-auto">2019</p>
                </div>
            </div>
            </div>
        </div>

        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">PRICE</h2>
            <p className="text-2xl font-bold text-secondary mb-4">€3,000,000 p/week + expenses</p>
            <button className="w-full bg-secondary text-white py-3 rounded-md text-lg hover:bg-blue-500 transition duration-300">
            Book This Yacht
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default YachtInformation;
