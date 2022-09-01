import React from "react";
import TwoColumnBoxV2 from "components/EvComponents/TwoColumnBoxV2";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const Exhibition = (props) => {
  const item = props.item;
  return (
    <Box id={"exhibition"} sx={{ scrollMarginTop: "250px" }}>
      <SectionTitle>Exhibition</SectionTitle>
      <TwoColumnBoxV2 item={item} />
    </Box>
  );
};

export default Exhibition;
