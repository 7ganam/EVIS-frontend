import { Button, Card } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { H5 } from "components/Typography";
import React from "react";
import DataListTable from "./table"; // table column list

const tableHeading = [
  {
    id: "orderId",
    label: "Order ID",
    alignRight: false,
  },
  {
    id: "product",
    label: "Product",
    alignRight: false,
  },
  {
    id: "payment",
    label: "Payment",
    alignRight: false,
  },
  {
    id: "amount",
    label: "Amount",
    alignCenter: true,
  },
]; // ===================================================

// ===================================================
const RecentPurchase = ({ data }) => {
  return (
    <Card>
      <FlexBetween px={3} py={2.5}>
        <H5>Recent Purchases</H5>

        <Button size="small" color="info" variant="outlined">
          All Orders
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={data}
        tableHeading={tableHeading}
        type="RECENT_PURCHASE"
      />
    </Card>
  );
};

export default RecentPurchase;
