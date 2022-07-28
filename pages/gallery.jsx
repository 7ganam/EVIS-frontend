import { Container , Box } from "@mui/material";
import CardsSection from "components/EvSections/CardsSection";
import FontsSections from "components/EvSections/FontsSections";
import TextSection from "components/EvSections/TextSection";
import ImageCardsSection from "components/EvSections/ImageCardsSection";
import ButtonsSection from "components/EvSections/ButtonsSection";
import ShadedContainerSection from "components/EvSections/ShadedContainerSection";

import EvLayout from "components/layouts/EvLayout";

import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================
const EvHome = (props) => {
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <CardsSection />
        <FontsSections />
        <TextSection />
        <ImageCardsSection />
        <ButtonsSection />
      </Container>
      <Box
      sx = {{
          mb : 6,
          mt : 1,
      }}
      >
      <ShadedContainerSection />
      </Box>

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
export default EvHome;
