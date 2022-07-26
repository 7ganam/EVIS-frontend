import { Box, Grid, Stack, useTheme } from "@mui/material";

import { SectionTitle } from "components/StyledTypography";

import React from "react";
import Event from "pages-sections/why-exhibit-sections/Event";
// ===============================================================
const FeatureSection = ({ featureList }) => {
  const theme = useTheme();

  return (
    <Box sx={{}}>
      <SectionTitle text={"EVENT FEATURES"} />
      <Stack>
        {featureList.map((feature, ind) => {
          return (
            <Box
              hoverEffect
              data-aos="fade-up"
              data-aos-duration={1000}
              key={ind}
            >
              <Event feature={feature} />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default FeatureSection;
