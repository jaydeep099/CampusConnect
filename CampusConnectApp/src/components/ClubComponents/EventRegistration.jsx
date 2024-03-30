import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import {
  LoadAllEvents,
  createEvent,
  uploadImage,
} from "../../services/event-service";
import { useLocation } from "react-router-dom";

const EventRegistration = () => {
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    description: "",
  });

  const [image, setImage] = useState({
    brochure: "",
  });

  let [eventId, setEventId] = useState();
  useEffect(() => {
    LoadAllEvents().then((data) => {
      const highestEventId = data.reduce(
        (maxId, event) => Math.max(maxId, event.eventId),
        0
      );
      eventId = highestEventId + 1;
    });
  });
  const location = useLocation();

  const handleChange = (e) => {
    setEventInfo(() => ({
      ...eventInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    setImage((prevImage) => ({
      ...prevImage,
      brochure: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eventInfo);
    createEvent(eventInfo, /*location.state.clubId*/ 1)
      .then((data) => {
        uploadImage(image, eventId)
          .then((data) => {
            console.log("Brochure is uploaded");
          })
          .catch((error) => {
            console.log("Reupload and make sure it's size is less than 20MB");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      maxW="600px"
      mx="auto"
    >
      <Heading mb={4} textAlign="center">
        Event Registration
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Event Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter event name"
              name="eventName"
              value={eventInfo.eventName}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="eventDate"
              value={eventInfo.eventDate}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              name="eventTime"
              value={eventInfo.eventTime}
              onChange={handleChange}
              step="1"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Venue</FormLabel>
            <Input
              type="text"
              placeholder="Enter venue"
              name="eventVenue"
              value={eventInfo.eventVenue}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter event description"
              name="description"
              value={eventInfo.description}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Event Brochure</FormLabel>
            <Input type="file" name="brochure" onChange={handleImageChange} />
          </FormControl>
          <Flex justify="flex-end">
            <Button type="submit" colorScheme="teal">
              Register Event
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

export default EventRegistration;
