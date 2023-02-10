import React from "react";
import { Paragraph } from "src/components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const LandingText = (props) => {
  const ps = props.paragraph;
  const topic = props.topic;
  return (
    <Box sx={{ mt: "35px" }}>
      <Box sx={{ mb: "15px" }}>
        <SectionTitle>About EVIS</SectionTitle>
      </Box>
      <Grid container spacing={3} sx={{ pt: 1 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Paragraph>
            <Box sx={{ whiteSpace: "pre-wrap" }}>{ps}</Box>
          </Paragraph>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingText;
