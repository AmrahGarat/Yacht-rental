import { PopularYachts } from "@/components/shared/rent-card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const FeaturedYachts = () => {
return (
    <div className="container mt-[120px]">
        <div className="flex justify-between items-center pb-5">
            <h3 className="text-[48px] font-[Unna-Italic] text-secondary leading-[140%]">Featured Yacths</h3>
            <Button variant={"link"} asChild>
                <Link to="/" className="text-secondary !text-[25px]">See All</Link>
            </Button>
        </div>
        <div className="grid lg:grid-cols-3 gap-3 xl:gap-6">
            <PopularYachts/>
            <PopularYachts/>
            <PopularYachts/>
        </div>
    </div>
)}
