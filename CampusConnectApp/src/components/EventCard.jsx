/* eslint-disable no-unused-vars */
import { Card, Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const EventCard = (prop) => {

  const event = prop.event;

  const printDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  useEffect(() => {
    console.log("useEffect",event);
  },[]);

  return (
    <div>
      {event && (
        <Card mb="4">
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
            <Link
              mt="auto"
              colorScheme="blue"
              to={"/eventdetails/" + event.eventId}
              className="btn btn-primary"
            >
              View Details
            </Link>
          </Center>
        </Card>
      )}
    </div>
  );
};
