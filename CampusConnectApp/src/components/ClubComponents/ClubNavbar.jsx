import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { NavLink as ReactLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ClubNavbar = () => {
  const [isLargerThan1023] = useMediaQuery("(min-width: 1024px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Box
      as="nav"
      bg="gray.100"
      px={4}
      py={2}
      shadow="md"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Flex justifyContent="flex-start" alignItems="center">
        <Box display="flex" alignItems="center" mr={2}>
          <Image
            borderRadius="full"
            boxSize="55px"
            src="./assets/images/campusconnectlogo.jpeg"
            alt="CampusConnect"
            mr={2}
          />
          <Link
            _hover={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="xl"
            fontWeight="extrabold"
          >
            Campus Connect
          </Link>
        </Box>
        <Box display="flex" alignItems="center" mr={2}>
          {isLargerThan1023 ? (
            <Box display="flex" alignItems="center" mr={2}>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                fontWeight="semibold"
                ml={50}
              >
                Events
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                fontWeight="semibold"
                ml={50}
              >
                Add Event
              </Link>

              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                fontWeight="semibold"
                ml={50}
              >
                Club Name
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                fontWeight="semibold"
                ml={50}
              >
                Logout
              </Link>
            </Box>
          ) : (
            <Box display="flex" alignItems="center" mr={2}>
              <IconButton
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                onClick={handleToggle}
              />
              <Drawer placement="right" onClose={handleToggle} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody>
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      fontWeight="semibold"
                    >
                      Events
                    </Link>
                    <br />
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      fontWeight="semibold"
                    >
                      Add Event
                    </Link>
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      fontWeight="semibold"
                    >
                      Club name
                    </Link>
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      fontWeight="semibold"
                    >
                      Logout
                    </Link>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default ClubNavbar;
