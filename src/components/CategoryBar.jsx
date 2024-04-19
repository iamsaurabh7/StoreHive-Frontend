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
      boxShadow="md"
      // direction={["column", "column", "row", "row"]}
    >
      <Button
        as={Link}
        to="/"
        variant="ghost"
        marginRight="1em"
        fontSize={["xs", "sm", "md", "md"]}
      >
        All
      </Button>
      <Button
        as={Link}
        to="/mens"
        variant="ghost"
        marginRight="1em"
        fontSize={["xs", "sm", "md", "md"]}
      >
        Men's
      </Button>
      <Button
        as={Link}
        to="/womens"
        variant="ghost"
        marginRight="1em"
        fontSize={["xs", "sm", "md", "md"]}
      >
        Women's
      </Button>
      <Button
        as={Link}
        to="/jewelery"
        variant="ghost"
        fontSize={["xs", "sm", "md", "md"]}
      >
        Jewelery
      </Button>
      <Button
        as={Link}
        to="/electronics"
        variant="ghost"
        fontSize={["xs", "sm", "md", "md"]}
      >
        Electronics
      </Button>
    </Flex>
  );
}

export default CategoryBar;
