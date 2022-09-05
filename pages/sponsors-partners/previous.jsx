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

const keyPartners = [
  {
    source: "/assets/images/organizers/Masdar.png",
  },
  {
    source: "/assets/images/organizers/ADNEC.png",
  },
  {
    source: "/assets/images/organizers/AbuDhabi.png",
  },
  {
    source: "/assets/images/organizers/Nirvana.png",
  },
];

const sponsors = [
  {
    source: "/assets/images/organizers/Audi.png",
  },
  {
    source: "/assets/images/organizers/BritishVolt.png",
  },
  {
    source: "/assets/images/associations/Totalenergies.png",
  },
];

const internationalMediaPartners = [
  {
    source: "/assets/images/associations/Skynews.png",
  },
];

const knowledgePartners = [
  {
    source: "/assets/images/partners/CEBC.png",
  },
  {
    source: "/assets/images/partners/CHARIN.png",
  },
  {
    source: "/assets/images/partners/GEEE.png",
  },
  {
    source: "/assets/images/partners/ISF.png",
  },
  {
    source: "/assets/images/partners/AVERE.png",
  },
];

const researchPartners = [
  {
    source: "/assets/images/partners/Oxford.png",
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
        <SectionTitle>KEY PARTNERS</SectionTitle>
        <Grid
          container
          sx={{
            width: "800px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {keyPartners.map(({ source }) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={source}>
                <StyledImage Src={source} />
              </Grid>
            );
          })}
        </Grid>

        <SectionTitle>SPONSORS</SectionTitle>
        <Grid
          container
          sx={{
            width: "600px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {sponsors.map(({ source }) => {
            return (
              <Grid item xs={12} sm={4} key={source}>
                <StyledImage Src={source} />
              </Grid>
            );
          })}
        </Grid>

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

        <SectionTitle>KNOWLEDGE PARTNERS</SectionTitle>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 10 }}
          sx={{
            width: "950px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {knowledgePartners.map(({ source }) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={source}>
                <StyledImage Src={source} />
              </Grid>
            );
          })}
        </Grid>

        <SectionTitle>RESEARCH PARTNER</SectionTitle>
        <Grid
          container
          sx={{ textAlign: "center", placeItems: "center", marginTop: "40px" }}
        >
          {researchPartners.map(({ source }) => {
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
