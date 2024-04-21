import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Divider,
} from "@chakra-ui/react";

const API_URL = process.env.REACT_APP_API_URL;

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details from backend API using productId
    fetch(`${API_URL}/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  return (
    <Box w={["100%", "100%", "85%", "70%"]} margin="auto" py={"1em"}>
      <Box px="6" py="3">
        {product ? (
          <Flex
            maxW="800px"
            mx="auto"
            boxShadow="lg"
            borderRadius="lg"
            overflow="hidden"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Image
              src={product.image}
              alt={product.title}
              w={{ base: "60%", md: "40%" }}
              h="auto"
              p={"2em"}
              borderTopRadius={{ base: "lg", md: "none" }}
            />
            <Box p="6" w={{ base: "100%", md: "50%" }}>
              <Heading size="md" mb="4">
                {product.title}
              </Heading>
              <Text fontSize="lg" fontWeight="bold" mb="4">
                Price: ${product.price}
              </Text>
              <Text fontSize="md" mb="4">
                {product.description}
              </Text>
              <Text fontSize="sm" color="gray.500" mb="4">
                Category: {product.category}
              </Text>
              <Divider />
              <Flex mt="4">
                <Button colorScheme="blue" mr="2">
                  Add to Cart
                </Button>
                <Button variant="outline">Buy Now</Button>
              </Flex>
            </Box>
          </Flex>
        ) : (
          <Text>Loading...</Text>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetails;
