import React from "react";
import FactBox from "src/components/EvComponents/FactBox";
import { Box, useTheme, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const data = [
  {
    title: "60%",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
  },
  {
    title: "50%",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
  },
  {
    title: "6%",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
  },
  {
    title: "10%",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
  },
];

const FactBannerSection = () => {
  const theme = useTheme();
  return (
    <Box>
      <SectionTitle>middle banner </SectionTitle>{" "}
      {/* outer box and this title is to be removed on usage */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          my: 6,
          px: 2,
          height: "auto",
        }}
      >
        <Grid container spacing={3}>
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

export default FactBannerSection;
