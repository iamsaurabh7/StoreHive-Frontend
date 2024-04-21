import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL;

const PRODUCT_API_URL = `${API_URL}/products`;
const Products = () => {
  const [products, setProducts] = useState([]);
  // console.log(PRODUCT_API_URL);
  useEffect(() => {
    fetch(PRODUCT_API_URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error fetching products:", error));
  }, []);

  return (
    <Box p="4">
      <SimpleGrid columns={[1, 2, 4]} spacing="4" p={"1em"}>
        {products &&
          products.map((item) => (
            <Link key={item.id} to={`/products/${item._id}`}>
              <ProductCard item={item} />
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
