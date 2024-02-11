import React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  CardBody,
  CardFooter,
  Heading,
  Center,
} from "@chakra-ui/react";

const ClubCard = () => {
  return (
    <Center>
      <Card maxW="sm">
        <CardBody paddingBottom="0">
          <Image
            src="./assets/images/campusconnect.jpeg"
            alt="Club"
            borderRadius="lg"
          />

          <Heading size="md" paddingTop="10px">Campus Connect</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </CardBody>
        <Center>
          <CardFooter style={{margin:0}}>
            <Button variant="solid" colorScheme="blue">
              View Details
            </Button>
          </CardFooter>
        </Center>
      </Card>
    </Center>
  );
};

export default ClubCard;
