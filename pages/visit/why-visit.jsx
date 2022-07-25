import { Container , Box} from "@mui/material";

import WhyVisitSection from "pages-sections/why-visit-sections/WhyVisitSection";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
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
        <Box hoverEffect data-aos="fade-up" data-aos-duration={1000}>
          <WhyVisitSection />
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
export default generalPage;
