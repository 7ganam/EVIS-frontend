import { Box, Grid, useTheme, Card } from "@mui/material";

import { SectionTitle } from "components/StyledTypography";
import { Container } from "@mui/material";
import React from "react";
import Image from "components/BazarImage";

// ===============================================================
const WhatToExpectSection = ({ serviceList }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: theme.palette.primary.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: "10px",
      }}
    >
      <Container
        sx={{
          my: "30px",
        }}
      >
        <Grid container spacing={3}>
          {serviceList.map((item, ind) => {
            return (
              <Grid item lg={2} md={3} xs={6} key={ind}>
                <Card
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
