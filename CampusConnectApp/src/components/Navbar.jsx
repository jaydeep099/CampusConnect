import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuDivider,
  Image,
  Link,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { useState} from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink as ReactLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isLargerThan1117] = useMediaQuery("(min-width: 1117px)");
  const [isOpen, setIsOpen] = useState(false);
 

  const handleToggle = () => setIsOpen(!isOpen);

 

  return (
    <Box as="nav" bg="gray.100" px={4} py={2} shadow="md" alignItems="center">
      <Flex justifyContent="space-between" alignItems="center">
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
            as={ReactLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
          >
            Campus Connect
          </Link>
        </Box>
        <Box display="flex" alignItems="center" mr={2}>
          {isLargerThan1117 ? (
            <Box display="flex" alignItems="center" mr={2}>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                as={ReactLink}
                to="/"
                fontWeight="semibold"
                mr={50}
              >
                Home
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                as={ReactLink}
                to="/events"
                fontWeight="semibold"
                mr={50}
              >
                Events
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                as={ReactLink}
                to="/clubs"
                fontWeight="semibold"
                mr={50}
              >
                Clubs
              </Link>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                as={ReactLink}
                to="/contactus"
                fontWeight="semibold"
                mr={50}
              >
                Contact Us
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
                      as={ReactLink}
                      to="/"
                      fontWeight="semibold"
                    >
                      Home
                    </Link>
                    <br />
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      as={ReactLink}
                      to="/events"
                      fontWeight="semibold"
                    >
                      Events
                    </Link>
                    <br />
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      as={ReactLink}
                      to="/clubs"
                      fontWeight="semibold"
                    >
                      Clubs
                    </Link>
                    <br />
                    <Link
                      _hover={{ textDecoration: "none" }}
                      style={{ textDecoration: "none" }}
                      as={ReactLink}
                      to="/contactus"
                      fontWeight="semibold"
                    >
                      Contact Us
                    </Link>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
          )}

          <Flex ml="auto" flexGrow={1} mr={100}>
            <InputGroup w="auto">
              <Input placeholder="Search..." />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<FaSearch />}
                />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Box>
        <Box ml={4}>
          <Menu>
            <MenuButton as={Avatar} size="md" />
            <MenuList>
              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                as={ReactLink}
                to="/login"
                ml={2}
              >
                Login
              </Link>
              <MenuDivider />

              <Link
                _hover={{ textDecoration: "none" }}
                style={{ textDecoration: "none" }}
                as={ReactLink}
                to="/signup"
                ml={2}
              >
                SignUp
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
