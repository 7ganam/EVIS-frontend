import { Box, Grid, Stack, useTheme } from "@mui/material";

import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import React from "react";
// import Event from "src/pages-sections/why-exhibit-sections/Event";
import CardWithImageButton from "src/components/EvComponents/CardWithImageButton";
// ===============================================================
const FeatureSection = ({ featureList }) => {
  const theme = useTheme();

  return (
    <Box sx={{ px: 5 }}>
      <SectionTitle> EVENT FEATURES </SectionTitle>
      <Grid container spacing={3}>
        {featureList.map((feature, ind) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={ind}>
              <Box
                hoverEffect
                data-aos="fade-up"
                data-aos-duration={1000}
                key={ind}
              >
                {/* <Event feature={feature} /> */}
                <CardWithImageButton feature={feature} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default FeatureSection;
