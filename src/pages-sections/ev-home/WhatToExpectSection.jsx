import { Box, Grid, useTheme, Card } from "@mui/material";

import { SectionTitle } from "src/components/StyledTypography";
import { Container } from "@mui/material";
import React from "react";
import Image from "src/components/BazarImage";

// ===============================================================
const WhatToExpectSection = ({ serviceList }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.primary.light,

        py: "10px",
      }}
    >
      <Container
        sx={{
          mb: "70px",
        }}
      >
        <SectionTitle text={"WHAT TO EXPECT"} />

        <Grid container spacing={3}>
          {serviceList.map((item, ind) => {
            return (
              <Grid item lg={2} md={3} xs={6} key={ind}>
                <Card
                  hoverEffect
                  data-aos="fade-up"
                  data-aos-duration={ind * 500}
                  sx={{
                    p: "3rem",
                    height: "100%",
                    display: "flex",
                    borderRadius: "8px",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Image height={150} mb={0.5} src={item.image} alt="logo" />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatToExpectSection;
