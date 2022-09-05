import { Box, Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
import LandingText from "src/components/EvSections/agenda-page-sections/LandingText";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import PageHeader from "src/components/EvComponents/PageHeader";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { BlockTitle } from "src/components/EvComponents/StyledTypography";
import TopicsSection from "src/components/EvSections/agenda-page-sections/TopicsSection";
import { H1, H2, Paragraph } from "@/components/Typography";
import { useTheme } from "@emotion/react";
import { BigButton } from "src/components/EvComponents/Buttons";
import { Card } from "@mui/material";

// ======================================================
// ======================================================
const pageHeaderData = {
  text: "Summit",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/summit.png",
};
const section = {
  text: `The summit runs over 2 consecutive days and features more than 10-panel discussions, 10 keynote presentations, speeches, and thought leadership sessions from the top industry leaders and experts from across the e-mobility value chain from all over the world, including leading electric vehicle manufacturers (OEMs), charging point operations (CPOs), E-Mobility Services Providers (MSP), dealerships, banks, government entities, investment firms, insurance companies, research institutions, think tanks and more. 
`,
};
const itemData1 = {
  img: "/assets/images/ev-home/speaker.jpg",
  title: "",
  ps: [
    "The summit runs over 2 consecutive days and features more than 10-panel discussions, 10 keynote presentations, speeches, and thought leadership sessions from the top industry leaders and experts from across the e-mobility value chain from all over the world, including leading electric vehicle manufacturers (OEMs), charging point operations (CPOs), E-Mobility Services Providers (MSP), dealerships, banks, government entities, investment firms, insurance companies, research institutions, think tanks and more.EVIS 2022 features speakers from leading organizations such as BMW Group, ABB, Siemens, Audi, Renault, Transport for London, CharIN, The Economist, TotalEnergies, Uber, BP Ventures, Stellantis, Hager Group, Bridgestone, BritishVolt, and more. ",
  ],
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
        <Box sx={{ mt: "40px" }}>
          <TwoColumnBoxV2 item={itemData1} imgPosition="left"></TwoColumnBoxV2>
        </Box>
      </Container>
      <TopicsSection></TopicsSection>
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
