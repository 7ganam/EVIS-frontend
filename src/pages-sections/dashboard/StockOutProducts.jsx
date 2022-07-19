import { Button, Card } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import { H5 } from "components/Typography";
import React from "react";
import DataListTable from "./table"; // table column list

const tableHeading = [
  {
    id: "product",
    label: "Product",
    alignRight: false,
  },
  {
    id: "stock",
    label: "Stock",
    alignRight: false,
  },
  {
    id: "amount",
    label: "Amount",
    alignCenter: true,
  },
]; // ======================================================

// ======================================================
const StockOutProducts = ({ data }) => {
  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <FlexBetween px={3} py={2.5}>
        <H5>Stock Out Products</H5>

        <Button size="small" color="info" variant="outlined">
          All Products
        </Button>
      </FlexBetween>

      <DataListTable
        dataList={data}
        tableHeading={tableHeading}
        type="STOCK_OUT"
      />
    </Card>
  );
};

export default StockOutProducts;
