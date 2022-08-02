import React from 'react';
import { Box , Grid } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import CardWithImageButton from "components/EvComponents/CardWithImageButton";



const ExhibitionFeatures = (props) => {
    const data = props.data;
  return (
    <Box sx = {{px : 6 , pt : 5}}>
        <SectionTitle>EXHIBITION FEATURES </SectionTitle>
        <Grid container sx = {{py : 3  , px : 10}} spacing = {10}> 
        {data.map((card, ind) => {
          return(
            <Grid item xs={12} sm={6} md={6} key={ind}>
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
        </Grid>
    </Box>
  )
}

export default ExhibitionFeatures