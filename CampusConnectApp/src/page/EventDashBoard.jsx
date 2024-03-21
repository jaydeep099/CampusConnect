import {
  Container,
  Card,
  Center,
  CardHeader,
  CardBody,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LoadEventById } from "../services/event-service";
import { useLocation } from "react-router-dom";

export const EventDashBoard = () => {
  // Dummy data for the event
  const [eventData, setEventData] = useState({});

  const location = useLocation();

  useEffect(() => {
    LoadEventById(location.state.event_Id)
      .then((response) => {
        setEventData(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function printDate(numbers) {
    return new Date(numbers).toLocaleDateString();
  }


  return (
    <Container>
      <Card size="lg">
        <Center>
          <CardHeader>
            <h2>{eventData.eventName}</h2>
            <Text>{eventData.club}</Text>
          </CardHeader>
        </Center>
        <CardBody>
          <Image
            src="./assets/images/campusconnect.jpeg"
            alt="Event Logo"
            boxSize="150px"
            borderRadius="10px"
            objectFit="cover"
          />
          <Text>Date: {printDate(eventData.eventDate)}</Text>
          <Text>Time: {eventData.eventTime}</Text>
          <Text>Venue: {eventData.eventVenue}</Text>
          <Text>Description: {eventData.description}</Text>
          <Button> Register</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default EventDashBoard;
