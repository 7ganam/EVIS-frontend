import React from "react";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";



const MobilityFuture = (props) => {
    const item = props.item;
  return (
    <Box sx={{}}>
      <SectionTitle>FUTURE OF MOBILITY</SectionTitle>
      <TwoColumnBox item={item} />
    </Box>
  );
};

export default MobilityFuture;
