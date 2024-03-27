// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Heading,
//   Input,
//   Textarea,
//   Flex,
//   Button,
//   FormControl,
//   FormLabel,
//   Stack,
// } from "@chakra-ui/react";
// import { createEvent } from "../services/event-service";
// import { useLocation } from "react-router-dom";

// const EventRegistration = () => {
//   const [eventInfo, setEventInfo] = useState({
//     eventName: "",
//     eventDate: "",
//     eventTime: "",
//     eventVenue: "",
//     description: "",
//     brochure: "",
//   });

//   const location = useLocation();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEventInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(location.state.club_Id);
//     createEvent(eventInfo, location.state.club_Id)
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <Box
//       p={8}
//       borderWidth={1}
//       borderRadius={8}
//       boxShadow="lg"
//       maxW="600px"
//       mx="auto"
//     >
//       <Heading mb={4} textAlign="center">
//         Event Registration
//       </Heading>
//       <form onSubmit={handleSubmit}>
//         <Stack spacing={4}>
//           <FormControl>
//             <FormLabel>Event Name</FormLabel>
//             <Input
//               type="text"
//               placeholder="Enter event name"
//               name="eventName"
//               value={eventInfo.eventName}
//               onChange={handleChange}
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Date</FormLabel>
//             <Input
//               type="date"
//               name="eventDate"
//               value={eventInfo.eventDate}
//               onChange={handleChange}
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Time</FormLabel>
//             <Input
//               type="time"
//               name="eventTime"
//               value={eventInfo.eventTime}
//               onChange={handleChange}
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Venue</FormLabel>
//             <Input
//               type="text"
//               placeholder="Enter venue"
//               name="eventVenue"
//               value={eventInfo.eventVenue}
//               onChange={handleChange}
//             />
//           </FormControl>

//           <FormControl>
//             <FormLabel>Description</FormLabel>
//             <Textarea
//               placeholder="Enter event description"
//               name="description"
//               value={eventInfo.description}
//               onChange={handleChange}
//             />
//           </FormControl>

//           <Flex justify="flex-end">
//             <Button type="submit" colorScheme="teal">
//               Register Event
//             </Button>
//           </Flex>
//         </Stack>
//       </form>
//     </Box>
//   );
// };

// export default EventRegistration;

/* eslint-disable no-unused-vars */
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
import { createEvent } from "../services/event-service";
import { useLocation } from "react-router-dom";

const EventRegistration = () => {
  const [eventInfo, setEventInfo] = useState({});

  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(location.state.club_Id);
  //   createEvent(eventInfo, location.state.club_Id)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eventInfo.eventTime = formatTimeForBackend(eventInfo.eventTime)
    console.log(eventInfo);
    createEvent(eventInfo, location.state.club_Id)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const formatTimeForBackend = (timeString) => {
  //   // Assuming timeString is in the format HH:mm:ss
  //   const [hours, minutes, seconds] = timeString.split(':');
  //   return `${hours}:${minutes}`; // Keep only hours and minutes
  // };

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
