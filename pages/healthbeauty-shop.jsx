import { Box, Stack } from "@mui/material";
import ShopLayout2 from "components/layouts/ShopLayout2";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import PageFooter from "components/page-footer/PageFooter";
import HealthBeautySidenav from "components/page-sidenav/HealthBeautySideNav";
import Setting from "components/Setting";
import SidenavContainer from "components/sidenav-container/SidenavContainer";
import HealthBeautySection1 from "pages-sections/health-beauty/HealthBeautySection1";
import HealthBeautySection2 from "pages-sections/health-beauty/HealthBeautySection2";
import HealthBeautySection3 from "pages-sections/health-beauty/HealthBeautySection3";
import HealthBeautySection4 from "pages-sections/health-beauty/HealthBeautySection4";
import HealthBeautyServices from "pages-sections/health-beauty/HealthBeautyServices";
import api from "utils/api/healthbeauty-shop"; // ===============================================

// ===============================================
const HealthAndBeauty = (props) => {
  const {
    healthBeautyServices,
    healthBeautyNavList,
    topNewProducts,
    healthBeautyProducts,
  } = props;
  return (
    <ShopLayout2>
      <Box id="healthBeautySection1">
        <HealthBeautySection1 />
      </Box>

      <SidenavContainer
        navFixedComponentID={"healthBeautySection1"}
        SideNav={() => <HealthBeautySidenav navList={healthBeautyNavList} />}
      >
        <Stack spacing={6}>
          <HealthBeautySection2 />
          <HealthBeautySection3 productsData={topNewProducts} />
          <HealthBeautySection4 productsData={healthBeautyProducts} />
          <HealthBeautyServices serviceData={healthBeautyServices} />
          <PageFooter
            id="footer"
            sx={{
              borderRadius: "8px",
              backgroundColor: "primary.800",
            }}
          />
        </Stack>
      </SidenavContainer>

      <Setting />

      <MobileNavigationBar2>
        <HealthBeautySidenav navList={healthBeautyNavList} />
      </MobileNavigationBar2>
    </ShopLayout2>
  );
};

export async function getStaticProps() {
  const topNewProducts = await api.getTopNewProducts();
  const healthBeautyServices = await api.getHealthBeautyServices();
  const healthBeautyProducts = await api.getHealthBeautyProducts();
  const healthBeautyNavList = await api.getHealthBeautyNavigation();
  return {
    props: {
      topNewProducts,
      healthBeautyNavList,
      healthBeautyServices,
      healthBeautyProducts,
    },
  };
}
export default HealthAndBeauty;
