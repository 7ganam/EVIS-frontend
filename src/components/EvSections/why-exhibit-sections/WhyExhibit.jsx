import React from "react";
import { Box } from "@mui/material";
import TwoColumnBox from "src/components/EvComponents/TwoColumnBox";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const WhyExhibit = (props) => {
  const whyExhibit = props.whyExhibit;
  return (
    <Box hoverEffect data-aos="fade-up" data-aos-duration={1000}>
      <SectionTitle>Why Exhibit </SectionTitle>
      <TwoColumnBox item={whyExhibit} />
    </Box>
  );
};

export default WhyExhibit;
