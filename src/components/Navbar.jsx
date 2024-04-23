import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../src/common.css";
import { FaShopify } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <Box
      w={["100%", "100%", "85%", "70%"]}
      margin="auto"
      bg="var(--primary-color)"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Link to="/">
            <Flex m={"1em"} align={"center"} ml={""}>
              <FaShopify style={{ fontSize: "170%" }} />
              <Text ml={"8px"} fontWeight="bold" fontSize={"1xl"}>
                StoreHive
              </Text>
            </Flex>
          </Link>
        </Box>
        <Box>
          <Flex m={"1em"} align={"center"}>
            <Link to="/auth">
              <Box mr={["0.5em", "0.5em", "1em", "1em"]}>Signin/Signup</Box>
            </Link>
            <Box mr={["0em", "0em", "0.5em", "1em"]}>
              <Link to="/cart">
                <BsCart4 style={{ fontSize: "170%" }} />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
