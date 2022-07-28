import React from 'react';
import ShadedTextContainer from 'components/EvComponents/ShadedTextContainer';
import { SectionTitle } from "components/EvComponents/StyledTypography";
import {  Box  } from "@mui/material";


const data = {
    title: "this is the title",
    text: "The motto for the Summit is “Smart Vehicle Mobility” with four themes (concentrations) that are in perfect synergy with Abu Dhabi, which is witnessing an overwhelming energy greening and sustainability awareness trends. Abu Dhabi has proven to be one of the fastest growing smart cities worldwide adopting the latest green technologies after the successful establishment of Masdar City, the first of its kind worldwide."
}



const ShadedContainerSection = () => {

  return (
    <Box
    sx = {{
        mb : 6,
        mt : 1,
    }}
    >
    <SectionTitle>Shaded Container Section</SectionTitle> {/* To be remove on use*/}
    <ShadedTextContainer data = {data}/>
    </Box>
  )
}

export default ShadedContainerSection