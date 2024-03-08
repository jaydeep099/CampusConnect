import Base from "../components/Base";
import ImageSlider from "../components/Home Components/ImageSlider";
import InfoCard from "../components/Home Components/InfoCard";
import { Stack, HStack, VStack } from "@chakra-ui/react";
const Home = () => {
  return (
    <Base>
      <Stack>
        <HStack spacing={8}>
          <ImageSlider />
          <InfoCard />
        </HStack>
      </Stack>
    </Base>
  );
};

export default Home;
