import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url} />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
        <BsGridFill />
      </Flex>
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text lineHeight="2" color="blackAlpha.800">
        {description}
      </Text>
      <Flex flexWrap="wrap">
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="2px"
          borderColor="gray.100"
          p="5"
        >
          <Text fontWeight>Type</Text>
          <Text fontWeight="bold">{type.toUpperCase()}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="2px"
          borderColor="gray.100"
          p="5"
        >
          <Text fontWeight>Purpose</Text>
          <Text fontWeight="bold">{purpose.toUpperCase()}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="2px"
            borderColor="gray.100"
            p="5"
          >
            <Text fontWeight>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus.toUpperCase()}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length != 0 && (
          <Text fontWeight="black" marginTop="5">
            Amenities
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities.map((item) =>
            item.amenities.map((amenity) => (
              <Text
                fontWeight="bold"
                key={amenity.text}
                color="blackAlpha.800"
                p="2"
                bg="blue.100"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
