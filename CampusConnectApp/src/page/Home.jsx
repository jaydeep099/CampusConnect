import Base from "../components/Base";
import ClubsList from "../components/HomeComponents/ClubsList";
import EventsList from "../components/HomeComponents/EventsList";
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
