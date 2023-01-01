import React from "react";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { Box } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import Videos from "src/components/EvSections/new-page-sections/Videos";

const OpenTechSection = (props) => {
  const item = props.item;
  const videos = props.videos;
  return (
    <Box id={"open-tech"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "40px", mb: "20px" }}>
        <SectionTitle>Open Tech Sessions</SectionTitle>
      </Box>
      <Box sx={{ mb: "40px" }}>
        <TwoColumnBoxV2 item={item} imgPosition="left"></TwoColumnBoxV2>
      </Box>
      <Box mt={5}>
        <Videos videosList={videos} />
      </Box>
    </Box>
  );
};

export default OpenTechSection;
