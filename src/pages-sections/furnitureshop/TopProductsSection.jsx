import { Box, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import ProductCard17 from "components/product-cards/ProductCard17";
import { H1, Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react";

const TopProductsSection = ({ productsData }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  const theme = useTheme();
  return (
    <Box>
      <Box my={2}>
        <H1 mb="4px">Top New Product</H1>
        <Paragraph color="grey.600">
          Tall blind but were, been folks not the expand
        </Paragraph>
      </Box>
      <Carousel
        totalSlides={productsData.length}
        visibleSlides={visibleSlides}
        infinite={true}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 40,
            height: 40,
            borderRadius: 0,
            boxShadow: theme.shadows[2],
            color: theme.palette.primary.main,
            background: theme.palette.primary[50],
            "&:hover": {
              background: theme.palette.primary[100],
            },
          },
        }}
      >
        {productsData.map((item, ind) => (
          <Box py={0.5} key={ind}>
            <ProductCard17
              id={item.id}
              hideRating={true}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.imgUrl}
              status={item.status}
              productColors={item.productColors}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default TopProductsSection;
