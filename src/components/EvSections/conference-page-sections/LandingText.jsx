import React from "react";
import { Paragraph } from "src/components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";
import { H1 } from "src/components/EvComponents/Typography";
import { Button } from "@mui/material";

const LandingText = (props) => {
  const { main, t1, t2, p1, p2, btnText } = props.section;
  return (
    <Box sx={{ mt: "10px", py: 5, px: 6 }}>
      <Box sx={{ color: "grey.700" }}>
        <Paragraph>{main}</Paragraph>
      </Box>
      <Grid container spacing={3} sx={{ pt: 5 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ color: "grey.700" }}>
            <H1>{t1}</H1>
            <Paragraph>{p1}</Paragraph>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ color: "grey.700" }}>
            <H1>{t2}</H1>
            <Paragraph>{p2}</Paragraph>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Box
            sx={{
              mt: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" size="large">
              {" "}
              {btnText}{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingText;
