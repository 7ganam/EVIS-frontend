import { Box, Grid, styled, useTheme } from "@mui/material";
import { FlexBox } from "components/flex-box";
import appIcons from "components/icons";
import { H4, Span } from "components/Typography";
import React from "react";
const Container = styled(Box)(() => ({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem",
}));
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  flexWrap: "wrap",
  background: "#fff",
  alignItems: "center",
  padding: "1.5rem 0.8rem",
  justifyContent: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column",
  },
}));
const IconBox = styled(FlexBox)(({ theme }) => ({
  padding: "12px",
  fontSize: "22px",
  borderRadius: "50%",
  alignItems: "center",
  background: theme.palette.info[50],
})); // ==================================================

// ==================================================
const GiftShopServices = ({ serviceData = [] }) => {
  const { palette } = useTheme();
  const servicesData = serviceData.slice(0, 3);
  return (
    <Container>
      <Grid container spacing={3}>
        {servicesData.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Grid item md={4} sm={6} xs={12} key={ind}>
              <StyledFlexBox gap={1.5}>
                <IconBox>
                  <Icon
                    fontSize="50px"
                    sx={{
                      color: palette.primary.main,
                    }}
                  >
                    {item.icon}
                  </Icon>
                </IconBox>

                <div>
                  <H4 mb="5px" fontSize="1rem" fontWeight="600">
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.subtitle1}</Span>
                </div>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default GiftShopServices;
