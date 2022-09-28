import React from "react";
import ImageWithTextBox from "src/components/EvComponents/ImageWithTextBox";
import { Box, Grid } from "@mui/material";

const items = [
  {
    text: "By exhibiting, you can",
    img: "/assets/images/why-exhibit/charger.png",
  },
  {
    text: "By exhibiting, you can",
    img: "/assets/images/why-exhibit/charger.png",
  },
  {
    text: "By exhibiting, you can",
    img: "/assets/images/why-exhibit/charger.png",
  },
  {
    text: "By exhibiting, you can",
    img: "/assets/images/why-exhibit/charger.png",
  },
  {
    text: "By exhibiting, you can",
    img: "/assets/images/why-exhibit/charger.png",
  },
];

const ImageCardsSection = () => {
  return (
    <Box sx={{ pt: "40px", px: "60px" }}>
      <Grid container spacing={5}>
        {items.map((item, index) => {
          return (
            <Grid item key={index} md={3} sm={6} xs={12}>
              <ImageWithTextBox key={index} data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ImageCardsSection;
