// ProductCard.js
import React from "react";
import {
  Box,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Card,
  Badge,
} from "@chakra-ui/react";

const ProductCard = ({ item }) => {
  return (
    <Card
      boxShadow="md"
      rounded="md"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      p={"1em"}
      m={"1em"}
    >
      <Box display="flex" justifyContent="center">
        <Image
          objectFit="contain"
          src={item.image}
          alt={item.name}
          h={["130px", "140px"]}
          w={["180px", "190px"]}
        />
      </Box>

      <Box p="4">
        <Stack spacing="1">
          <Heading size="md" fontFamily="body">
            {item.name}
          </Heading>

          <Text fontSize="md" fontWeight="semibold">
            ${item.price.toFixed(2)}
          </Text>

          <Text fontSize="sm" color="gray.600" noOfLines={2}>
            {item.description}
          </Text>
        </Stack>

        <Box mt="4">
          <Button
            colorScheme="blue"
            size="sm"
            borderRadius="full"
            _focus={{ outline: "none" }}
            _hover={{ bg: "blue.500" }}
          >
            Add to Cart
          </Button>
        </Box>

        <Box mt="2">
          <Badge colorScheme="green">{item.category}</Badge>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
