import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import {
  Box,
  Heading,
  Center,
  Image,
  Flex,
  Card,
  CardBody,
  Text,
  Button,
  Spacer,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { LoadAllClubs } from "../services/club-service";
import ClubCard from "../components/ClubCard";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";

const Club = () => {
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  const [usedeffect, SetUsedEffect] = useState(false);
  useEffect(() => {
    LoadAllClubs()
      .then((response) => {
        // console.log(response);
        setClubs([...response]);
        //ahiya club ma detail aave che k nai?? prove
      })
      .catch((error) => {
        console.error("Error loading events:", error);
      });
  }, []);

  const handleClearFilter = () => {};

  const handleClick = (club_id) => {
      // e.preventDefault();

      navigate("/clubDetail",{state:({clubId:club_id})})
  }

  return (
    <Base>
      <Flex direction="row" maxW="100%">
        <Flex direction="row" flex="1" p="4">
          {/* {usedeffect && <ClubCard club={clubs}/> } */}
          {/* {Club}
             {clubs && <ClubCard clubs
             
             
             ={clubs}/>} */}
          {clubs.map((club) => (
            // <ClubCard club={club}/>
            // <Card key={club.club_id} maxW="sm" mb="4">
            //   <Box
            //     maxW="md"
            //     borderWidth="1px"
            //     borderRadius="lg"
            //     overflow="hidden"
            //   >
            //     <Flex direction="row" p="3">
            //       <Image
            //         src="./assets/images/campusconnect.jpeg"
            //         alt="Event Logo"
            //         boxSize="150px"
            //         borderRadius="10px"
            //         objectFit="cover"
            //       />
            //       <Flex direction="column" flex="1" ml="2">
            //         <Text fontSize="xl" fontWeight="semibold">
            //           {club.club_name}
            //         </Text>
            //       </Flex>
            //     </Flex>
            //     <Center>
            //       <Button mt="auto" colorScheme="blue">
            //         View Details
            //       </Button>
            //     </Center>
            //   </Box>
            // </Card>
            <Card maxW="sm">
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
                <Button variant="solid" colorScheme="blue" onClick={() => handleClick(club.club_id)}>
                  View Details
                </Button>
              </Center>
            </Card>
          ))}
        </Flex>
      </Flex>
    </Base>
  );
};

export default Club;
