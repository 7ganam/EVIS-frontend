import React from "react";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Grid, Container, Box } from "@mui/material";
import { H1, H4 } from "src/components/EvComponents/Typography";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
import { H2, H5 } from "@/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import LogoWithTitle from "@/components/EvComponents/LogoWithTitle";
import { useTheme } from "@emotion/react";

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
    source: "/assets/images/NirvanaLogo.png",
    text: "Organized by",
  },
];

const sponsors = [
  {
    source: "/assets/images/organizers/Audi.png",
    text: "Knowledge Partner",
  },
  {
    source: "/assets/images/organizers/BritishVolt.png",
    text: "Silver Sponsor",
  },
  {
    source: "/assets/images/associations/Totalenergies.png",
    text: "Delegate Host Sponsor",
  },
];

const internationalMediaPartners = [
  {
    source: "/assets/images/associations/Skynews.png",
    text: "",
  },
];

const knowledgePartners = [
  {
    source: "/assets/images/partners/CEBC.png",
    text: "",
  },
  {
    source: "/assets/images/partners/CHARIN.png",
    text: "",
  },
  {
    source: "/assets/images/partners/GEEE.png",
    text: "",
  },
  {
    source: "/assets/images/partners/ISF.png",
    text: "",
  },
  {
    source: "/assets/images/partners/AVERE.png",
    text: "",
  },
];

const researchPartners = [
  {
    source: "/assets/images/organizations/Oxford.jpg",
    text: "",
  },
];

const mediaPartners = [
  {
    source: "/assets/images/associations/Petrofinder.png",
    text: "",
  },
];
const pageHeaderData = {
  text: "TO OUR 2022 SUPPORTERS, PARTNERS AND SPONSORS!",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/png_bg.png",
};
const GeneralPage = (props) => {
  const theme = useTheme();
  return (
    <EvLayout showNavbar={true}>
      <PageHeader
        text={pageHeaderData.text}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={pageHeaderData.image}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "60px",
                md: "120px",
              },
              maxWidth: "80%",
              textAlign: "center",
              fontWeight: "800",
              color: theme.palette.primary.light,
            }}
          >
            THANK YOU
          </Box>
          <H2
            sx={{
              fontSize: {
                xs: "40px",
                md: "50px",
                maxWidth: "80%",
                textAlign: "center",
              },
            }}
          >
            {pageHeaderData.text}
          </H2>
        </Box>
      </PageHeader>
      <Container
        sx={{
          textAlign: "center",
          placeItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: "30px",
        }}
      >
        <Box sx={{ mt: "30px" }}>
          <SectionTitle>KEY PARTNERS</SectionTitle>
        </Box>{" "}
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
                <LogoWithTitle source={source} text={text} />
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
                <LogoWithTitle source={source} text={text} />
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
                <LogoWithTitle source={source} text={text} />
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
                <LogoWithTitle source={source} text={text} />
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
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
        <SectionTitle>MEDIA PARTNERS</SectionTitle>
        <Grid
          container
          justifyContent={"center"}
          sx={{
            width: "600px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {mediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={4} key={source}>
                <LogoWithTitle source={source} text={text} />
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
export default GeneralPage;
