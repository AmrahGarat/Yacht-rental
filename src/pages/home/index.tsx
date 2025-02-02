import AboutUs from "./components/AboutUs"
import { FeaturedYachts } from "./components/FeaturedYachts"
import Hero from "./components/Hero"
import { Events } from "./components/Events"
import { VideoAdd } from "./components/VideoAdd"
import { Gallery } from "./components/Gallery"

const HomePage = () => {
  return (
    <div className="pb-8 lg:pb-16">
      <Hero/>
      <AboutUs/>
      <VideoAdd/>
      <FeaturedYachts/>
      <Events/>
      <Gallery/>
    </div>
  )
}

export default HomePage
