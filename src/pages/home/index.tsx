import AboutUs from "./components/AboutUs"
import Hero from "./components/Hero"

const HomePage = () => {
  return (
    <div className="pt-1 lg:pt-2 pb-8 lg:pb-16">
      <Hero/>
      <AboutUs/>
    </div>
  )
}

export default HomePage
