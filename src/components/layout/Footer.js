import React from "react";
import { Box, Flex, Image, Text, Link, Icon } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import {
  ad1,
  ad2,
  ad3,
  ad4,
  ad5,
  ad6,
  ad7,
  ad8,
  ad9,
  ad10,
} from "../../static/img/ads/";

const Footer = () => {
  const images = [ad1, ad2, ad3, ad4, ad5, ad6, ad7, ad8, ad9, ad10];

  return (
    <Box bg="gray.800" color="white" py={8}>
      <Flex direction="column" align="center">
        {/* Image fade-in section */}
        <Box width="100%" overflow="hidden" bg="white">
          {" "}
          {/* Wrap the images in a container */}
          <Flex direction="row" align="center" justify="center">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                height="80px"
                mx={2} // Add spacing between images
              />
            ))}
          </Flex>
        </Box>
        {/* Copyright and license information */}
        <Box mt={1} textAlign="center">
          <Text>
            Copyright ©2023 - Home Improvement Partners, Inc. - All Rights
            Reserved
          </Text>
          <Text>General Contractor's License #BC636952</Text>
          <Box mt={1} textAlign="center" p='4'>
            <Flex direction="column" align="center" justify="center">
              <Text fontSize="2xs" fontWeight="bold">
                Providing home remodeling services throughout the following
                areas:
              </Text>
              <Text fontSize="2xs" width="400px">
                Anoka, Apple Valley, Andover, Blaine, Bloomington, Brooklyn
                Center, Brooklyn Park, Burnsville, Champlin, Chanhassen,
                Columbia Heights, Coon Rapids, Cottage Grove, Crystal, Eagan,
                Eden Prairie, Edina, Excelsior, Falcon Heights, Farmington,
                Forest Lake, Fridley, Golden Valley, Hastings, Hopkins, Inver
                Grove Heights, Lake Elmo, Lakeville, Lino Lakes, Little Canada,
                Long Lake, Mahtomedi, Maple Grove, Maplewood, Mendota Heights,
                Minneapolis, Minnetonka, Mounds View, New Hope, North St. Paul,
                Oakdale, Plymouth, Prior Lake, Richfield, Robbinsdale, Rogers,
                Rosemount, Roseville, St. Anthony, St. Louis Park, Savage,
                Shakopee, Shoreview, South St. Paul, Spring Lake Park,
                Stillwater, Vadnais Heights, West St. Paul, White Bear Lake, and
                Woodbury, MN - Minnesota.
              </Text>
            </Flex>
          </Box>
        </Box>

        {/* Scroll to top button */}
        <Link href="#" mt={6} onClick={() => window.scrollTo(0, 0)}>
          <Icon as={ArrowUpIcon} boxSize={8} />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
