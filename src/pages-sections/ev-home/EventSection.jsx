import { Box, Grid, Stack, useTheme } from "@mui/material";

import { SectionTitle } from "src/components/StyledTypography";

import React from "react";
import EventFeature from "src/pages-sections/ev-home/EventFeature";
// ===============================================================
const EventSection = ({ featureList }) => {
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
              <EventFeature feature={feature} />
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default EventSection;
