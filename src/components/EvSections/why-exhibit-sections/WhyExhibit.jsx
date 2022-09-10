import React from "react";
import { Box } from "@mui/material";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const WhyExhibit = (props) => {
  const whyExhibit = props.whyExhibit;
  return (
    <Box hoverEffect data-aos="fade-up" data-aos-duration={1000}>
      <Box mt={"30px"}>
        <SectionTitle>Why Exhibit </SectionTitle>
      </Box>
      <TwoColumnBoxV2 item={whyExhibit} />
    </Box>
  );
};

export default WhyExhibit;
