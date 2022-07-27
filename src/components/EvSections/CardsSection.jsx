import React from "react";
import CardWithImageButton from "components/EvComponents/CardWithImageButton";
import { Grid, Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
function CardsSection() {
  const cardData = {
    img: "/assets/images/badges/hot.svg",
    content: `Each day kicks off with a keynote address followed by roundtable panel debates by industry thought leaders discussing the most important market disruptors and what to expect in the years to come.`,
    buttonText: "Do Something",
    buttonLink: "/",
    title: "Keynotes",
  };

  return (
    <Box sx={{ pt: "100px" }}>
      <SectionTitle>Cards Section</SectionTitle>

      <Grid container columns={12} spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <CardWithImageButton
            img={cardData.img}
            buttonText={cardData.buttonText}
            buttonLink={cardData.buttonLink}
            text={cardData.content}
            title={cardData.title}
          />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <CardWithImageButton
            img={cardData.img}
            buttonText={cardData.buttonText}
            buttonLink={cardData.buttonLink}
          >
            {cardData.content}
          </CardWithImageButton>
        </Grid>{" "}
        <Grid item md={4} sm={6} xs={12}>
          <CardWithImageButton
            img={cardData.img}
            buttonText={cardData.buttonText}
            buttonLink={cardData.buttonLink}
          >
            {cardData.content}
          </CardWithImageButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardsSection;
