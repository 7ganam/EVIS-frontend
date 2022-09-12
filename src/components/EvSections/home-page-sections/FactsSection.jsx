import React from "react";
import FactBox from "src/components/EvComponents/FactBox";
import { Box, useTheme, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const FactsSection = ({ data }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          my: 6,
          px: 2,
          height: "auto",
        }}
      >
        <Grid container spacing={3} justifyContent={"center"}>
          {data.map((item, index) => {
            return (
              <Grid item xs={12} md={3} key={index}>
                <FactBox data={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default FactsSection;
