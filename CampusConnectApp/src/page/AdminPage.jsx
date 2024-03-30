import React, { useEffect, useState } from "react";
import { ChangeClubStatus, LoadAllClubs, LoadPendingClubs } from "../services/club-service";
import { Button, Card, CardBody, CardFooter, Center, Heading, Image, Text } from "@chakra-ui/react";

export const AdminPage = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("log"));
    LoadPendingClubs()
      .then((response) => {
        setClubs([...response]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAccept = (Email) => {
    console.log(Email);
    ChangeClubStatus(Email).then(() => {
      console.log("accepted!!");
    });
  };

  return (
    <div>
      <h2>pending requests</h2>
      {clubs &&
        clubs.map((club) => (
          <>
            <Card maxW="sm" margin={5} >
              <CardBody paddingBottom="0">
                <Image
                  src="./assets/images/campusconnect.jpeg"
                  alt="Club"
                  borderRadius="lg"
                />

                <Heading size="md" paddingTop="10px">
                  {club.club_name}
                </Heading>
                <Text>{club.description}</Text>
              </CardBody>
              <Center>
                <CardFooter style={{ margin: 0 }}>
                  <Button variant="solid" colorScheme="blue" onClick={() => {handleAccept(club.clubEmail)}}>
                    Accept
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    Reject
                  </Button>
                </CardFooter>
              </Center>
            </Card>
          </>
        ))}
    </div>
  );
};
