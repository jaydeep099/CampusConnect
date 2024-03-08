import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Text,
  CardHeader,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
const EventsList = () => {
  return (
    <>
      <Heading ml={4}>Upcoming Events</Heading>
      <hr />
      <SimpleGrid spacing={30} templateRows="repeat(auto-fill)" ml={4}>
        <Card borderRadius={0}>
          <CardBody>
            <Heading size="md">
              Machine Learning by Computer Society of India (CSI)
            </Heading>
            <Text>Date: 12/3/24 Time: 3:30 pm Venue: IT Lab3</Text>
            <Text>
              🤖✨ Embark on a journey through the fascinating realm of Machine
              Learning with CSI! 🖥️💡 Join us for insightful workshops,
              cutting-edge discussions, and hands-on experiences. Unleash the
              power of AI, connect with like-minded enthusiasts, and shape the
              future together! 🚀👩‍💻
            </Text>
            <Button variant="solid" colorScheme="blue">
              View More
            </Button>
          </CardBody>
        </Card>
        <Card borderRadius={0}>
          <CardBody>
            <Heading size="md">Open Mic by Samvad</Heading>
            <Text>Date: 20/3/24 Time: 3:30 pm Venue: Seminar Hall</Text>
            <Text>
              🎤✨ Unleash your voice at "Open Mic by Samvad"! Join the
              captivating event for a night of expressive talents, powerful
              narratives, and a symphony of emotions. 🗣️🎶 Elevate your
              storytelling, share laughter, and create memorable moments in an
              atmosphere buzzing with creativity and connection. Don't miss this
              mic-drop experience! 🎙️🌟
            </Text>
            <Button variant="solid" colorScheme="blue">
              View More
            </Button>
          </CardBody>
        </Card>
        <Card borderRadius={0}>
          <CardBody>
            <Heading size="md">FootBall Tournament By Sports Club</Heading>
            <Text>Date: 24/3/24 Time: 9:30am Venue: Medical ground</Text>
            <Text>
              🏆⚽ Dive into the thrill of our upcoming Football Tournament!
              Sports Club invites you to showcase your skills, embrace teamwork,
              and score unforgettable moments on the field. Join us for a
              dynamic competition filled with passion, camaraderie, and victory!
              🌟🥅
            </Text>
            <Button variant="solid" colorScheme="blue">
              View More
            </Button>
          </CardBody>
        </Card>
        <Card borderRadius={0}>
          <CardBody>
            <Heading size="md">AWS by Computer Society of India (CSI)</Heading>
            <Text>Date: 30/3/24 Time: 5:30pm Venue: MMH</Text>
            <Text>
              🖥️💡 Unleash the power of AWS with CSI! Join our tech-packed
              events, delve into cloud innovation, and embark on a journey to
              master Amazon Web Services. Elevate your skills, explore cloud
              architecture, and become a trailblazer in the digital realm. 🚀👩‍💻
              #CSIAWS #TechInnovation 🌐🔐
            </Text>
            <Button variant="solid" colorScheme="blue">
              View More
            </Button>
          </CardBody>
        </Card>
      </SimpleGrid>
    </>
  );
};

export default EventsList;
