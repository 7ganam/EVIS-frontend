import { Box, Grid, styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import appIcons from "components/icons";
import { H4, Span } from "components/Typography";
import React from "react"; // styled components

const Container = styled(Box)(() => ({
  margin: "auto",
  maxWidth: "1200px",
  paddingBottom: "3rem",
}));
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  borderRadius: "8px",
  padding: "1.5rem",
  flexWrap: "wrap",
  background: "#fff",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "1rem 0.5rem",
    textAlign: "center",
  },
}));
const IconBox = styled(FlexBox)(({ theme }) => ({
  padding: "15px",
  fontSize: "25px",
  borderRadius: "50%",
  marginRight: "16px",
  alignItems: "center",
  background: theme.palette.primary[50],
})); // ========================================================

// ========================================================
const HealthBeautyServices = ({ serviceData = [] }) => {
  const servicesData = serviceData.slice(0, 3);
  return (
    <Container>
      <Grid container spacing={3}>
        {servicesData.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Grid item lg={4} md={4} sm={12} xs={12} key={ind}>
              <StyledFlexBox alignItems="center">
                <IconBox>
                  <Icon
                    fontSize="50px"
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    {item.icon}
                  </Icon>
                </IconBox>

                <div>
                  <H4
                    fontSize={16}
                    fontWeight="700"
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    {item.title}
                  </H4>

                  <Span color="grey.600">{item.subtitle1}</Span>
                  <br />
                  <Span color="grey.600">{item.subtitle2}</Span>
                </div>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HealthBeautyServices;
