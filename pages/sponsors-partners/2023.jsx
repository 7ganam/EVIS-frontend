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

const mediaPartners = [
  {
    source: "/assets/images/associations/Nationshield.png",
    text: "",
    link: "http://www.nationshield.ae",
  },

  {
    source: "/assets/images/organizations/highway2.png",
    text: "",
    link: "https://highways.today/",
  },
  {
    source: "/assets/images/organizations/E-Vehicle.png",
    text: "",
    link: "https://e-vehicleinfo.com/",
  },
  {
    source: "/assets/images/organizations/Media7.png",
    text: "",
    link: " https://media7.com",
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
      {/* <PageHeader
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
      </PageHeader> */}
      <Container
        sx={{
          textAlign: "center",
          placeItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: "110px",
        }}
      >
        <SectionTitle>MEDIA PARTNERS</SectionTitle>
        <Grid
          justifyContent={"center"}
          container
          sx={{
            width: "600px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {mediaPartners.map(({ source, text, link }) => {
            return (
              <Grid item xs={12} sm={4} key={source}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a target="_blank" href={link} rel="noopener noreferrer">
                    <LogoWithTitle source={source} text={text} />
                  </a>
                </Box>
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
