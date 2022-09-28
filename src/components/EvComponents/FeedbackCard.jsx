import React from "react";
import { Grid, Box } from "@mui/material";
import { H4, H5 } from "src/components/EvComponents/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const FeedbackCard = (props) => {
  const { text, name, title, company } = props.item;
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          textAlign: "left",
          backgroundColor: "#f5f5f5",
          height: "auto",
          borderRadius: "40px",
        }}
      >
        <H4 sx={{ py: 3, px: 3 }}>
          <FormatQuoteIcon />
          {text}
          <FormatQuoteIcon />
        </H4>
      </Box>

      <Grid container sx={{ pt: 2 }}>
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <H4>{name}</H4>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <H5>{title}</H5>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <H4>
              <strong>{company}</strong>
            </H4>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeedbackCard;
