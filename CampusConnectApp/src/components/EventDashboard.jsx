import { Box, Card, Center, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { loadEventById } from "../services/event-service";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";

const EventDashboard = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const printDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  useEffect(() => {
    if (eventId) {
      loadEventById(eventId)
        .then((data) => {
          console.log(data);
          setEvent(data);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error in loading the event");
        });
    }
  }, [eventId]);

  return (
    <Box
      m={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="0px"
    >
      <Card
        width="100%"
        height="100hv"
        boxShadow="md"
        flexDirection="column"
        borderRadius="0px"
      >
        <Center>
          <h2>Event Details</h2>
        </Center>
        <Box flex="1" display="flex">
          <Box flex="2" padding="4">
            <Image
              src={BASE_URL+"/api/event/eventbroucher/"+event?.brochure}
              alt="Event Brochure"
              objectFit="cover"
            />
          </Box>
          <Box flex="3" padding="4">
            <Text>Name :{event?.eventName}</Text>
            <Text>Date :{printDate(event?.eventDate)}</Text>
            <Text>Time :{event?.eventTime}</Text>
            <Text>Venue :{event?.eventVenue}</Text>
            <Text>Description :{event?.description}</Text>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default EventDashboard;
