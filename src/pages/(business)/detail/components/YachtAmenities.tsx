import { FC } from "react";

import JacuzziIcon from "@/assets/icons/jacuzzi.svg";
import TenderGarageIcon from "@/assets/icons/tender-garage.svg";
import UnderwaterLightsIcon from "@/assets/icons/underwater-lights.svg";
import MassageIcon from "@/assets/icons/massage-room.svg";
import FireplaceIcon from "@/assets/icons/fireplace.svg";
import SunDeckIcon from "@/assets/icons/sun-deck.svg";
import StabilizersIcon from "@/assets/icons/stabilisers-underway.svg";
import HelipadIcon from "@/assets/icons/helipad.svg";
import CommercialHelipadIcon from "@/assets/icons/commercial-helipad.svg";
import WifiIcon from "@/assets/icons/wifi.svg";
import VideoOndemandIcon from "@/assets/icons/video-on-demand.svg";
import SwimmingPlatformIcon from "@/assets/icons/swimming-platform.svg";
import AtanchorStabilizersIcon from "@/assets/icons/stabilizers.svg";
import SatcomIcon from "@/assets/icons/satcom.svg";
import SunpadsIcon from "@/assets/icons/sunpads.svg";
import SwimmingPoolIcon from "@/assets/icons/swimming-pool.svg";
import DeckJacuzziIcon from "@/assets/icons/jacuzzi.svg";
import MovieTheatreIcon from "@/assets/icons/movie.svg";
import SpaIcon from "@/assets/icons/spa.svg";
import SaunaIcon from "@/assets/icons/sauna.svg";
import GymIcon from "@/assets/icons/gym.svg";
import BeautyRoomIcon from "@/assets/icons/beauty.svg";
import BeachClubIcon from "@/assets/icons/beach-club.svg";
import ElevatorIcon from "@/assets/icons/lift.svg";
import SteamRoomIcon from "@/assets/icons/steam-room.svg";
import AirConditioningIcon from "@/assets/icons/air-conditioning.svg";
import BBQIcon from "@/assets/icons/bbq.svg";
import WheelchairIcon from "@/assets/icons/accessible.svg";
import SatelliteTVIcon from "@/assets/icons/satellite-tv.svg";
import GamesConsolesIcon from "@/assets/icons/games-consoles.svg";

interface Amenity {
  name: string;
  icon: string;
}

const amenities: Amenity[] = [
  { name: "Jacuzzi", icon: JacuzziIcon },
  { name: "Tender Garage", icon: TenderGarageIcon },
  { name: "Underwater Lights", icon: UnderwaterLightsIcon },
  { name: "Massage Room", icon: MassageIcon },
  { name: "Fireplace", icon: FireplaceIcon },
  { name: "Sun Deck", icon: SunDeckIcon },
  { name: "Stabilizers Underway", icon: StabilizersIcon },
  { name: "Helipad", icon: HelipadIcon },
  { name: "Commercial Helipad", icon: CommercialHelipadIcon },
  { name: "Wi-Fi", icon: WifiIcon },
  { name: "Video On-Demand", icon: VideoOndemandIcon },
  { name: "Swimming Platform", icon: SwimmingPlatformIcon },
  { name: "At-Anchor Stabilizers", icon: AtanchorStabilizersIcon },
  { name: "Satcom", icon: SatcomIcon },
  { name: "Sunpads", icon: SunpadsIcon },
  { name: "Swimming Pool", icon: SwimmingPoolIcon },
  { name: "Deck Jacuzzi", icon: DeckJacuzziIcon },
  { name: "Movie Theatre", icon: MovieTheatreIcon },
  { name: "Spa", icon: SpaIcon },
  { name: "Sauna", icon: SaunaIcon },
  { name: "Gym", icon: GymIcon },
  { name: "Beauty Room", icon: BeautyRoomIcon },
  { name: "Beach Club", icon: BeachClubIcon },
  { name: "Elevator", icon: ElevatorIcon },
  { name: "Steam Room", icon: SteamRoomIcon },
  { name: "Air Conditioning", icon: AirConditioningIcon },
  { name: "BBQ", icon: BBQIcon },
  { name: "Wheelchair Accessible", icon: WheelchairIcon },
  { name: "Satellite TV", icon: SatelliteTVIcon },
  { name: "Games Consoles", icon: GamesConsolesIcon },
];

export const YachtAmenities: FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-[Unna-BoldItalic] mb-6 text-secondary">
        AMENITIES & ENTERTAINMENT
      </h2>

      <div className="flex justify-start lg:w-2/3 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={amenity.icon}
                alt={amenity.name}
                className="w-8 h-8 text-blue-600"
              />
              <p className="text-[16px] font-medium text-primary">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YachtAmenities;
