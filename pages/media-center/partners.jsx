import React from "react";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Grid, Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
// ======================================================
// ======================================================

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ margin: "10px" }} />;
};

const internationalMediaPartners = [
  {
    source: "/assets/images/associations/Skynews.png",
  },
];

const mediaPartners = [
  {
    source: "/assets/images/associations/Nationshield.png",
  },
  {
    source: "/assets/images/associations/Petrofinder.png",
  },
];

const generalPage = (props) => {
  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          textAlign: "center",
          placeItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SectionTitle>INTERNATIONAL MEDIA PARTNER</SectionTitle>
        <Grid
          container
          sx={{ textAlign: "center", placeItems: "center", marginTop: "40px" }}
        >
          {internationalMediaPartners.map(({ source }) => {
            return (
              <Grid item xs={12} key={source}>
                <StyledImage Src={source} />
              </Grid>
            );
          })}
        </Grid>

        <SectionTitle>MEDIA PARTNERS</SectionTitle>
        <Grid
          container
          sx={{
            width: "450px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {mediaPartners.map(({ source }) => {
            return (
              <Grid item xs={12} sm={6} key={source}>
                <StyledImage Src={source} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps() {
  const allProducts = await api.getGrocery3Products();
  const offerProducts = await api.getGrocery3offerProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  return {
    props: {
      allProducts,
      offerProducts,
      topSailedProducts,
    },
  };
}
export default generalPage;
