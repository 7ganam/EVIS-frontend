import { Box, Grid, styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import appIcons from "components/icons";
import { H4, Span } from "components/Typography";
import React from "react"; // styled component

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  flexWrap: "wrap",
  padding: "1.5rem",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.between("sm", "md")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column",
  },
})); // ==========================================================

// ==========================================================
const GrocerySection2 = ({ services = [] }) => {
  return (
    <Box>
      <Grid container spacing={3}>
        {services.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Grid item lg={4} sm={6} xs={12} key={ind}>
              <StyledFlexBox gap={2} alignItems="center">
                <Icon
                  sx={{
                    fontSize: 50,
                    color: "grey.600",
                  }}
                />

                <Box>
                  <H4 color="grey.900" fontSize={20} fontWeight={700}>
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.subtitle}</Span>
                </Box>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GrocerySection2;
