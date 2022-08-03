import React from "react";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";



const CoreSection = (props) => {
    const items = props.items;
  return (
    <Box sx={{ px: 6 , pb : 3 }}>
        <SectionTitle>CORE SECTORS</SectionTitle>
        {items.map((item, index) => {
            return (<TwoColumnBox item = {item} key = {index} />)
        })}
    </Box>
  )
}

export default CoreSection