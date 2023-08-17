import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Image, Text, Select, Hide } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { s1, s3, s4 } from "../../static/img/slideshow/";
import { homeImg1, homeImg2 } from "../../static/img/homeImages/";

const images = [s3, s4, s1];

const HomePage = () => {
  return (
    <Box position="relative" top="15">
      <Box position="relative" style={{ width: "90%", margin: "0 auto" }}>
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

        {/* Text and Image Box */}
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

      {/* Basic Container */}
      <Box p={8} bg="gray.100">
        {/* Container with Image and Text */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={8}
          bg="gray.100"
        >
          <Image src={homeImg1} alt="Image" mr={8} maxW="500px" />
          <Box>
            <Text fontSize="3xl" fontWeight="bold" fontFamily='serif'>
              Minneapolis & St. Paul Home Remodeling
            </Text>
            <Hide below='md'>
              <Text fontSize="xl">
                We offer you the flexibility of choosing what services you need.
                If you desire to complete the interior of your room addition or
                do certain parts of your remodeling project on your own, the
                choice is yours.
              </Text>
            </Hide>
          </Box>
        </Box>

        {/* Container with Text and Image */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={8}
          bg="gray.200"
        >
          <Text fontSize="xl">Some Text</Text>
          <Image src={homeImg2} alt="Image" ml={4} maxW="100px" />
        </Box>

        {/* Container with Drop-downs */}
        <Box p={8} bg="gray.300">
          <Select placeholder="Select Option 1">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Select>
          <Select placeholder="Select Option 2" mt={4}>
            <option>Option A</option>
            <option>Option B</option>
            <option>Option C</option>
          </Select>
          <Select placeholder="Select Option 3" mt={4}>
            <option>Choice X</option>
            <option>Choice Y</option>
            <option>Choice Z</option>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
