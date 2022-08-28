import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import LandingText from "components/EvSections/agenda-page-sections/LandingText";
import { SectionTitle } from "components/EvComponents/StyledTypography";

// ======================================================
// ======================================================

const section = {
  text: `The EVIS conference will provide a world-class conference experience for our delegates by bringing together the brightest minds of the industry as speakers at a state-of the art venue to share their expertise. 

Each conference day kicks off with a notable keynote address followed by a roundtable panel of top industry leaders discussing the most important market disruptors of the last year and what they expect to see in the years to come.
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
        <SectionTitle>Summit</SectionTitle>
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
