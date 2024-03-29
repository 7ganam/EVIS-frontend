import { Box, Grid, useTheme, Card } from "@mui/material";

import { SectionTitle } from "src/components/StyledTypography";
import { Container } from "@mui/material";
import React from "react";
import Image from "src/components/BazarImage";
import { H5 } from "src/components/Typography";

// ===============================================================
const WhatToExpect = ({ serviceList }) => {
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
        <SectionTitle text={"BY EXHIBITING, YOU CAN"} />

        <Grid container spacing={3} alignItems="center">
          {serviceList.map((item, ind) => {
            return (
              <Grid item lg={2.4} md={3} xs={12} key={ind}>
                <Card
                  hoverEffect
                  data-aos="fade-up"
                  data-aos-duration={ind * 500}
                  sx={{
                    p: "1rem",
                    height: "250px",
                    display: "flex",
                    borderRadius: "8px",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Image height={100} mb={0.5} src={item.image} alt="logo" />

                  <H5
                    width="190px"
                    sx={{
                      color: "black",
                      mt: "10px",
                    }}
                  >
                    {item.text}
                  </H5>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatToExpect;
