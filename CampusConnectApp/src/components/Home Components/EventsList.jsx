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
import { Link } from "react-router-dom";

const EventsList = () => {
  const [events, setEvents] = useState(null);
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

      {events &&
        events.map((event) => (
          <SimpleGrid
            spacing={30}
            templateRows="repeat(auto-fill)"
            m={4}
            key={event.eventId}
          >
            <Card borderRadius={0}>
              <CardBody>
                <Heading size="md">{event.eventName}</Heading>
                <Text>
                  Date: {printDate(event.eventDate)} Time: {event.eventTime}
                  Venue: {event.eventVenue}
                </Text>
                <Text>{event.description}</Text>
                <Link
                  mt="auto"
                  to={"/eventdetails/" + event.eventId}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </CardBody>
            </Card>
          </SimpleGrid>
        ))}
    </>
  );
};

export default EventsList;
