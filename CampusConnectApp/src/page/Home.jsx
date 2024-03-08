import Base from "../components/Base";
import ImageSlider from "../components/Home Components/ImageSlider";
import InfoCard from "../components/Home Components/InfoCard";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import InfoCard2 from "../components/Home Components/InfoCard2";
import ClubsList from "../components/Home Components/ClubsList";
import EventsList from "../components/Home Components/EventsList";
const Home = () => {
  return (
    <Base>
      
       
          <HStack spacing={8}>
            <ImageSlider />
            <InfoCard />
            <InfoCard2/>
          </HStack>
          <ClubsList/>
          <br/>
          <EventsList/>
    </Base>
  );
};

export default Home;
