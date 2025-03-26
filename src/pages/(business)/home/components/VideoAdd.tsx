import { useTranslation } from "react-i18next";

export const VideoAdd = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full">
      <div className="relative pb-[56.25%] w-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/9HOndnVWZh0?autoplay=1&loop=1&mute=1&playlist=9HOndnVWZh0"
          title="Riva"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-center text:xl lg:text-4xl text-secondary font-[Unna-Italic] z-10">
          {t("subscribe.to.our.youtube.channel")}
          <a
            href="https://www.youtube.com/@RivayachtOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-red-600 font-[Unna-Bold]"> YouTube </span>
          </a>
        </div>
      </div>
    </div>
  );
};
