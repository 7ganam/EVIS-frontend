import React from "react";
import { useTheme, Grid, Container, Box } from "@mui/material";
import { H2 , Paragraph , H6 , H5 } from "components/EvComponents/Typography";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import BazarButton from "components/BazarButton";

const SectionWithText = (props) => {
    const theme = useTheme();
    const { title, text } = props.data;
  return <Box sx = {{pt : 2}}>
    <H2
    color={theme.palette.primary.main}
    >
        {title}
    </H2>
    <Paragraph
    color = "grey.600"
    >
        {text}
    </Paragraph>
    <BazarButton>
    <KeyboardDoubleArrowRightOutlinedIcon fontSize="inherit"  color = "primary" />
    <H6
    color = {theme.palette.primary.main} 
    sx = {{pb : 0.3 , pl : 0.5}}>
        Do something here
    </H6>
    </BazarButton>

  </Box>;
};

export default SectionWithText;
