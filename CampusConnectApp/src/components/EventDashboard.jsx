/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  Center,
  Image,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteEventById, loadEventById } from "../services/event-service";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
import { getClubByClubEmail } from "../services/club-service";
import Navbar from "./Navbar";

const EventDashboard = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const printDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const [check, setCheck] = useState(false);

  useEffect(() => {
    // console.log(eventId);
    // if (eventId !== undefined) {
    // console.log("inIf");
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    
    loadEventById(eventId)
    .then((data) => {
      // console.log(data);
      // if(data.club.clubId === )
      setEvent(data);
      console.log(data);
      if (user) {
        getClubByClubEmail(user.email, user.password)
          .then((response) => {
            console.log("navbar", response);
            if (response.clubId === data.club.clubId) {
              setCheck(true);
            }
            // studetn_Id = response.studentId;
          })
          .catch((error) => {
            console.log(error);
            return;
          });
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error in loading the event");
    });
    // }
    // console.log("clubclucb",event.club.clubId);
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
    <>
      <Box mt={4}>
        <Breadcrumb fontWeight="medium" fontSize="sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/events">Events</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{event?.eventName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
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
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default EventDashboard;
