import React from "react";
import { CountdownMonths } from "src/components/EvComponents/CountdownMonths";
import { Box } from "@mui/system";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Card } from "@mui/material";

function CountDownSection() {
  return (
    <Card sx={{ mt: "30px" }}>
      <SectionTitle>Event Count Down</SectionTitle>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CountdownMonths
          sx={{ fontSize: { xs: "25px", md: "50px" } }}
        ></CountdownMonths>
      </Box>
    </Card>
  );
}

export default CountDownSection;
