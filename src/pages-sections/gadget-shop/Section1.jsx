import { Box, Container, Grid } from "@mui/material";
import CarouselCard3 from "components/carousel-cards/CarouselCard3";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import Navbar from "components/navbar/Navbar";
import useSettings from "hooks/useSettings";
import { Fragment } from "react";
import CarouselSection from "./CarouselSection";
import HomeFourCard1 from "./homeFour-cards/HomeFourCard1"; // =================================================================

// =================================================================
const Section1 = ({ topPickList, mainCarousel }) => {
  const { settings } = useSettings();
  const arrowButtonStyle = {
    color: "#7D879C",
    boxShadow: "none",
    background: "transparent",
  }; // dynamically change arrow icon

  const left = settings.direction === "ltr" ? "left" : "right";
  const right = settings.direction === "ltr" ? "right" : "left";
  return (
    <Fragment>
      <Navbar />

      <Container
        sx={{
          pt: "3rem",
        }}
      >
        <Grid container spacing={5}>
          <Grid item md={5} xs={12}>
            <Carousel
              visibleSlides={1}
              totalSlides={mainCarousel.length}
              leftButtonStyle={{ ...arrowButtonStyle, [left]: 8 }}
              rightButtonStyle={{ ...arrowButtonStyle, [right]: 8 }}
            >
              {mainCarousel.map((_item, ind) => (
                <CarouselCard3 carouselData={_item} key={ind} />
              ))}
            </Carousel>
          </Grid>

          <Grid item md={7} xs={12}>
            <CategorySectionCreator title="Top Picks">
              <CarouselSection productList={topPickList} />

              <Box my="3rem">
                <HomeFourCard1
                  title="Converse Collecitons"
                  body="Get the most exciting deals. Starting at $59"
                  imgUrl="/assets/images/products/red-shoe.png"
                />
              </Box>

              <CarouselSection productList={topPickList} />
            </CategorySectionCreator>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Section1;
