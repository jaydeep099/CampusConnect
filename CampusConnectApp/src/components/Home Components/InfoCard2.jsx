import { Box, Text, useColorModeValue } from "@chakra-ui/react";
const InfoCard2 = () => {
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
      style={{
        position: "absolute",
        top: "390px",
        left: "1100px",
      }}
    >
      <Text color={"gray.500"} textAlign={"center"}>
        Witness inspirational stories 💡, gain insights from experts, and
        immerse yourself in an atmosphere that nurtures growth and learning. Let
        the events be a source of motivation that propels you towards your
        dreams.🌍✨ Participate, engage, and redefine your university experience
        with events that spark innovation and leave an indelible mark on your
        journey! 🎓🎉
      </Text>
    </Box>
  );
};

export default InfoCard2;
