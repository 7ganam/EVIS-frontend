import React from "react";
import { Grid, Box } from "@mui/material";
import { BlockTitle } from "components/EvComponents/StyledTypography";
import { Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";




const TwoColumnContent = (img , title , text ,direction) => {
    if(direction === "left"){
        return ( <Grid container spacing={5} >
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{}}>
            <Image
              width={"100%"}
              height={"100%"}
              mb={0}
              src={img}
              alt="logo"
              sx={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{}}>
            <BlockTitle> {title} </BlockTitle>
            <Paragraph>
                {text}
            </Paragraph>
          </Box>
        </Grid>
      </Grid>)

    } 
    if (direction === "right"){
        return( <Grid container spacing={5}>
        <Grid item md={6} sm={12} xs={12} order = {{xs : 2 , md : 1}}>
          <Box sx={{}}>
            <BlockTitle> {title} </BlockTitle>
            <Paragraph>
                {text}
            </Paragraph>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12} order = {{xs : 1 , md : 2}}>
          <Box sx={{}}>
            <Image
              width={"100%"}
              height={"100%"}
              mb={0}
              src={img}
              alt="logo"
              sx={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>)
    }


}


const TwoColumnBox = (props) => {
  const { img , title , text , direction } = props.item;
  return (
    <Box sx={{ pt: "50px", px: 6 }}>
        {TwoColumnContent(img , title , text , direction)}
    </Box>
  );
};

export default TwoColumnBox;
