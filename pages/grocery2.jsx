import { Box, Stack } from "@mui/material";
import ShopLayout2 from "components/layouts/ShopLayout2";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import Grocery2SideNav from "components/page-sidenav/Grocery2Sidenav";
import Scrollbar from "components/Scrollbar";
import Setting from "components/Setting";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import GroceryFooter from "pages-sections/grocery2/GroceryFooter";
import GrocerySection1 from "pages-sections/grocery2/GrocerySection1";
import GrocerySection2 from "pages-sections/grocery2/GrocerySection2";
import GrocerySection3 from "pages-sections/grocery2/GrocerySection3";
import GrocerySection6 from "pages-sections/grocery2/GrocerySection6";
import GrocerySection9 from "pages-sections/grocery2/GrocerySection9";
import ProductCarousel from "pages-sections/grocery2/ProductCarousel";
import api from "utils/api/grocery2-shop";

const Home2 = (props) => {
  const {
    section2Services,
    section3Category,
    section4Products,
    section5Products,
    section6CardList,
    section7Products,
    section8Products,
    section9Testimonials,
    groceryNavigationList,
  } = props;
  return (
    <ShopLayout2>
      <Box id="grocerySection" />

      <SidenavContainer
        navFixedComponentID="grocerySection"
        SideNav={() => (
          <Grocery2SideNav groceryNavigation={groceryNavigationList} />
        )}
      >
        <Stack spacing={6}>
          <GrocerySection1 />
          <GrocerySection2 services={section2Services} />
          <GrocerySection3 categories={section3Category} />
          <ProductCarousel title="Featured Items" products={section4Products} />
          <ProductCarousel
            title="Best Seller in Your Area"
            products={section5Products}
          />
          <GrocerySection6 cardList={section6CardList} />
          <ProductCarousel
            title="Best of Home Essentials"
            products={section7Products}
          />
          <ProductCarousel
            title="Snacks, Drinks, Dairy & More"
            products={section8Products}
          />
          <GrocerySection9 testimonials={section9Testimonials} />
          <GroceryFooter />
        </Stack>
      </SidenavContainer>

      <Setting />

      <MobileNavigationBar2>
        <Scrollbar>
          <Grocery2SideNav groceryNavigation={groceryNavigationList} />
        </Scrollbar>
      </MobileNavigationBar2>
    </ShopLayout2>
  );
};

export async function getStaticProps() {
  const section2 = await api.getSection2Services();
  const section4 = await api.getSection4Products();
  const section5 = await api.getSection5Products();
  const section6 = await api.getSection6CardList();
  const section7 = await api.getSection7Products();
  const section8 = await api.getSection8Products();
  const section3 = await api.getSection3Categories();
  const section9 = await api.getSection9Testimonials();
  const groceryNavigationList = await api.getGroceryNavigation();
  return {
    props: {
      groceryNavigationList,
      section2Services: section2,
      section3Category: section3,
      section4Products: section4,
      section5Products: section5,
      section6CardList: section6,
      section7Products: section7,
      section8Products: section8,
      section9Testimonials: section9,
    },
  };
}
export default Home2;
