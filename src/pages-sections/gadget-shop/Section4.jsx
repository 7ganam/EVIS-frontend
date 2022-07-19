import { Box } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard3 from "components/product-cards/ProductCard3";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react";
import { arrowButtonStyle } from "../fashion-shop/Section2";

const Section4 = ({ mostViewedList }) => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator title="Most Viewed">
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={mostViewedList.length}
          visibleSlides={visibleSlides}
          infinite={true}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {mostViewedList.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard3
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                rating={item.rating}
                price={item.price}
                off={item.discount}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

const productList = [
  {
    imgUrl: "/assets/images/products/gaming-gear.png",
  },
  {
    imgUrl: "/assets/images/products/t-shirt6.png",
  },
  {
    imgUrl: "/assets/images/products/t-shirt7.png",
  },
  {
    imgUrl: "/assets/images/products/ladies-dress2.png",
  },
  {
    imgUrl: "/assets/images/products/gaming-gear.png",
  },
  {
    imgUrl: "/assets/images/products/t-shirt6.png",
  },
  {
    imgUrl: "/assets/images/products/t-shirt7.png",
  },
  {
    imgUrl: "/assets/images/products/ladies-dress2.png",
  },
];
export default Section4;
