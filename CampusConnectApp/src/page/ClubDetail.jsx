import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { Box, Center, Image, Flex, Card, Text, Button } from "@chakra-ui/react";
import { LoadClubById } from "../services/club-service";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../services/helper";
import { CheckClubStatus } from "../services/admin-service";

const ClubDetails = () => {
  const location = useLocation();
  const [club, setClub] = useState({});
  const { clubId } = useParams();
  const navigate = useNavigate();
  const [check, setCheck] = useState(true);

  useEffect(() => {
    console.log(clubId);
    LoadClubById(clubId)
      .then((response) => {
        CheckClubStatus(response.clubEmail).then((res) => {
          console.log("checkCLubStatus", res);
          if (res === "pending") {
            setCheck(false);
            localStorage.removeItem("loggedInUser");
          }
        });
        console.log("then ", response);
        setClub(response);
      })
      .catch((error) => {
        console.log("jj", error);
      });
  }, [clubId]);

  function printDate(date) {
    return new Date(date).toLocaleDateString();
  }

  const handleClick = (eventId) => {
    navigate("/eventdetails", { state: { event_Id: eventId } });
  };

  const handleCreate = (clubId) => {
    navigate("/eventRegistry/" + clubId);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <Base>
      {check ? (
        <div>
          <Center as="h1" size="xl" mb={4}>
            {club.clubName}
          </Center>
          <Box ml="25%">
            <Box p={4} textAlign="center">
              <Flex>
                <Box maxW="200px" overflow="hidden" mr={4}>
                  <Image
                     src={BASE_URL+"/api/club/logo/"+club?.logo}
                     alt="Logo"
                     objectFit="cover"
                     borderRadius="lg"
                  />
                </Box>
                <Box as="h3" ml="50px" mt="20px">
                  {club.description}
                </Box>
              </Flex>
            </Box>
            {localStorage.getItem("loggedInUser") &&
              JSON.parse(localStorage.getItem("loggedInUser")).email ===
                club.clubEmail && (
                <>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleCreate(club.clubId)}
                  >
                    Create New Event
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    maxW={"10%"}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
            <Flex direction="row" justifyContent="space-between" maxW="100%">
              {club.eventList &&
                club.eventList.map((event) => (
                  <Card key={event.eventId} maxW="sm">
                    <Box
                      maxW="sm"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                    >
                      <Flex direction="row" p="3">
                        <Image
                          src="../assets/images/campusconnect.jpeg"
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
                          to={"/eventdetails/" + event.eventId}
                          className="btn btn-primary"
                        >
                          View Details
                        </Link>
                      </Center>
                    </Box>
                  </Card>
                ))}
            </Flex>
          </Box>
        </div>
      ) : (
        <h2>
          Your request is sent successfully
          <br />
          Wait for a reply
        </h2>
      )}
    </Base>
  );
};

export default ClubDetails;
