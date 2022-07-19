import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { H1, H6, Paragraph } from "components/Typography";
import React from "react"; // styled components

const StyledBox = styled(Box)(() => ({
  marginBottom: 60,
  overflow: "hidden",
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  minHeight: 650,
  display: "flex",
  alignItems: "center",
  backgroundImage:
    "url('/assets/images/Furniture Shop/Furniture Shop Header.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  transition: "all 0.3s",
  [theme.breakpoints.down("md")]: {
    height: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));
const StyledGrid = styled(Grid)(() => ({
  maxWidth: 1280,
  margin: "auto",
  position: "relative",
  alignItems: "center",
  padding: "2rem 0px 5rem 0px",
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& h1": {
    fontSize: 60,
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      fontSize: 50,
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& h1": {
      fontSize: 40,
    },
  },
}));
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
  borderRadius: 0,
  padding: "8px 30px",
}));
const TextBox = styled(Box)(({ theme }) => ({
  marginTop: 5,
  marginBottom: 40,
  paddingRight: 100,
  [theme.breakpoints.down("md")]: {
    paddingRight: 0,
  },
}));

const FurnitureShopSection1 = () => {
  const { palette } = useTheme();
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        totalSlides={3}
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
      >
        {[...new Array(3)].map((_item, ind) => (
          <Container key={ind}>
            <StyledGrid container>
              <GridItemOne item lg={6} md={8} xs={12}>
                <H6>A Beautiful House_</H6>
                <H1 fontSize={60}>Modern Furniture.</H1>

                <TextBox>
                  <Paragraph color="grey.600">
                    How employees, surely the a said drops. Bathroom expected
                    that systems let place. Her safely been little. Enterprises
                    flows films it a fly the of wasn&apos;t designer the her
                    thought. Enterprises flows films it a fly the of wasn&apos;t
                    designer.
                  </Paragraph>
                </TextBox>

                <StyledButton color="primary" variant="contained">
                  Shop Now
                </StyledButton>
              </GridItemOne>
            </StyledGrid>
          </Container>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default FurnitureShopSection1;
