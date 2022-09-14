import React from "react";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Grid, Container, Box } from "@mui/material";
import { H4 } from "src/components/EvComponents/Typography";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
// ======================================================
// ======================================================

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ margin: "10px" }} />;
};

const keyPartners = [
  {
    source: "/assets/images/organizations/Masdar.jpg",
    text: "Sustainability Partner",
  },
  {
    source: "/assets/images/organizers/ADNEC.png",
    text: "Venue Partner",
  },
  {
    source: "/assets/images/organizers/AbuDhabi.png",
    text: "Host City",
  },
  {
    source: "/assets/images/organizers/Nirvana.png",
    text: "Organized by",
  },
];

const sponsors = [
  {
    source: "/assets/images/organizers/Audi.png",
    text: "Gold Sponsor",
  },
  {
    source: "/assets/images/organizers/BritishVolt.png",
    text: "Silver Sponsor",
  },
  {
    source: "/assets/images/associations/Totalenergies.png",
    text: "Sponsor",
  },
];

const internationalMediaPartners = [
  {
    source: "/assets/images/associations/Skynews.png",
    text: "International News Partner",
  },
];

const knowledgePartners = [
  {
    source: "/assets/images/partners/CEBC.png",
    text: "Knowledge Partner",
  },
  {
    source: "/assets/images/partners/CHARIN.png",
    text: "Knowledge Partner",
  },
  {
    source: "/assets/images/partners/GEEE.png",
    text: "Knowledge Partner",
  },
  {
    source: "/assets/images/partners/ISF.png",
    text: "Knowledge Partner",
  },
  {
    source: "/assets/images/partners/AVERE.png",
    text: "Knowledge Partner",
  },
];

const researchPartners = [
  {
    source: "/assets/images/partners/Oxford.png",
    text: "Research Partner",
  },
];

const mediaPartners = [
  {
    source: "/assets/images/associations/Nationshield.png",
    text: "Media Partner",
  },
  {
    source: "/assets/images/associations/Petrofinder.png",
    text: "Media Partner",
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
        <Box sx={{ mt: "30px" }}>
          <SectionTitle>KEY PARTNERS</SectionTitle>
        </Box>
        <Grid
          container
          sx={{
            width: "800px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {keyPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={source}>
                <H4>{text}</H4>
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
          {sponsors.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={4} key={source}>
                <H4>{text}</H4>

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
          {internationalMediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} key={source}>
                <H4>{text}</H4>

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
          {knowledgePartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={source}>
                <H4>{text}</H4>

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
          {researchPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} key={source}>
                <H4>{text}</H4>

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
          {mediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={6} key={source}>
                <H4>{text}</H4>
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
