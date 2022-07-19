import { Box, Grid, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import Card2 from "./Card2";
import {
  marketShareChartOptions,
  productShareChartOptions,
  totalOrderChartOptions,
  weeklyChartOptions,
} from "./chartsOptions"; // apext chart instance

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Section3 = () => {
  const theme = useTheme(); // weekly chart series

  const series = [
    {
      name: "Weekly",
      data: [7600, 8500, 10100, 9800, 8700, 1050, 9100],
    },
  ];
  const totalOrderseries = [
    {
      name: "Weekly",
      data: [7600, 8500, 10100, 9800, 8700, 1050, 9100],
    },
  ];
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card2 title="Weekly Sales" percentage="25.25%" amount="$10,240">
            <ReactApexChart
              type="bar"
              height={100}
              series={series}
              options={weeklyChartOptions(theme)}
            />
          </Card2>
        </Grid>

        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card2 title="Product Share" percentage="10.25%" amount="39.56%">
            <ReactApexChart
              height={130}
              series={[75]}
              type="radialBar"
              options={productShareChartOptions(theme)}
            />
          </Card2>
        </Grid>

        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card2 title="Total Order" percentage="2.65%" amount="$12,260">
            <ReactApexChart
              type="area"
              height={80}
              series={totalOrderseries}
              options={totalOrderChartOptions(theme)}
            />
          </Card2>
        </Grid>

        <Grid item xl={3} lg={3} md={6} xs={12}>
          <Card2 title="Market Share" percentage="2.65%" amount="$12,260">
            <ReactApexChart
              height={130}
              type="radialBar"
              series={[44, 55, 67]}
              options={marketShareChartOptions(theme)}
            />
          </Card2>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
