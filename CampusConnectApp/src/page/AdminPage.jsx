/* eslint-disable no-unused-vars */
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
  Textarea,
} from "@chakra-ui/react";
import {
  ChangeClubStatus,
  LoadPendingClubs,
  SendMail,
} from "../services/admin-service";
import { BASE_URL } from "../services/helper";

export const AdminPage = () => {
  const [clubs, setClubs] = useState([]);
  const [mailData, setMailData] = useState({
    subject: "about your Club request.",
    message: "",
  });

  const [reject, setReject] = useState("");

  useEffect(() => {
    LoadPendingClubs()
      .then((response) => {
        console.log(response);
        setClubs([...response]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAccept = (Email,clubName) => {
    console.log(Email);
    ChangeClubStatus(Email, "accepted").then(() => {
      console.log("accepted!!");

      LoadPendingClubs()
        .then((response) => {
          setClubs([...response]);
        })
        .catch((error) => {
          console.log(error);
        });

      mailData.message =
        "Your club " +
        clubName +
        " is registered in CampusConnect.\nNow you can add event.";
      SendMail(Email, mailData)
        .then(() => {
          console.log("mail send");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleReject = (Email, clubName) => {
    // setReject(clubName);
    console.log(mailData);

    ChangeClubStatus(Email, "rejected")
      .then(() => {
        console.log("rejectd!!");
        LoadPendingClubs()
          .then((response) => {
            setClubs([...response]);
          })
          .catch((error) => {
            console.log(error);
          });
        // mailData.message = "Sorry your club " + clubName + " is not valid";
        SendMail(Email, mailData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = (clubName) => {
    setReject(clubName);
  }

  const handleChange = (event) => {
    setMailData({ ...mailData, [event.target.name]: event.target.value });
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
                  alt="Logo"
                  objectFit="cover"
                  borderRadius="lg"
                />

                <Heading size="md" paddingTop="10px">
                  {club.clubName}
                </Heading>
                <Text>{club.description}</Text>
              </CardBody>
              <Center>
                <CardFooter style={{ margin: 0 }}>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      handleAccept(club.clubEmail,club.clubName);
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleClick(club.clubName)}
                  >
                    Reject
                  </Button>
                  {}
                </CardFooter>
              </Center>
              {reject === club.clubName && (
                <>
                  <Textarea
                    value={mailData.message}
                    name="message"
                    onChange={handleChange}
                  />
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleReject(club.clubEmail, club.clubName)}
                  >
                    Submit FeedBack
                  </Button>
                </>
              )}
            </Card>
          </>
        ))}
    </div>
  );
};
