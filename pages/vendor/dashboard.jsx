import { Box, Grid } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Analytics from "pages-sections/dashboard/Analytics";
import Card1 from "pages-sections/dashboard/Card1";
import RecentPurchase from "pages-sections/dashboard/RecentPurchase";
import Section3 from "pages-sections/dashboard/Section3";
import StockOutProducts from "pages-sections/dashboard/StockOutProducts";
import WishCard from "pages-sections/dashboard/WishCard";
import api from "utils/api/dashboard"; // =============================================================================

VendorDashboard.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function VendorDashboard(props) {
  const { cardList, recentPurchase, stockOutProducts } = props;
  return (
    <Box py={4}>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <WishCard />
        </Grid>

        <Grid container item md={6} xs={12} spacing={3}>
          {cardList.map((item) => (
            <Grid item md={6} sm={6} xs={12} key={item.id}>
              <Card1
                title={item.title}
                color={item.color}
                amount1={item.amount1}
                amount2={item.amount2}
                percentage={item.percentage}
                status={item.status === "down" ? "down" : "up"}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item xs={12}>
          <Section3 />
        </Grid>

        <Grid item xs={12}>
          <Analytics />
        </Grid>

        <Grid item md={7} xs={12}>
          <RecentPurchase data={recentPurchase} />
        </Grid>

        <Grid item md={5} xs={12}>
          <StockOutProducts data={stockOutProducts} />
        </Grid>
      </Grid>
    </Box>
  );
}
export const getStaticProps = async () => {
  const cardList = await api.getAllCard();
  const recentPurchase = await api.recentPurchase();
  const stockOutProducts = await api.stockOutProducts();
  return {
    props: {
      cardList,
      recentPurchase,
      stockOutProducts,
    },
  };
};
