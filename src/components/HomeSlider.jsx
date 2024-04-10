import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useMediaQuery } from "@chakra-ui/react";

function HomeSlider() {
  const images = [
    "https://static.vecteezy.com/system/resources/previews/002/006/774/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/004/299/815/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/006/828/785/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
  ];

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const sliderHeight = isMobile ? "200px" : "300px";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto-scroll/change every 2 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box w="100%">
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <Box key={index} h={sliderHeight}>
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default HomeSlider;
