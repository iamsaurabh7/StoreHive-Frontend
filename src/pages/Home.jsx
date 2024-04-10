import React from "react";
import { Box } from "@chakra-ui/react";
import HomeSlider from "../components/HomeSlider";
import Products from "./Products";

const Home = () => {
  return (
    <Box w={["100%", "100%", "85%", "70%"]} margin="auto" py={"1em"}>
      <HomeSlider />
      <Products />
    </Box>
  );
};

export default Home;
