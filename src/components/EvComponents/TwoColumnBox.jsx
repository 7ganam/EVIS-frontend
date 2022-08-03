import React from "react";
import { Grid, Box } from "@mui/material";
import { BlockTitle } from "components/EvComponents/StyledTypography";
import { Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";

const TwoColumnContent = (img, title, p1, p2, p3, p4, direction) => {
  if (direction === "left") {
    return (
      <Grid container spacing={2} sx={{ p: 0 }} justifyContent="flex-start">
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
            <Box sx={{ mt: "10px" }}>
              <Paragraph>{p1}</Paragraph>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Paragraph>{p2}</Paragraph>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Paragraph>{p3}</Paragraph>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Paragraph>{p4}</Paragraph>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
  if (direction === "right") {
    return (
      <Grid container spacing={2}>
        <Grid item md={6} sm={12} xs={12} order={{ xs: 2, md: 1 }}>
          <Box sx={{}}>
            <BlockTitle> {title} </BlockTitle>
            <Box sx={{ mt: "10px" }}>
              <Paragraph>{p1}</Paragraph>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Paragraph>{p2}</Paragraph>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Paragraph>{p3}</Paragraph>
            </Box>
            <Box sx={{ pt: 2 }}>
              <Paragraph>{p4}</Paragraph>
            </Box>
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
  const { img, title, p1, p2, p3, p4, direction } = props.item;
  return (
    <Box sx={{ pt: "50px", px: 6 }}>
      {TwoColumnContent(img, title, p1, p2, p3, p4, direction)}
    </Box>
  );
};

export default TwoColumnBox;
