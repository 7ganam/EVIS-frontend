import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
import FindUsSection from "src/components/EvSections/ContactUsSections/FindUsSection";
import InnovationTeamSection from "src/components/EvSections/ContactUsSections/InnovationTeamSection";
import AboutNirvana from "src/components/EvSections/ContactUsSections/AboutNirvana";
import SponsorsPartnersSection from "src/components/EvSections/ContactUsSections/SponsorsPartnersSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
// ======================================================
// ======================================================

const EvContactUs = () => {
  return (
    <EvLayout showNavbar={true} title={"Contact-Us"}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <FindUsSection />
        <InnovationTeamSection />
      </Container>
      <AboutNirvana />
      <Container>
        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid />
          <PartnersGrid sx={{ mt: 5 }} />
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
export default EvContactUs;
