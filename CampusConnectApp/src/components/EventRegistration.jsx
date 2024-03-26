import React, { useState } from "react";
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
import { createEvent } from "../services/event-service";

const EventRegistration = () => {
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventVenue: "",
    description: "",
    brochure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(eventInfo, 1)
      .then((data) => {
        console.log(data);
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
          <FormControl>
            <FormLabel>Event Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter event name"
              name="eventName"
              value={eventInfo.eventName}
              onChange={handleChange} 
            />
          </FormControl>

          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="eventDate"
              value={eventInfo.eventDate}
              onChange={handleChange} 
            />
          </FormControl>

          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              name="eventTime"
              value={eventInfo.eventTime}
              onChange={handleChange} 
            />
          </FormControl>

          <FormControl>
            <FormLabel>Venue</FormLabel>
            <Input
              type="text"
              placeholder="Enter venue"
              name="eventVenue"
              value={eventInfo.eventVenue}
              onChange={handleChange} 
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter event description"
              name="description"
              value={eventInfo.description}
              onChange={handleChange} 
            />
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
