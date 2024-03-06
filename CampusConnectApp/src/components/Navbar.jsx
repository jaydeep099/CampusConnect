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
  MenuItem,
  Avatar,
  MenuDivider,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { NavLink as ReactLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box as="nav" bg="gray.100" px={4} py={2} shadow="md">
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
          <Link
            _hover={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            as={ReactLink}
            to="/"
            fontWeight="semibold"
            mr={100}
          >
            Home
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            as={ReactLink}
            to="/events"
            fontWeight="semibold"
            mr={100}
          >
            Events
          </Link>

          <Link
            _hover={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            as={ReactLink}
            to="/clubs"
            fontWeight="semibold"
            mr={100}
          >
            Clubs
          </Link>

          <Link
            _hover={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
            as={ReactLink}
            to="/contactus"
            fontWeight="semibold"
            mr={100}
          >
            Contact Us
          </Link>
          <Flex ml="auto" flexGrow={1} mr={100}>
            <InputGroup w="auto">
              <Input placeholder="Search..." />
              <InputRightElement>
                <IconButton aria-label="Search" icon={<FaSearch />} />
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Box>
        <Box ml={4}>
          <Menu>
            <MenuButton as={Avatar} size="md" />
            <MenuList>
              <MenuItem>Login</MenuItem>
              <MenuDivider />
              <MenuItem>Signup</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
