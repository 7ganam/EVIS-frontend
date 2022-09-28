import { Box, Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
import LandingText from "src/components/EvSections/agenda-page-sections/LandingText";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import PageHeader from "src/components/EvComponents/PageHeader";
import React from "react"; // styled component
import CarouselSection from "@/components/EvSections/agenda-page-sections/CarouselSection";
import { BigButton } from "@/components/EvComponents/Buttons";
import DownloadingIcon from "@mui/icons-material/Downloading";

const images = [
  "/assets/images/summit-1.jpg",
  "/assets/images/summit-2.jpg",
  "/assets/images/summit-3.jpg",
];
// ======================================================
// ======================================================
const pageHeaderData = {
  text: "Conference",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/summit.png",
};
const section = {
  text: `The EVIS conference will provide a world-class conference experience for our delegates by bringing together the brightest minds of the industry as speakers at a state-of-the-art venue to share their expertise. 

Each conference day kicks off with a notable keynote address followed by a series of panel discussions with top industry leaders discussing the most important market disruptors of the last year and what they expect to see in the years to come.`,
};

const GeneralPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <PageHeader
        text={pageHeaderData.text}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={pageHeaderData.image}
      ></PageHeader>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mt: "40px" }}>
          <LandingText section={section} />
        </Box>
        <Box sx={{ mt: "40px", mb: "20px" }}>
          <SectionTitle> Agenda </SectionTitle>
        </Box>
        <Box sx={{ width: "80%", margin: "auto" }}>
          <CarouselSection images={images}></CarouselSection>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center ",
            mt: "40px",
          }}
        >
          <a href="/summit-agenda.pdf" download>
            <BigButton
              content={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { md: "row", xs: "column" },
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <span>Download Agenda!</span>
                  <DownloadingIcon
                    sx={{ height: "40px", width: "40px", ml: 2 }}
                  ></DownloadingIcon>
                </Box>
              }
            />
          </a>
        </Box>
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
