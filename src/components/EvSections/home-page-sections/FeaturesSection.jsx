import React from "react";
import CardWithImageButton from "src/components/EvComponents/CardWithImageButton";
import { Grid, Box } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

function CardsSection({ cardsData }) {
  // const cardData =  props.data

  return (
    <Box sx={{}}>
      <SectionTitle>Event Features</SectionTitle>
      <Grid container columns={12} spacing={3}>
        {cardsData.map((card, ind) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={ind}>
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
}

export default CardsSection;
