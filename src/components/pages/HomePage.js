import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { Box, Image, Text, Grid, Hide } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { s1, s3, s4 } from "../../static/img/slideshow/";
import { homeImg1, homeImg2 } from "../../static/img/homeImages/";
import { brick, garage, sink, phone } from "../../static/img/icons/";

const images = [s3, s4, s1];

const HomePage = () => {
  return (
    <Box position="relative" top="15">
      <Box position="relative" style={{ width: "100%", margin: "0 auto" }}>
        {/* Carousel */}
        <Carousel
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          transitionTime={1000}
          infiniteLoop
          autoPlay
          interval={3000}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
        {/* End Carousel */}

        {/* Quote in the Carousel */}
        <Box
          position="absolute"
          top="1rem"
          right="1rem"
          bg="rgba(0, 0, 0, 0.5)"
          p="1rem"
          borderRadius="md"
          fontSize={{ base: "sm", md: "lg", lg: "xl" }}
        >
          <Text
            color="white"
            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
            fontStyle="italic"
          >
            "High Quality Improvements With Partners You Can Trust"
          </Text>
        </Box>
      </Box>
      {/* End Quote */}

      {/* Basic Container */}
      <Box p={8} bg="gray.100">
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          p={8}
          bg="gray.100"
        >
          <Image
            src={homeImg1}
            alt="Image"
            mr={{ base: 0, md: 8 }}
            maxW={{ base: "100%", md: "500px" }}
            borderRadius="md"
          />
          <Box maxW="70%">
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              fontFamily="serif"
            >
              Minneapolis & St. Paul Home Remodeling
            </Text>
            <Hide below="md">
              <Text fontSize="xl">
                We offer you the flexibility of choosing what services you need.
                If you desire to complete the interior of your room addition or
                do certain parts of your remodeling project on your own, the
                choice is yours.
              </Text>
            </Hide>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          justifyContent="center"
          p={8}
          bg="gray.100"
        >
          <Box maxW="70%">
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              fontFamily="serif"
            >
              Professional Home Improvement Contractors
            </Text>
            <Hide below="md">
              <Text fontSize="xl">
                Whatever your home improvement project is, we can help. Whether
                it is replacing your windows, doors, siding or roof, or a large
                remodel and/or major expansion, Home Improvement Partners will
                help you choose the right products and complete your project in
                a timely and efficient manner, at a price you can afford.
              </Text>
            </Hide>
          </Box>
          <Image
            src={homeImg2}
            alt="Image"
            ml={{ base: 0, md: 4 }}
            maxW={{ base: "100%", md: "500px" }}
            borderRadius="md"
          />
        </Box>
      </Box>

      <Box p={8} bg="gray.100">
        <Text
          textAlign="center"
          fontWeight="bold"
          fontFamily="serif"
          fontSize="3xl"
        >
          Our Services
        </Text>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          mt={8}
        >
          {/* New Construction */}
          <Box textAlign="center">
            <Image h={12} w={12} src={brick} mx="auto" />
            <Text fontWeight="bold" mt={2}>
              New Construction
            </Text>
            <Text>Room Additions, Porches, and more...</Text>
          </Box>

          {/* Exterior Remodeling */}
          <Box textAlign="center">
            <Image src={garage} w={12} h={12} mx="auto" />
            <Text fontWeight="bold" mt={2}>
              Exterior Remodeling
            </Text>
            <Text>Siding, Roofing, Windows, and more...</Text>
          </Box>

          <Box textAlign="center">
            <Image src={sink} w={12} h={12} mx="auto" />
            <Text fontWeight="bold" mt={2}>
              Interior Remodeling
            </Text>
            <Text>Bathrooms, Kitchen, Flooring, and more...</Text>
          </Box>
          <Link to="tel:(651)-373-3522">
            <Box textAlign="center">
              <Image src={phone} w={12} h={12} mx="auto" />
              <Text fontWeight="bold" mt={2}>
                Give us a Call!
              </Text>
              <Text>
                We are fully qualified to tackle a wide range of construction
                and remodeling projects.
              </Text>
            </Box>
          </Link>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
