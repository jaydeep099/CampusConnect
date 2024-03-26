/* eslint-disable react/jsx-key */
import {
  SimpleGrid,
  Card,
  CardBody,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UpcomingEvents } from "../../services/event-service";
import { useNavigate } from "react-router-dom";

const EventsList = () => {
<<<<<<< HEAD
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  // UpcomingEvents()
  //   .then((response) => {
  //     setEvents([...response]);
  //   })
  //   .catch((error) => {
  //     console.log("Error loading events: ", error);
  //   });
=======
  const [events, setEvents] = useState(null);
>>>>>>> 951ef7f80392c35933190d6f6608465342c7c7de
  useEffect(() => {
    UpcomingEvents()
      .then((response) => {
        console.log(response);
        setEvents([...response]);
      })
      .catch((error) => {
        console.log("Error loading events: ", error);
      });
  }, []);


  const handleClick = (eventId) => {
    navigate("/eventDashBoard",{state:({event_Id:eventId})})
  }

  const printDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  return (
    <>
      <Heading ml={4}>Upcoming Events</Heading>
      <hr />

      {events && events.map((event) => (
        <SimpleGrid spacing={30} templateRows="repeat(auto-fill)" m={4} key={event.eventId}>
            <Card  borderRadius={0}>
              <CardBody>
                <Heading size="md">{event.eventName}</Heading>
                <Text>
                  Date: {printDate(event.eventDate)} Time: {event.eventTime} Venue:{" "}
                  {event.eventVenue}
                </Text>
                <Text>{event.description}</Text>
                <Button variant="solid" colorScheme="blue" onClick={() => handleClick(event.eventId)}>
                  View More
                </Button>
              </CardBody>
            </Card>
        </SimpleGrid>
      ))}
    </>
  );
};

export default EventsList;
