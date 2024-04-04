import { Box, Button, Card, Center, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteEventById, loadEventById } from "../services/event-service";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
import { getClubByClubEmail } from "../services/club-service";
import Base from "./Base";

const EventDashboard = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const printDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const [check, setCheck] = useState(false);
  const [isEventPast, setIsEventPast] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    loadEventById(eventId)
      .then((data) => {
        setEvent(data);
        console.log(data);
        if (user) {
          getClubByClubEmail(user.email, user.password)
            .then((response) => {
              console.log("navbar", response);
              if (response.clubId === data.club.clubId) {
                setCheck(true);
              }
            })
            .catch((error) => {
              console.log(error);
              return;
            });
        }
        const eventDate = new Date(data.eventDate);
        const currentDate = new Date();
        setIsEventPast(eventDate < currentDate);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading the event");
      });
  }, [eventId]);

  const handleDelete = () => {
    DeleteEventById(eventId)
      .then((response) => {
        toast.success("Post Deleted Successfully!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Base>
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
                src={BASE_URL + "/api/event/eventbroucher/" + event?.brochure}
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
              <Text>Club :{event?.club.clubName}</Text>

              {isEventPast ? (
                <b>You are past the Registration Date. Registration is closed.</b>
              ) : (
                <Link
                  mt="auto"
                  to={
                    localStorage.getItem("loggedInUser") === null
                      ? "/login"
                      : { pathname: event?.eventLink }
                  }
                  className="btn btn-primary"
                >
                  Register
                </Link>
              )}
              {check && (
                <Box mt={4}>
                  <Box display="inline-block" marginRight="2">
                    <Link
                      mt="auto"
                      className="btn btn-primary"
                      to={"/editEvent/" + eventId}
                    >
                      Update
                    </Link>
                  </Box>
                  <Box display="inline-block">
                    <Link
                      mt="auto"
                      className="btn btn-primary"
                      onClick={handleDelete}
                    >
                      Delete
                    </Link>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Card>
      </Box>
    </Base>
  );
};

export default EventDashboard;
