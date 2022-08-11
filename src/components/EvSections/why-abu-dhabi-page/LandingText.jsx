import React from "react";
import { Paragraph } from "components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";

const LandingText = (props) => {
  const { p1, p2 } = props.section;
  return (
    <Box sx={{  px: 6 }}>
      <Grid container spacing={3} sx={{ pt: 5 }}>
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
      </Grid>
    </Box>
  );
};

export default LandingText;
