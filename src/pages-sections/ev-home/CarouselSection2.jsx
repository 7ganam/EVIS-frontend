import { Box, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { H3, H5 } from "components/Typography";
import React from "react"; // styled component

// ============================================================
const CarouselSection2 = ({ cardList = [] }) => {
  const theme = useTheme();

  return (
    <Carousel
      infinite={true}
      dotColor={theme.palette.primary.main}
      spacing="0px"
      totalSlides={cardList?.length}
      showDots={true}
      autoPlay={true}
      visibleSlides={1}
      showArrowOnHover={true}
      arrowButtonColor="inherit"
      leftButtonStyle={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        height: "100px",
        width: "100px",
        left: "-40px",
        top: "50%",
        MarginTop: "-30px",
      }}
      rightButtonStyle={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        height: "100px",
        width: "100px",
        right: "-40px",
        MarginTop: "-30px",
      }}
      fontSize="large"
    >
      {cardList.map((item, ind) => (
        <Box
          key={ind}
          container
          sx={{
            border: `0px solid ${theme.palette.primary.main}`,
            borderRadius: "30px",
            overflow: "hidden",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",

            color: "white",
            padding: "3rem",
            bgcolor: item.bgColor,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.226)),url(${item.imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Box>
            <H3
              mb={{
                sm: 4,
                xs: 3,
              }}
              fontSize={{
                sm: 35,
                xs: 24,
              }}
              lineHeight="1.37"
              sx={{ textAlign: "center" }}
            >
              {item.title}
            </H3>
            <H5
              fontWeight="600"
              fontSize={{
                sm: 18,
                xs: 14,
              }}
              mb={1}
              sx={{ textAlign: "center" }}
            >
              {item.subtitle}
            </H5>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselSection2;
