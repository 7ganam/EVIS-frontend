import { Box, Container, Grid, styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import appIcons from "components/icons";
import { H4, Span } from "components/Typography";
import React from "react"; // styled components

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  flexWrap: "wrap",
  padding: "1.5rem",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "1rem 0.5rem",
    flexDirection: "column",
  },
})); // =============================================================

// =============================================================
const ServiceSection2 = ({ id, services }) => {
  const servicesData = services.slice(0, 4);
  return (
    <Container
      id={id}
      sx={{
        pt: 12,
        pb: 8,
      }}
    >
      <Grid container spacing={3}>
        {servicesData?.map((item) => {
          const Icon = appIcons[item.icon];
          return (
            <Grid item lg={3} md={6} sm={6} xs={12} key={item.title}>
              <StyledFlexBox alignItems="center" gap={2}>
                <FlexBox alignItems="center" color="grey.600" fontSize="50px">
                  <Icon fontSize="50px" color="grey.600">
                    {item.icon}
                  </Icon>
                </FlexBox>

                <Box>
                  <H4 color="grey.900" fontSize="1rem" fontWeight="700">
                    {item.title}
                  </H4>
                  <Span color="grey.600">{item.subtitle}</Span>
                </Box>
              </StyledFlexBox>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default ServiceSection2;
