import React from 'react';
import { useTheme } from "@mui/material";
import {H4} from "components/EvComponents/Typography"
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import BazarButton from "components/BazarButton";

const ReadMoreButton = (props) => {
    const  cmd  = props.cmd;
    const theme = useTheme();
  return (
    <BazarButton sx = {{pl : 0}}>
    <KeyboardDoubleArrowRightOutlinedIcon fontSize="small"  color = "primary" />
    <H4
    color = {theme.palette.primary.main} 
    sx = {{pb : 0.3 , pl : 0.5}}>
        {cmd}
    </H4>
    </BazarButton>
  )
}

export default ReadMoreButton