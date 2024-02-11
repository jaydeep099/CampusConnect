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
  Select,
} from "@chakra-ui/react";

const EventRegistration = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [speaker, setSpeaker] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Event Name:", eventName);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Venue:", venue);
    console.log("Description:", description);
    console.log("Speaker:", speaker);
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
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Venue</FormLabel>
            <Input
              type="text"
              placeholder="Enter venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Speaker</FormLabel>
            <Input
              type="text"
              placeholder="Enter speaker's name"
              value={speaker}
              onChange={(e) => setSpeaker(e.target.value)}
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
