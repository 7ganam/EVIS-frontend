import React from 'react';
import { Box } from "@mui/material";
import SponsorsImageGridSection from "components/EvSections/SponsorsImageGridSection";
import {  BlockTitle } from "components/EvComponents/StyledTypography";


const Footer = (props) => {
  const footer1 = props.footer1;
  const footer2 = props.footer2;
  return (
    <Box sx = {{px : 6}}>
        <SponsorsImageGridSection data = {footer1} />
        <Box sx={{ textAlign: "center", }}>
            <BlockTitle>KNOWLEDGE PARTNERS</BlockTitle>
        </Box>
        <SponsorsImageGridSection data = {footer2} />
    </Box>
  )
}

export default Footer