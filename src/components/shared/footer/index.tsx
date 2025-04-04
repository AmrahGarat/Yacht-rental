import { paths } from "@/constants/paths";
import { ModalTypeEnum, useDialog } from "@/hooks/useDialog";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const { openDialog } = useDialog();
  const navigate = useNavigate();

  function navigateToList() {
    navigate(paths.LIST);
  }

  return (
    <footer className="bg-white text-secondary pt-6 pb-6">
      <div className="w-full px-1 grid grid-cols-1 md:grid-cols-2 gap-2 container">
        <div className="max-w-[600px]">
          <h2 className="text-xl font-bold mb-2">
            The OceanicOdyssey Difference
          </h2>
          <p className="text-sm mb-2">
            OceanicOdyssey makes it easy to find the yacht charter vacation that
            is right for you. We combine thousands of yacht listings with local
            destination information, sample itineraries, and experiences to
            deliver the world's most comprehensive yacht charter website.
          </p>
          <button
            onClick={navigateToList}
            className="bg-secondary text-white px-6 py-2 rounded-full font-semibold"
          >
            Plan My Charter
          </button>
          <div className="mt-2 flex items-center justify-start gap-8">
            <div>
              <p className="font-bold">Geneva</p>
              <p>+41 78 843 81 56</p>
            </div>
            <div>
              <p className="font-bold">Baku</p>
              <p>+994 70 597 99 97</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Popular Events</h3>
            <ul className="space-y-2 text-sm">
              <li>
                &gt;
                <Link to={paths.EVENTS.CANNESF}>Cannes Film Festival</Link>
              </li>
              <li>
                &gt;
                <Link to={paths.EVENTS.ARTBASEL}>Art Basel Miami</Link>
              </li>
              <li>
                &gt;
                <Link to={paths.EVENTS.CANNESL}>Cannes Lions</Link>
              </li>
              <li>
                &gt;{" "}
                <Link to={paths.EVENTS.ABUDHABI}>Abu Dhabi Grand Prix</Link>
              </li>
              <li>
                &gt; <Link to={paths.EVENTS.MONACOE}>Monaco E Prix</Link>
              </li>
              <li>
                &gt; <Link to={paths.EVENTS.MIPCOM}>MIPCOM</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-bold mb-4">Featured Yachts</h3>
            <ul className="space-y-2 text-sm">
              <li>&gt; Whisper</li>
              <li>&gt; Project X</li>
              <li>&gt; Flying Fox</li>
              <li>&gt; Lady S</li>
              <li>&gt; Sea Eagle</li>
              <li>&gt; Dream</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="text-center text-sm text-secondary mt-2 border-t border-gray-500 pt-2">
        <p className="mt-2">
          All logos, trademarks, and copyrights contained on this website are
          the property of their respective owners.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy & Cookies
          </a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
