import React from "react";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import CardWithImageButton from "src/components/EvComponents/CardWithImageButton";

const ExhibitionFeatures = (props) => {
  const data = props.data;
  return (
    <Box sx={{ pt: 5 }}>
      <SectionTitle>EXHIBITION FEATURES </SectionTitle>
      <Grid container sx={{ py: 3 }} spacing={5}>
        {data.map((card, ind) => {
          return (
            <Grid item xs={12} sm={6} md={6} key={ind}>
              <CardWithImageButton
                img={card.img}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                text={card.content}
                title={card.title}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ExhibitionFeatures;
