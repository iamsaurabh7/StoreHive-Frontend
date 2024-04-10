import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CategoryBar() {
  return (
    <Flex
      //   bg="var(--primary-color)"
      justifyContent="space-between"
      padding="1em"
      px={["0.5em", "0.5em", "2em", "7em"]}
      marginBottom="1em"
      width={["100%", "100%", "85%", "70%"]}
      margin="auto"
      boxShadow="lg"
    >
      <Button as={Link} to="/" variant="ghost" marginRight="1em">
        All
      </Button>
      <Button as={Link} to="/mens" variant="ghost" marginRight="1em">
        Mens
      </Button>
      <Button as={Link} to="/womens" variant="ghost" marginRight="1em">
        Womens
      </Button>
      <Button as={Link} to="/kids" variant="ghost">
        Kids
      </Button>
    </Flex>
  );
}

export default CategoryBar;
