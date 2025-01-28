import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import YachtGallery1 from "@/assets/images/yacht-gallery-1.jpeg"
import YachtGallery2 from "@/assets/images/yacht-gallery-2.avif"
import YachtGallery3 from "@/assets/images/yacht-gallery-3.avif"
import YachtGallery4 from "@/assets/images/yacht-gallery-4.jpeg"
import YachtGallery5 from "@/assets/images/yacht-gallery-5.avif"

export const Gallery = () => {
return (
    <div className="container mt-[120px]">
        <div className="flex justify-between items-center pb-5">
            <h3 className="text-[48px] font-[Unna-Italic] text-secondary leading-[140%] max-w-[500px]">Sail through Our Fresh Gallery Updates</h3>
            <Button variant={"link"} asChild>
                <Link to="/" className="text-secondary !text-[25px]">See All</Link>
            </Button>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-300 h-[400px] rounded-[10px]">
                <img src={YachtGallery1} alt="yacht gallery 1" className="w-full h-full object-cover rounded-[10px]"/>
            </div>
            <div className="bg-gray-300 h-[400px] rounded-[10px]">
                <img src={YachtGallery5} alt="yacht gallery 5" className="w-full h-full object-cover rounded-[10px]"/>
            </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
            <div className="bg-gray-300 h-[300px] rounded-[10px]">
                <img src={YachtGallery4} alt="yacht gallery 4" className="w-full h-full object-cover rounded-[10px]"/>
            </div>
            <div className="bg-gray-300 h-[300px] rounded-[10px]">
                <img src={YachtGallery2} alt="yacht gallery 2" className="w-full h-full object-cover rounded-[10px]"/>
            </div>
            <div className="bg-gray-300 h-[300px] rounded-[10px]">
                <img src={YachtGallery3} alt="yacht gallery 3" className="w-full h-full object-cover rounded-[10px]"/>
            </div>
        </div>
    </div>
);
}
