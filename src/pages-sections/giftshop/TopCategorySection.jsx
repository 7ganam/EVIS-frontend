import { Box, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import ProductCard15 from "components/product-cards/ProductCard15";
import { H1 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import React, { useEffect, useState } from "react"; // ===============================================

// ===============================================
const TopCategorySection = ({ categoryList }) => {
  const theme = useTheme();
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);
  return (
    <Box>
      <H1 my={2}>Top Categories</H1>
      <Carousel
        totalSlides={categoryList.length}
        visibleSlides={visibleSlides}
        infinite={true}
        sx={{
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
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
        {categoryList.map((item, ind) => (
          <Link href="#" key={ind}>
            <a>
              <ProductCard15
                title={item.title}
                available={item.available}
                imgUrl={item.imgUrl}
              />
            </a>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default TopCategorySection;
