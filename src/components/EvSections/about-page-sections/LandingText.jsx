import React from "react";
import { Paragraph } from "src/components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const LandingText = (props) => {
  const { p1, p2, p3 } = props.section;
  return (
    <Box sx={{ mt: "10px" }}>
      <SectionTitle>About EVIS</SectionTitle>
      <Grid container spacing={3} sx={{ pt: 1 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Paragraph>{p1}</Paragraph>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Paragraph>{p2}</Paragraph>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Paragraph>{p3}</Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingText;
