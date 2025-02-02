import YachtInformation from "./components/YachtInformation"
import YachtMainPictutes from "./components/YachtMainPictutes"

const RentDetailPage = () => {
  return (
    <div className="pb-8 lg:pb-16">
      <YachtMainPictutes/>
      <YachtInformation/>
    </div>
  )
}

export default RentDetailPage
