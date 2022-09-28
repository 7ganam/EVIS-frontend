import { Box, Grid, useTheme, Card } from "@mui/material";

import { Container } from "@mui/material";
import React from "react";
import Image from "src/components/BazarImage";
import { SectionTitle } from "@/components/EvComponents/StyledTypography";
// ===============================================================
const WhatToExpectSection = ({ serviceList }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ mb: "20px" }}>
        <SectionTitle>2023 HIGHLIGHTS</SectionTitle>
      </Box>
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
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="center"
            justifyContent={"center"}
          >
            {serviceList?.map((item, ind) => {
              return (
                <Grid item lg={2} md={3} xs={6} key={ind}>
                  <Card
                    sx={{
                      pt: "1.2rem",
                      // height: "100%",
                      display: "flex",
                      borderRadius: "8px",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Image
                      height={150}
                      width={150}
                      mb={0.5}
                      src={item.image}
                      alt="logo"
                    />
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default WhatToExpectSection;
