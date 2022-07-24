import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Section1 from "../../src/pages-sections/why-abu-dhabi/Section1";
import Goal from "../../src/pages-sections/why-abu-dhabi/Goal";
import SponsorsGrid from "../../src/pages-sections/why-abu-dhabi/SponsorsGrid";
// ======================================================
// ======================================================
const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Section1 />
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Goal />
        <Goal />
        <Goal />
      </Container>
      <SponsorsGrid />
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
