import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
  Button,
  Heading,
} from "@chakra-ui/react";
const ClubsList = () => {
  return (
    <>
      <Heading ml={4}>Clubs</Heading>
        <hr/> 
      <SimpleGrid
        spacing={30}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        ml={4}
      >
        <Card borderRadius={0}>
          <CardHeader>
            <Heading size="md"> Sports Club </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              🏀⚽ Unleash your passion! Join the Sports Club for exhilarating
              moments, teamwork, and unforgettable victories. 🏆🎉
            </Text>
          </CardBody>
          <CardFooter>
            <Button  variant="solid" colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card borderRadius={0}>
          <CardHeader>
            <Heading size="md"> Samvad </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              🗣️✨ Elevate your voice! Join Samvad Events for empowering
              dialogues, confident public speaking, and a journey of impactful
              conversations. 🎙️🤝
            </Text>
          </CardBody>
          <CardFooter>
            <Button  variant="solid" colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card borderRadius={0}>
          <CardHeader>
            <Heading size="md"> Computer Society of India (CSI)</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              🖥️💡 Dive into tech wonders! Join CSI Events for coding
              adventures, innovation, and a byte-sized journey into the digital
              realm. 🚀👩‍💻
            </Text>
          </CardBody>
          <CardFooter>
            <Button  variant="solid" colorScheme="blue">View here</Button>
          </CardFooter>
        </Card>
        <Card borderRadius={0}>
          <CardHeader>
            <Heading size="md"> Decrypters </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              🔐💻 Crack the code! Join Decrypters for coding challenges,
              competitions, and workshops, unlocking a world of tech brilliance.
              🚀
            </Text>
          </CardBody>
          <CardFooter>
            <Button  variant="solid" colorScheme="blue" >View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default ClubsList;
