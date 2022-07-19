import { Container, Grid } from "@mui/material";
import React from "react";
import HomeFourCard3 from "./homeFour-cards/HomeFourCard3"; // ===================================================

// ===================================================
const Section3 = ({ bannerData }) => {
  const firstItem = bannerData[0];
  const secondItem = bannerData[1];
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <Grid container spacing={4}>
        <Grid item md={6} xs={12}>
          <HomeFourCard3
            imgUrl={firstItem.imgUrl}
            title={firstItem.title}
            body={firstItem.body}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <HomeFourCard3
            color="white"
            bgColor="grey.600"
            body={secondItem.body}
            title={secondItem.title}
            imgUrl={secondItem.imgUrl}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section3;
