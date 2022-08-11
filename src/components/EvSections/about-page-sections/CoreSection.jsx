import React from "react";
// import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import QuadImg from 'components/EvComponents/QuadImg';


const CoreSection = (props) => {
  const data = props.data;
  return (
    <Box sx={{ pb: 3 }}>
      <SectionTitle>CORE SECTORS</SectionTitle>
      <QuadImg data = {data} />
    </Box>
  );
};

export default CoreSection;
