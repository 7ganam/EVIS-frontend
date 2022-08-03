import React from 'react';
import { Box } from "@mui/material";
import ImgGrid from "components/EvSections/why-exhibit-sections/ImgGrid";
import {  BlockTitle } from "components/EvComponents/StyledTypography";


const Footer = (props) => {
  const footer1 = props.footer1;
  const footer2 = props.footer2;
  return (
    <Box sx = {{px : 6}}>
        <ImgGrid data = {footer1} />
        <Box sx={{ textAlign: "center", }}>
            <BlockTitle>KNOWLEDGE PARTNERS</BlockTitle>
        </Box>
        <ImgGrid data = {footer2} />
    </Box>
  )
}

export default Footer