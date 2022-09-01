import React from "react";
import { Paragraph } from "components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const SummitSection = (props) => {
  return (
    <Box id={"summit"} sx={{ scrollMarginTop: "250px" }}>
      <SectionTitle>Summit</SectionTitle>
      <Grid container spacing={3} sx={{ pt: 1 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Box sx={{ height: "300px", border: "1px solid black" }}>
            <Paragraph>{"to be filled by expert"}</Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SummitSection;
