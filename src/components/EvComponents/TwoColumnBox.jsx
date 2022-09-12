import React from "react";
import { Grid, Box } from "@mui/material";
import { BlockTitle } from "src/components/EvComponents/StyledTypography";
import { Paragraph } from "src/components/EvComponents/Typography";
import Image from "src/components/BazarImage";

const TwoColumnContent = (img, title, ps, direction) => {
  if (direction === "left") {
    return (
      <Grid container spacing={5}>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{}}>
            <Image
              width={"100%"}
              // height={"320px"}
              mb={0}
              src={img}
              alt="logo"
              sx={{ objectFit: "cover", aspectRatio: " 16 / 10" }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ pl: { md: "20px" } }}>
            <BlockTitle> {title} </BlockTitle>
            {ps?.map((item, index) => {
              return (
                <Box sx={{ pt: 1 }} key={index}>
                  <Paragraph>{item}</Paragraph>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    );
  }
  if (direction === "right") {
    return (
      <Grid container spacing={5}>
        <Grid item md={6} sm={12} xs={12} order={{ xs: 2, md: 1 }}>
          <Box sx={{}}>
            <BlockTitle> {title} </BlockTitle>
            {ps?.map((item, index) => {
              return (
                <Box sx={{ pt: 1 }} key={index}>
                  <Paragraph>{item}</Paragraph>
                </Box>
              );
            })}
          </Box>
        </Grid>

        <Grid item md={6} sm={12} xs={12} order={{ xs: 1, md: 2 }}>
          <Box sx={{ pl: { md: "20px" } }}>
            <Image
              width={"100%"}
              // height={"320px"}
              mb={0}
              src={img}
              alt="logo"
              sx={{ objectFit: "cover", aspectRatio: " 16 / 10" }}
            />
          </Box>
        </Grid>
      </Grid>
    );
  }
};

const TwoColumnBox = (props) => {
  const { img, title, ps, direction } = props.item;
  return (
    <Box sx={{ pt: "0px", px: 6 }}>
      {TwoColumnContent(img, title, ps, direction)}
    </Box>
  );
};

export default TwoColumnBox;
