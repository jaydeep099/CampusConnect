import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import {
  ChangeClubStatus,
  LoadPendingClubs,
} from "../services/admin-service";

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
    ChangeClubStatus(Email,"accepted")
      .then(() => {
        console.log("accepted!!");
        LoadPendingClubs()
      .then((response) => {
        setClubs([...response]);
      })
      .catch((error) => {
        console.log(error);
      });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (Email) => {
    ChangeClubStatus(Email,"rejected")
      .then(() => {
        console.log("rejectd!!");
        LoadPendingClubs()
      .then((response) => {
        setClubs([...response]);
      })
      .catch((error) => {
        console.log(error);
      });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>pending requests</h2>
      {clubs &&
        clubs.map((club) => (
          <>
            <Card maxW="sm" margin={5}>
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
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      handleAccept(club.clubEmail);
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleReject(club.clubEmail)}
                  >
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
