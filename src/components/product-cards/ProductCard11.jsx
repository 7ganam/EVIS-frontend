import { Box, styled } from "@mui/material";
import LazyImage from "components/LazyImage";
import { Paragraph } from "components/Typography";
import React from "react"; // styled component

const StyledParagraph = styled(Paragraph)(({ theme }) => ({
  top: "10px",
  left: "10px",
  fontWeight: 600,
  borderRadius: "5px",
  position: "absolute",
  padding: "0.5rem 1rem",
  backgroundColor: theme.palette.secondary[100],
}));
const StyledParagraph2 = styled(Paragraph)(({ theme }) => ({
  top: "10px",
  right: "10px",
  color: "white",
  fontWeight: 600,
  borderRadius: "5px",
  position: "absolute",
  padding: "0.5rem 1.5rem",
  backgroundColor: theme.palette.primary[600],
})); // ===========================================================

// ===========================================================
const ProductCard11 = ({ title, imgUrl, off }) => {
  return (
    <Box
      position="relative"
      sx={{
        boxShadow: 4,
      }}
    >
      <LazyImage
        mx="auto"
        alt={title}
        width={580}
        src={imgUrl}
        height={225}
        objectFit="cover"
        layout="responsive"
      />

      <StyledParagraph>{title}</StyledParagraph>
      <StyledParagraph2>{off}% OFF</StyledParagraph2>
    </Box>
  );
};

export default ProductCard11;
