import { Box, Container, styled } from "@mui/material";
import CarouselCard2 from "components/carousel-cards/CarouselCard2";
import Carousel from "components/carousel/Carousel";
import Image from "next/image";
import React from "react";
import { arrowButtonStyle } from "./Section2"; // styled components

const ContentWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "8px",
  position: "relative",
  backgroundColor: "#F3F6F9",
  boxShadow: theme.shadows[1],
}));
const BadgeBox = styled(Box)(({ theme }) => ({
  top: 0,
  right: "3rem",
  position: "absolute",
  [theme.breakpoints.down("sm")]: {
    "&": {
      width: "85px",
      right: "1rem",
    },
  },
})); // ========================================================

// ========================================================
const Section5 = ({ hotDealList }) => {
  return (
    <Container
      sx={{
        pb: 8,
      }}
    >
      <ContentWrapper>
        <Carousel
          totalSlides={3}
          infinite={true}
          visibleSlides={1}
          leftButtonStyle={arrowButtonStyle}
          rightButtonStyle={arrowButtonStyle}
        >
          {hotDealList.map((item, index) => {
            const expireDate = new Date(item.expireDate).getTime();
            return (
              <CarouselCard2
                key={index}
                imgUrl={item.imgUrl}
                expireDate={expireDate}
                productName={item.productName}
              />
            );
          })}
        </Carousel>

        <BadgeBox>
          <Image
            src="/assets/images/badges/hot.svg"
            width={110}
            height={130}
            alt="New"
          />
        </BadgeBox>
      </ContentWrapper>
    </Container>
  );
};

export default Section5;
