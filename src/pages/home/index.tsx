import AboutUs from "./components/AboutUs"
import { FeaturedYachts } from "./components/FeaturedYachts"
import Hero from "./components/Hero"
import { Events } from "./components/Events"
import { VideoAdd } from "./components/VideoAdd"

const HomePage = () => {
  return (
    <div className="pt-1 lg:pt-2 pb-8 lg:pb-16">
      <Hero/>
      <AboutUs/>
      <VideoAdd/>
      <FeaturedYachts/>
      <Events/>
    </div>
  )
}

export default HomePage
