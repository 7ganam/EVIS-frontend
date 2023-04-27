import React from "react";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import CardWithImageButton2 from "src/components/EvComponents/CardWithImageButton2";

const WhatIsNew = (props) => {
  const data = props.data;
  return (
    <Box sx={{ pt: 5 }}>
      <SectionTitle>{"What's new"}</SectionTitle>
      <Grid container sx={{ py: 3 }} spacing={5}>
        {data.map((card, ind) => {
          return (
            <Grid item xs={12} sm={12} md={6} key={ind}>
              <CardWithImageButton2
                img={card.img}
                link={card.link}
                title={card.title}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WhatIsNew;
