import YachtInformation from "./components/YachtInformation"
import YachtMainPictutes from "./components/YachtMainPictutes"
import YachtOtherPictures from "./components/YachtOtherPictures"

const RentDetailPage = () => {
  return (
    <div className="pb-8 lg:pb-16">
      <YachtMainPictutes/>
      <YachtInformation/>
      <YachtOtherPictures/>
    </div>
  )
}

export default RentDetailPage
