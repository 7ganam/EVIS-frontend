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
  "/assets/images/agenda/ot1.png",
  "/assets/images/agenda/ot2.png",
  "/assets/images/agenda/ot3.png",
  "/assets/images/agenda/ot4.png",
];
// ======================================================
// ======================================================
const pageHeaderData = {
  text: "Open Tech Sessions",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/techSessions.jpg",
};
const section = {
  text: `Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.`,
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
          <LandingText id={"summit"} section={section} />
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
          <a href="/EVIS2023 Open Tech Sessions Agenda 09_01_2023.pdf" download>
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
