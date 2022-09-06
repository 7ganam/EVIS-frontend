import React from "react";
import { CountdownMonths } from "src/components/EvComponents/CountdownMonths";
import { Box } from "@mui/system";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Card } from "@mui/material";
import { SectionSubTitle } from "@/components/StyledTypography";

function CountDownSection() {
  return (
    <Card sx={{ p: "20px" }} elevation={2}>
      <SectionSubTitle text={"Event Count Down"} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "50px",
        }}
      >
        <CountdownMonths
          sx={{ fontSize: { xs: "25px", md: "70px" } }}
        ></CountdownMonths>
      </Box>
    </Card>
  );
}

export default CountDownSection;
