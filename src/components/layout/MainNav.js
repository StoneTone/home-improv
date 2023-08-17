import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MainNav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav" bg="gray.800" color="white" py={2}>
      <Flex
        justify="center"
        display={{ base: "none", md: "flex" }}
        align="center"
        paddingX={{ base: 4, md: 10 }}
      >
        <Spacer />
        <Link to="/" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Home
          </Text>
        </Link>
        <Spacer />
        <Link to="/additions" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Additions
          </Text>
        </Link>
        <Spacer />
        <Link to="/remodeling" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Remodeling
          </Text>
        </Link>
        <Spacer />
        <Link to="/garages" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Garages
          </Text>
        </Link>
        <Spacer />
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Gallery
          </Text>
        </Link>
        <Spacer />
        <Link to="/testimonials" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Testimonials
          </Text>
        </Link>
        <Spacer />
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Text fontSize="lg" fontWeight="bold" ml={4}>
            Contact Us
          </Text>
        </Link>
        <Spacer />
      </Flex>
      <IconButton
        aria-label="Toggle menu"
        icon={<HamburgerIcon />}
        onClick={onToggle}
        display={{ base: "flex", md: "none" }}
        justifyContent="center"
        position="absolute"
        top="10px"
        right="20px"
        bg='rgba(0, 0, 0, 0.2)'
        zIndex={10000}
        _active={{bg:'rgba(0, 0, 0, 0.2)'}}
        _hover={{bg:'rgba(0, 0, 0, 0.2)'}}
      />
      {isOpen && (
        <Box
          position="absolute"
          top="50px"
          right="20px"
          bg="gray.800"
          p="1rem"
          borderRadius="md"
          boxShadow="lg"
          display={{ base: "block", md: "none" }}
          zIndex={10000}
        >
          <Link to="/" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Home
            </Text>
          </Link>
          <Link to="/additions" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Additions
            </Text>
          </Link>
          <Link to="/remodeling" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Remodeling
            </Text>
          </Link>
          <Link to="/garages" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Garages
            </Text>
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Gallery
            </Text>
          </Link>
          <Link to="/testimonials" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Testimonials
            </Text>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", display: "block" }}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Contact Us
            </Text>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default MainNav;
