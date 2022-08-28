import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import LandingText from "components/EvSections/agenda-page-sections/LandingText";
import { SectionTitle } from "components/EvComponents/StyledTypography";

// ======================================================
// ======================================================

const section = {
  text: `Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.
`,
};

const generalPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <SectionTitle>Open Tech Sessions</SectionTitle>
        <LandingText id={"summit"} section={section} />
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
