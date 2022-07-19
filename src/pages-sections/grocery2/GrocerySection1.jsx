import { Box, Grid, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H1, H5, H6 } from "components/Typography";
import React from "react"; // styled components

const StyledBox = styled(Box)(() => ({
  borderRadius: "8px",
  overflow: "hidden",
  "& .carousel-dot": {
    position: "absolute",
    bottom: "30px",
    left: "40px",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "relative",
  padding: "2rem 1rem 5rem 40px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  color: "white",
  [theme.breakpoints.down("sm")]: {
    "& .css-q4ts9v, & .css-pkvvvs": {
      maxWidth: "100%",
      paddingRight: "1rem",
    },
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "1.8rem",
  },
}));

const GrocerySection1 = () => {
  return (
    <StyledBox>
      <Carousel
        totalSlides={3}
        visibleSlides={1}
        showDots={true}
        showArrow={false}
        autoPlay={false}
        dotClass="carousel-dot"
        dotColor="white"
        spacing="0px"
      >
        {[...new Array(3)].map((_item, ind) => (
          <StyledGrid container key={ind}>
            <GridItemOne item md={7} sm={7} xs={12}>
              <H1 maxWidth="280px" mb={1} lineHeight="1.27">
                Get Your Grocery Within 40 Minutes
              </H1>
              <H6 maxWidth="470px" color="inherit" fontWeight="400" mb={5}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed
                pellentesque nibh tortor.
              </H6>

              <H5 fontSize="18px" fontWeight="700" mb={2.5}>
                Try our mobile app!
              </H5>
              <AppStore />
            </GridItemOne>
            <GridItemTwo item md={5} sm={5} xs={12}>
              <LazyImage
                src="/assets/images/products/garlic.png"
                width={570}
                height={360}
                priority
              />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default GrocerySection1;
