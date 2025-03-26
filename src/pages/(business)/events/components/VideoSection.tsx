import EventsVideo from "@/assets/videos/videoevents.mp4";
import { useTranslation } from "react-i18next";

export const VideoSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-[600px] w-full text-white">
      <video
        src={EventsVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute flex items-center justify-center z-10 w-full h-full">
        <h1 className="text-[60px] xl:text-[85px] leading-[115%] font-[Unna-Italic]">
          Events Calendar
        </h1>
      </div>
    </div>
  );
};

export default VideoSection;
