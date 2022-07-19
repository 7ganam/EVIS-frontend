import { Add } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import GoldPackageIcon from "components/icons/GoldPackageIcon";
import PremiumPackageIcon from "components/icons/PremiumPackageIcon";
import SilverPackageIcon from "components/icons/SilverPackageIcon";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import { SellerPackageCard } from "pages-sections/admin";
import React from "react";
const packageList = [
  {
    id: 1,
    price: "$25",
    packageName: "Premium",
    Icon: PremiumPackageIcon,
    features: [
      "Product Upload Limit: 250",
      "Commission: 5%",
      "Package Duration: 1,095 days",
    ],
  },
  {
    id: 2,
    price: "$15",
    packageName: "Gold",
    Icon: GoldPackageIcon,
    features: [
      "Product Upload Limit: 250",
      "Commission: 5%",
      "Package Duration: 1,095 days",
    ],
  },
  {
    id: 3,
    price: "$10",
    packageName: "Silver",
    Icon: SilverPackageIcon,
    features: [
      "Product Upload Limit: 250",
      "Commission: 5%",
      "Package Duration: 1,095 days",
    ],
  },
]; // =============================================================================

SellerPackage.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function SellerPackage() {
  return (
    <Box py={4}>
      <FlexBetween mb={2}>
        <H3>Seller Packages</H3>

        <Button color="info" variant="contained" startIcon={<Add />}>
          Add New Package
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        {packageList.map((item) => (
          <Grid item xl={4} md={6} xs={12} key={item.id}>
            <SellerPackageCard listItem={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
