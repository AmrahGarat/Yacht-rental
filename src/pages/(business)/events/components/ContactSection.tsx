import OnlineContactImg from "@/assets/images/job-img.gif";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CharterExpertSection = () => {
  return (
    <div className="bg-white py-10">
      <section className="bg-blue-100 py-12 px-6 rounded-xl max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Book with Ease - Speak with a Charter Expert
          </h2>
          <p className="text-blue-900 font-semibold">
            Our charter experts will:
          </p>
          <ul className="space-y-2 text-blue-900">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={18} /> Discuss your
              vacation plans
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={18} /> Check
              availability & shortlist suitable yachts
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={18} /> Negotiate
              booking & prepare your itinerary
            </li>
          </ul>
          {/* <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full shadow-md">
            Contact Now
          </Button> */}
        </div>

        {/* Right Content - Illustration */}
        <div className="mt-6 md:mt-0 md:w-1/3">
          <img
            src={OnlineContactImg}
            alt="Charter Expert"
            className="w-full bg-transparent"
          />
        </div>
      </section>
    </div>
  );
};

export default CharterExpertSection;
