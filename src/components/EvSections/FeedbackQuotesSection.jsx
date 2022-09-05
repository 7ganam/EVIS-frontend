import React from "react";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import FeedbackQuote from "src/components/EvComponents/FeedbackQuote";

const quotesData = [
  {
    quote:
      "An excellent place to strategize whilst having the whole battery industry surrounding you.",
    name: "Asim Sarwar Dilov",
    position: "Head of Research and Advanced Engineering, Rimac Automobili",
  },
  {
    quote:
      "An excellent place to strategize whilst having the whole battery industry surrounding you.",
    name: "Asim Sarwar Dilov",
    position: "Head of Research and Advanced Engineering, Rimac Automobili",
  },
  {
    quote:
      "An excellent place to strategize whilst having the whole battery industry surrounding you.",
    name: "Asim Sarwar Dilov",
    position: "Head of Research and Advanced Engineering, Rimac Automobili",
  },
  {
    quote:
      "An excellent place to strategize whilst having the whole battery industry surrounding you.",
    name: "Asim Sarwar Dilov",
    position: "Head of Research and Advanced Engineering, Rimac Automobili",
  },
];

const FeedbackQuotesSection = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        padding: "35px",
        textAlign: "center",
        placeItems: "center",
        backgroundColor: theme.palette.primary.main,
        paddingTop: "5px",
      }}
    >
      {quotesData.map(({ quote, name, position }) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={name}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FeedbackQuote Quote={quote} Name={name} Position={position} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FeedbackQuotesSection;
