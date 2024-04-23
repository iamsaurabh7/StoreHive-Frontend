import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

function AuthPage() {
  return (
    <Flex
      minHeight="100vh"
      w={["100%", "100%", "85%", "70%"]}
      m={"auto"}
      align="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.300, blue.500)"
    >
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
        mt={-10}
      >
        <Box textAlign="center">
          <Heading fontSize="2xl">Welcome</Heading>
          <Text mt={2} color="gray.600" fontSize="md">
            Choose an option to get started
          </Text>
        </Box>
        <Box mt={4}>
          <Stack spacing={4}>
            <Button
              colorScheme="teal"
              variant="solid"
              size="lg"
              borderRadius="full"
            >
              Sign In
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              size="lg"
              borderRadius="full"
            >
              Sign Up
            </Button>
          </Stack>
        </Box>
        <Spacer />
        <Box mt={4} textAlign="center">
          <Text fontSize="sm" color="gray.500">
            © 2024 StoreHive. All rights reserved.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default AuthPage;
