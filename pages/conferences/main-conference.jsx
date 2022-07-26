import { Box, styled, useTheme, Grid, Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Landing from "pages-sections/conference-page-sections/Landing";
import LandingText from "pages-sections/conference-page-sections/LandingText";


// ======================================================
// ======================================================



const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Landing />
      <Container
        sx={{
          mb: 6,
        }}
      >
        <LandingText />




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
