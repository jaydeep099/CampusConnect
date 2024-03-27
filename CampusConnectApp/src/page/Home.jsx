import Base from "../components/Base";
import ClubsList from "../components/Home Components/ClubsList";
import EventsList from "../components/Home Components/EventsList";
const Home = () => {
  return (
    <Base>
      <br/>
      <ClubsList />
      <br />
      <EventsList />
    </Base>
  );
};

export default Home;
