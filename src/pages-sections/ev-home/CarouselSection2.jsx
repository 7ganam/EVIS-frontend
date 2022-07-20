import { Button, Box, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { H1, H4 } from "components/Typography";
import React from "react"; // styled component
import DownloadingIcon from "@mui/icons-material/Downloading";

// ============================================================
const CarouselSection2 = ({ cardList = [] }) => {
  const theme = useTheme();

  return (
    <Carousel
      interval={"12000"}
      leftButtonClass={"left-car-arrow"}
      rightButtonClass={"right-car-arrow"}
      infinite={true}
      dotColor={theme.palette.primary.main}
      spacing="0px"
      totalSlides={cardList?.length}
      showDots={true}
      autoPlay={true}
      visibleSlides={1}
      showArrowOnHover={true}
      arrowButtonColor="inherit"
      leftButtonSx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        height: "100px",
        width: "100px",
        left: "-40px",
        top: "260px",
      }}
      rightButtonSx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
        height: "100px",
        width: "100px",
        right: "-40px",
        top: "260px",
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
            padding: "10rem",
            bgcolor: item.bgColor,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.226)),url(${item.imgUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <Box>
            <H1
              mb={{
                sm: 4,
                xs: 3,
              }}
              fontSize={{
                md: 60,
                sm: 35,
                xs: 24,
              }}
              lineHeight="1.37"
              sx={{ textAlign: "center" }}
            >
              {item.title}
            </H1>
            <H4
              fontWeight="600"
              fontSize={{
                md: 25,
                sm: 18,
                xs: 14,
              }}
              mb={1}
              sx={{ textAlign: "center" }}
            >
              {item.subtitle}
            </H4>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                mt: "30px",
              }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => console.log("downlaod")}
              >
                {"Download Event Brochure"}
                <DownloadingIcon
                  sx={{
                    ml: 1,
                    height: { xs: "30px", md: "40px" },
                    width: { xs: "30px", md: "40px" },
                  }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselSection2;
