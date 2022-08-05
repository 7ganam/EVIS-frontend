import React from "react";
import { Paragraph } from "components/EvComponents/Typography";
import { BlockTitle } from "components/EvComponents/StyledTypography";

import { Box, Grid } from "@mui/material";

const TextField = (props) => {
  const { title, ps, lst } = props.section;
  return (
    <Box sx={{ pt: 3, px: 6 }}>
      <BlockTitle>{title}</BlockTitle>
      <Grid container>
        {ps?.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} key={index}>
              <Box sx={{ pb: 3 }} key={index}>
                <Paragraph>{item}</Paragraph>
              </Box>
            </Grid>
          );
        })}
        {lst?.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} key={index}>
              <Box sx={{ pb: "3px" }} key={index}>
                <Paragraph>{item}</Paragraph>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TextField;
