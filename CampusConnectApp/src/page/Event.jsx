import { useEffect, useState } from "react";
import Base from "../components/Base";
import {
  Box,
  Center,
  Image,
  Flex,
  Card,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  EventsBWDate,
  LoadAllEvents,
  UpcomingEvents,
} from "../services/event-service";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [events, setEvents] = useState([]);
  const [isUpcomingEvent, setIsUpcomingEvent] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsUpcomingEvent(event.target.checked);

    if (!isUpcomingEvent) {
      console.log("handleCheckboxChange");
      UpcomingEvents()
        .then((response) => {
          console.log("then ----", response);
          setEvents([...response]);
        })
        .catch((error) => {
          console.log("Error loading events:", error);
        });
    } else {
      handleClearFilter();
    }
  };

  useEffect(() => {
    LoadAllEvents()
      .then((response) => {
        setEvents([...response]);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  }, []);

  const printDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const handleDateFilter = () => {
    EventsBWDate(fromDate, toDate)
      .then((response) => {
        setEvents([...response]);
      })
      .catch((error) => {
        console.log("Error loading events bw date", error);
      });
  };

  const handleClearFilter = () => {
    setFromDate("");
    setToDate("");
    setIsUpcomingEvent(false);
    LoadAllEvents()
      .then((response) => {
        setEvents([...response]);
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  };

  const handleClick = (eventId) => {
    navigate("/eventDashBoard",{state:({event_Id:eventId})})
  }

  return (
    <Base>
      <Flex direction="row" maxW="100%">
        <Box w="200px" p="4" bg="gray.200">
          <Text>Filter Options</Text>
          <Checkbox checked={isUpcomingEvent} onChange={handleCheckboxChange}>
            Upcoming Event
          </Checkbox>
          <Input
            id="fromDate"
            type="date"
            placeholder="Start Date"
            value={fromDate}
            mt="2"
            onChange={(e) => setFromDate(e.target.value)}
          />
          <Input
            id="toDate"
            type="date"
            placeholder="End Date"
            value={toDate}
            mt="2"
            onChange={(e) => setToDate(e.target.value)}
          />
          <Button
            mt="2"
            _hover={{ bg: "blue.500", color: "white" }}
            onClick={handleDateFilter}
          >
            Apply
          </Button>
          <Button
            mt="2"
            _hover={{ bg: "blue.500", color: "white" }}
            onClick={handleClearFilter}
          >
            Clear Filters
          </Button>
        </Box>

        <Flex direction="column" flex="1" p="4">
          {events.map((event) => (
            <Card key={event.eventId} maxW="sm" mb="4">
              <Box
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Flex direction="row" p="3">
                  <Image
                    src="./assets/images/campusconnect.jpeg"
                    alt="Event Logo"
                    boxSize="100px"
                    borderRadius="10px"
                    objectFit="cover"
                  />
                  <Flex direction="column" flex="1" ml="2">
                    <Text fontSize="xl" fontWeight="semibold">
                      {event.eventName}
                    </Text>
                    <Text fontSize="md" mt="2">
                      Date: {printDate(event.eventDate)}
                    </Text>
                  </Flex>
                </Flex>
                <Center>
                  <Button mt="auto" colorScheme="blue" onClick={() => handleClick(event.eventId)}>
                    View Details
                  </Button>
                </Center>
              </Box>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Base>
  );
};

export default Event;
