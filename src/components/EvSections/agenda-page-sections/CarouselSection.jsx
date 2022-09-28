import { Button, Box, useTheme } from "@mui/material";
import Carousel from "src/components/carousel/Carousel";
import { H1, H4 } from "src/components/Typography";
import React, { useState, useCallback } from "react"; // styled component
import DownloadingIcon from "@mui/icons-material/Downloading";
import ImageViewer from "react-simple-image-viewer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Card1 from "@/pages-sections/dashboard/Card1";

// import PrismaZoom from "react-prismazoom";

// ============================================================
const CarouselSection = ({ images = [] }) => {
  const theme = useTheme();

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Carousel
        interval={"12000"}
        leftButtonClass={"left-car-arrow"}
        rightButtonClass={"right-car-arrow"}
        infinite={true}
        dotColor={theme.palette.primary.main}
        spacing="0px"
        totalSlides={images?.length}
        showDots={true}
        autoPlay={true}
        visibleSlides={1}
        showArrowOnHover={true}
        arrowButtonColor="inherit"
        leftButtonSx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          height: "70px",
          width: "70px",
          left: "-40px",
          // top: "700px",
        }}
        rightButtonSx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          height: "70px",
          width: "70px",
          right: "-40px",
          // top: "700px",
        }}
        fontSize="large"
      >
        {images.map((item, ind) => (
          <Zoom key={ind} style={{ width: "100%" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: `2px ${theme.palette.primary.main} solid`,
                borderRadius: "20px",
              }}
              src={item}
              alt="page"
            ></img>
          </Zoom>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselSection;
