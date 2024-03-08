import { Box, Text, useColorModeValue } from "@chakra-ui/react";
const InfoCard = () => {
  return (
    
      <Box
        w="xs"
        rounded={"sm"}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
        display="flex"
      >
        <Text color={"gray.500"} textAlign={"center"}>
          Embark on an unforgettable journey of discovery, creativity, and
          connection as we invite you to join the vibrant tapestry of our
          university events!🚀✨    
          Immerse yourself in a world of limitless
          possibilities. Our events are designed to ignite your curiosity, fuel
          your ambitions, and unveil the extraordinary within you.
        </Text>
      </Box>
  );
};

export default InfoCard;
