import { Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import PageFooter from "components/page-footer/PageFooter";
import AllProducts from "pages-sections/grocery3/AllProducts";
import DiscountProducts from "pages-sections/grocery3/DiscountProducts";
import GroceryShopSection1 from "pages-sections/grocery3/Grocery3ShopSection1";
import TopSailedProducts from "pages-sections/grocery3/TopSailedProducts";
import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================
const EvHome = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;
  return (
    <EvLayout showNavbar={true}>
      <GroceryShopSection1 />

      <Container
        sx={{
          mb: 6,
        }}
      >
        <DiscountProducts offerProducts={offerProducts} />
        <TopSailedProducts productsData={topSailedProducts} />
        <AllProducts productsData={allProducts} />
      </Container>

      <PageFooter />

      <MobileNavigationBar />
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
