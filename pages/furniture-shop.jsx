import { Box, Container, Stack, styled } from "@mui/material";
import ShopLayout2 from "components/layouts/ShopLayout2";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import PageFooter from "components/page-footer/PageFooter";
import SideNavbar from "components/page-sidenav/SideNavbar";
import Setting from "components/Setting";
import FurnitureShopAllProducts from "pages-sections/furnitureshop/FurnitureShopAllProducts";
import FurnitureShopSection1 from "pages-sections/furnitureshop/FurnitureShopSection1";
import FurnitureShopSection2 from "pages-sections/furnitureshop/FurnitureShopSection2";
import TopProductsSection from "pages-sections/furnitureshop/TopProductsSection";
import TopSellingProducts from "pages-sections/furnitureshop/TopSellingProducts";
import { useEffect, useRef, useState } from "react";
import api from "utils/api/furniture-shop";
import { layoutConstant } from "utils/constants";
const StyledContainer = styled(Container)(({ theme }) => ({
  gap: "1.75rem",
  display: "flex",
  padding: "0 !important",
  ".sidenav": {
    top: 0,
    bottom: 0,
    position: "relative",
    transition: "all 350ms ease-in-out",
    width: layoutConstant.grocerySidenavWidth,
    minWidth: layoutConstant.grocerySidenavWidth,
    // height: `calc(100vh - ${layoutConstant.headerHeight}px)`,
    "& .MuiPaper-root": {
      borderRadius: 0,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  ".pageContent": {
    left: "unset",
    position: "relative",
    width: `calc(100% - ${layoutConstant.grocerySidenavWidth}px)`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
})); // ======================================================================

// ======================================================================
const FurnitureShop = (props) => {
  const {
    furnitureShopNavList,
    topNewProducts,
    topSellingProducts,
    furnitureProducts,
  } = props;
  const pageContentRef = useRef();
  const [sidebarHeight, setSidebarHeight] = useState(0);
  useEffect(() => setSidebarHeight(pageContentRef.current.offsetHeight), []);
  return (
    <ShopLayout2 showNavbar={false}>
      <FurnitureShopSection1 />

      <Container>
        <StyledContainer>
          <Box className="sidenav">
            <SideNavbar
              lineStyle="dash"
              sidebarStyle="style2"
              navList={furnitureShopNavList}
              sidebarHeight={sidebarHeight || "85vh"}
            />
          </Box>

          <Box className="pageContent" ref={pageContentRef}>
            <FurnitureShopSection2 />
          </Box>
        </StyledContainer>

        <Stack spacing={6} my={6}>
          <TopProductsSection productsData={topNewProducts} />
          <TopSellingProducts productsData={topSellingProducts} />
          <FurnitureShopAllProducts productsData={furnitureProducts} />
        </Stack>
      </Container>

      <PageFooter
        id="footer"
        sx={{
          backgroundColor: "primary.main",
        }}
      />

      <Setting />

      <MobileNavigationBar2>
        <SideNavbar
          navList={furnitureShopNavList}
          lineStyle="dash"
          sidebarStyle="style2"
        />
      </MobileNavigationBar2>
    </ShopLayout2>
  );
};

export async function getStaticProps() {
  const topNewProducts = await api.getTopNewProducts();
  const furnitureProducts = await api.getFurnitureProducts();
  const topSellingProducts = await api.getTopSellingProducts();
  const furnitureShopNavList = await api.getFurnitureShopNavList();
  return {
    props: {
      topNewProducts,
      furnitureProducts,
      topSellingProducts,
      furnitureShopNavList,
    },
  };
}
export default FurnitureShop;
