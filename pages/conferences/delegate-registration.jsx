import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Section2 from "components/EvSections/DelegateRegistrationSections/Section2";
import Section3 from "components/EvSections/DelegateRegistrationSections/Section3";
import Section1Table from "components/EvSections/DelegateRegistrationSections/Section1Table";
// import Table from "components/EvSections/conference-page-sections/Table";
// ======================================================
// ======================================================
const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        {/* <Table /> */}
        <Section1Table />
        <Section2 />
        <Section3 />
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
