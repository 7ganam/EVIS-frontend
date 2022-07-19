import { Grid, styled } from "@mui/material";
import BazarAvatar from "components/BazarAvatar";
import BazarCard from "components/BazarCard";
import Carousel from "components/carousel/Carousel";
import { FlexBox } from "components/flex-box";
import Quote from "components/icons/Quote";
import { H5, Paragraph } from "components/Typography";
import React from "react"; // styled components

const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  padding: "2rem 4rem",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
  },
}));
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  padding: "4rem 6rem",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 4rem",
  },
}));
const StyledQuote = styled(Quote)(({ theme }) => ({
  opacity: 0.08,
  fontSize: "4rem",
  position: "absolute",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
}));
const StyledAvatar = styled(BazarAvatar)(() => ({
  width: 64,
  height: 64,
  margin: "auto",
  display: "block",
}));
const StyledGridContainer = styled(Grid)(({ theme }) => ({
  flexWrap: "wrap",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: 16,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
})); // ======================================================================

// ======================================================================
const GrocerySection9 = ({ testimonials = [] }) => {
  return (
    <Carousel
      spacing="0px"
      showDots={true}
      totalSlides={3}
      visibleSlides={1}
      showArrowOnHover={true}
      arrowButtonColor="inherit"
    >
      {testimonials.map((data, ind) => (
        <StyledBazarCard key={ind}>
          <StyledFlexBox position="relative" flexWrap="wrap">
            <StyledQuote
              sx={{
                left: 0,
                top: 0,
              }}
            />

            <StyledGridContainer container spacing={1}>
              <Grid item lg={2} md={3}>
                <StyledAvatar src={data.photoUrl} />
              </Grid>

              <Grid item lg={10} md={9}>
                <Paragraph color="grey.700">{data.comment}</Paragraph>
                <H5 mt={1} fontWeight="700">
                  {data.clientName}
                </H5>
              </Grid>
            </StyledGridContainer>

            <StyledQuote
              sx={{
                right: 0,
                bottom: 0,
                transform: "rotate(180deg)",
              }}
            />
          </StyledFlexBox>
        </StyledBazarCard>
      ))}
    </Carousel>
  );
};

export default GrocerySection9;
