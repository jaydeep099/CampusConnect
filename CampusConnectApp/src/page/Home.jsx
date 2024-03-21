import Base from "../components/Base";
import ImageSlider from "../components/Home Components/ImageSlider";
import ClubsList from "../components/Home Components/ClubsList";
import EventsList from "../components/Home Components/EventsList";
const Home = () => {
  return (
    <Base>
      <ImageSlider />
      <br/>
      <ClubsList />
      <br />
      <EventsList />
    </Base>
  );
};

export default Home;
