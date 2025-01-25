import Award1Img from "@/assets/images/award1.png"
import Award2Img from "@/assets/images/award2.png"
import Award3Img from "@/assets/images/award3.png"
import Award4Img from "@/assets/images/award4.png"
import Award5Img from "@/assets/images/award5.png"

export const AboutUs = () => {
return (
    <div className="container lg:flex lg:gap-14 justify-between py-[40px] lg:py-[120px]">
        <div className="lg:max-w-[500px]">
            <h3 className="text-[15px] lg:text-[20px] leading-[110%] tracking-[1.2px] mb-2.5 lg:mb-5">ABOUT US</h3>
            <h1 className="text-[30px] lg:text-[48px] leading-[140%] mb-2.5 lg:mb-5">OceanicOdyssey: Embark on an Epic Voyage Beyond the Horizon</h1>
            <p className="text-[12px] lg:text-[16px] leading-[110%] mb-2.5 lg:mb-5">OceanicOdyssey offers unforgettable journeys across the world most stunning seas. As your trusted sailing partner, we combine adventure and luxury to create experiences that go beyond the ordinary. Set sail with us and embark on an odyssey like no other.</p>
        </div>
        <div className="lg:max-w-[470px] flex flex-wrap justify-between items-center pt-14 lg:pt-0">
            <img src={Award1Img} alt="award1img" className="h-[62px]"/>
            <img src={Award2Img} alt="award2img" className="h-[62px]"/>
            <img src={Award3Img} alt="award3img" className="h-[62px]"/>
            <img src={Award5Img} alt="award5img" className="h-[62px]"/>
            <img src={Award4Img} alt="award4img" className="h-[62px]"/>
            <img src={Award3Img} alt="award3img" className="h-[62px]"/>
        </div>
    </div>
)}

export default AboutUs
