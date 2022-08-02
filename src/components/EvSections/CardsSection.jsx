import React from "react";
import CardWithImageButton from "components/EvComponents/CardWithImageButton";
import { Grid, Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
function CardsSection(props) {
  // const cardData = {
  //   img: "/assets/images/badges/hot.svg",
  //   content: `Each day kicks off with a keynote address followed by roundtable panel debates by industry thought leaders discussing the most important market disruptors and what to expect in the years to come.`,
  //   buttonText: "Do Something",
  //   buttonLink: "/",
  //   title: "Keynotes",
  // };
  const cardData =  props.data

  return (
    <Box sx={{ pt: "100px" , px : 6 }}>
      {/* <SectionTitle>Cards Section</SectionTitle> */}

      <Grid container columns={12} spacing={3}>

        {cardData.map((card, ind) => {
          return(
            <Grid item xs={12} sm={6} md={4} key={ind}>
              <CardWithImageButton 
              img={card.img}
              buttonText={card.buttonText}
              buttonLink={card.buttonLink}
              text={card.content}
              title={card.title}
              />
            </Grid>
          )
        })}
        {/* <Grid item md={4} sm={6} xs={12}>
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
            text={cardData.content}
            title={cardData.title}
          />
        </Grid>{" "}
        <Grid item md={4} sm={6} xs={12}>
          <CardWithImageButton
            img={cardData.img}
            buttonText={cardData.buttonText}
            buttonLink={cardData.buttonLink}
            text={cardData.content}
            title={cardData.title}
          />
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default CardsSection;
