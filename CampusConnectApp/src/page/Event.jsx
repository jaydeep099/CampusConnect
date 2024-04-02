/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
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
  SimpleGrid,
} from "@chakra-ui/react";
import {
  EventsBWDate,
  LoadAllEvents,
  SearchPost,
  UpcomingEvents,
} from "../services/event-service";
import { Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import "./search.css";

const Event = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [events, setEvents] = useState([]);
  const [isUpcomingEvent, setIsUpcomingEvent] = useState(false);

  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

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
    navigate("/eventDashBoard", { state: { event_Id: eventId } });
  };

  const search = () => {
    console.log(query);
    SearchPost(query)
      .then((response) => {
        console.log(response);

        let text = `<div class='list-group'>`;

        response.forEach((event) => {
          text += `<a href='/eventdetails/${event.eventId}' class='list-group-item list-group-action'>${event.eventName}</a>`;
        });

        text += "</div>";

        setSearchResult(text);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Base>
      <div class="search-container">
        <Input
          onKeyUp={search}
          id="search-input"
          value={query}
          class="form-"
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <div
            class="search-result"
            dangerouslySetInnerHTML={{ __html: searchResult }}
          >
            {/* Content of search results */}
            {/* {searchResult} */}
          </div>
        )}
      </div>
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
            <Box
              key={event.eventId}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <EventCard event={event} />
              {/* {/* <Card key={event.eventId} mb="4">
                <Flex direction="row" p="3">
                  <Image
                    src={
                      BASE_URL + "/api/event/eventbroucher/" + event?.brochure
                    }
                    alt="Event Brochure"
                    objectFit="cover"
                    boxSize="200px"
                    borderRadius="10px"
                  />

                  <Flex direction="column" flex="1" ml="2">
                    <Text fontSize="xl" fontWeight="semibold">
                      {event.eventName}
                    </Text>
                    <Text fontSize="md">
                      Date: {printDate(event.eventDate)}
                    </Text>
                    <Text fontSize="md">Time: {event.eventTime}</Text>
                    <Text fontSize="md">Venue: {event.eventVenue}</Text>
                  </Flex>
                </Flex>
                <Box> 
                  <Center>
                  <Link
                    mt="auto"
                    to={"/eventdetails/" + event.eventId}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </Center>
                </Box>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Base>
  );
}; */}

export default Event;
