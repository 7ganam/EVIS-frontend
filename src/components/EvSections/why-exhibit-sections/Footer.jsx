import React from 'react';
import { Box , Grid ,Container , useTheme , Card} from "@mui/material";
import SponsorsImageGridSection from "components/EvSections/SponsorsImageGridSection";
import {  BlockTitle } from "components/EvComponents/StyledTypography";


const Footer = (props) => {
  const footer1 = props.footer1;
  const footer2 = props.footer2;
  return (
    <Box>
        <SponsorsImageGridSection data = {footer1} />
        <Box sx={{ textAlign: "center", }}>
            <BlockTitle>KNOWLEDGE PARTNERS</BlockTitle>
        </Box>
        <SponsorsImageGridSection data = {footer2} />
    </Box>
  )
}

export default Footer