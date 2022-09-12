import React from "react";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { Box } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const Exhibition = (props) => {
  const item = props.item;
  return (
    <Box id={"exhibition"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "30px", mb: "20px" }}>
        <SectionTitle>Exhibition</SectionTitle>
      </Box>
      <Box>
        {" "}
        <TwoColumnBoxV2 item={item} />
      </Box>
    </Box>
  );
};

export default Exhibition;
