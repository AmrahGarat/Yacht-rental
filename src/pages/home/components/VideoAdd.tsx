export const VideoAdd = () => {
  return (
    <div>
      <h1 className="container text-4xl text-secondary font-[Unna-Italic]">
        Subscribe to our
        <a
          href="https://www.youtube.com/@RivayachtOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-red-600 font-[Unna-Bold]"> YouTube </span>
        </a>
        channel
      </h1>

      <div className="relative pb-[56.25%] w-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/9HOndnVWZh0?si=P-UJLfdzEEwCQlBU&autoplay=1"
          title="Riva"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
