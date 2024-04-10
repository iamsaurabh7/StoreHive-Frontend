import React from "react";
import { Flex, Box, Button, Text, Spacer } from "@chakra-ui/react";
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
                ShopKart
              </Text>
            </Flex>
          </Link>
        </Box>
        <Box>
          <Flex m={"1em"} align={"center"}>
            <Box mr={["0.5em", "0.5em", "1em", "1em"]}>Signin/Signup</Box>
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

// {/* Middle - Navigation Links */}
// <Flex mb={[1, 0]}>
//   {" "}
//   {/* Add margin-bottom on mobile */}
//   <Button as={Link} to="/mens" variant="ghost" mr={2}>
//     Mens
//   </Button>
//   <Button as={Link} to="/womens" variant="ghost" mr={2}>
//     Womens
//   </Button>
//   <Button as={Link} to="/kids" variant="ghost" mr={2}>
//     Kids
//   </Button>
//   <Button as={Link} to="/sports" variant="ghost">
//     Sports
//   </Button>
// </Flex>

// make it very beautiful from scaract using chakra ui
// left side website name
// space
// middle should have mens, womens, kids, sports all buttons/ box equally aligned with little space between them
// space
// right side ll have 2 buttons/box login and cart
// return (
//   <div className="navbar">
//     {/* Website name/logo */}
//     <div className="logo">
//       <Link to="/">YourWebsiteName</Link>
//     </div>

//     {/* Navigation links */}
//     <div className="nav-links">
//       <Link to="/">Home</Link>
//       <Link to="/mens">Mens</Link>
//       <Link to="/womens">Womens</Link>
//       <Link to="/kids">Kids</Link>
//       <Link to="/sports">Sports</Link>
//     </div>

//     {/* Cart and login/logout */}
//     <div className="cart-login">
//       <button>Login-Logout</button>
//       <Link to="/cart">Cart</Link>
//     </div>
//   </div>
// );
// };

export default Navbar;
