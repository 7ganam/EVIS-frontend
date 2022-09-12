import React from "react";
import { Paragraph } from "src/components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";

const LandingText = (props) => {
  const { text } = props.section;
  return (
    <Box sx={{ mt: "10px" }}>
      <Grid container spacing={3} sx={{ pt: 1 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box>
            <Paragraph>
              <Box sx={{ whiteSpace: "pre-wrap" }}>{text}</Box>
            </Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingText;
