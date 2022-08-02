import React from "react";
import { Grid, Box } from "@mui/material";
import { BlockTitle } from "components/EvComponents/StyledTypography";
import { Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";




const TwoColumnContent = (img , title , p1 , p2 , p3 ,direction) => {
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
                {p1}
            </Paragraph>
            <Paragraph sx = {{pt : 2}}>
                {p2}
            </Paragraph>
            <Paragraph sx = {{pt : 2}}>
                {p3}
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
            <Box>
            <Paragraph>
                {p1}
            </Paragraph>
            </Box>
            <Box sx = {{pt : 2}}>
            <Paragraph >
                {p2}
            </Paragraph>
            </Box>
            <Box sx = {{pt : 2}}>
            <Paragraph>
                {p3}
            </Paragraph>
            </Box>
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
  const { img , title , p1 , p2 , p3 , direction } = props.item;
  return (
    <Box sx={{ pt: "50px", px: 6 }}>
        {TwoColumnContent(img , title , p1 , p2 , p3  , direction)}
    </Box>
  );
};

export default TwoColumnBox;
