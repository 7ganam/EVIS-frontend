import { Box } from "@mui/material";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import { OrderDetails } from "pages-sections/admin";
import React from "react";

const OrderEdit = () => {
  return (
    <Box py={4}>
      <H3 mb={2}>Order Details</H3>

      <OrderDetails />
    </Box>
  );
}; // =============================================================================

OrderEdit.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default OrderEdit;
