import { alpha, Box, styled } from "@mui/material";
import { H3, Paragraph } from "components/Typography";
import React from "react"; // styled component

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  borderRadius: 4,
  alignItems: "center",
  padding: "2rem 3rem",
  flexDirection: "column",
  transition: "all 250ms ease-in-out",
  boxShadow: "0px 0px 28px rgba(3, 0, 71, 0.01)",
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
})); // ==========================================================

// ==========================================================
const ShowcaseCard4 = ({ title, body, Icon }) => {
  return (
    <StyledBox>
      <Icon
        sx={{
          color: "primary.dark",
          fontSize: 50,
          textAlign: "center",
          mb: 3,
        }}
      />
      <H3 fontWeight={900} textAlign="center" mb="0.3rem">
        {title}
      </H3>
      <Paragraph color="grey.600" textAlign="center">
        {body}
      </Paragraph>
    </StyledBox>
  );
};

export default ShowcaseCard4;
