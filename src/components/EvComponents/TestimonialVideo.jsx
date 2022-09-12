import React from "react";
import { Grid, Box } from "@mui/material";
import { H2, H3, H4, H5 } from "src/components/EvComponents/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import YoutubeEmbed from "src/components/YoutubeEmbed";

const TestimonialVideo = (props) => {
  const { text, name, title, company, videoId } = props.testimonial;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "left",
          backgroundColor: "#f5f5f5",
          height: "auto",
          borderRadius: "10px",
          overflow: "hidden",
          flexGrow: 1,
        }}
      >
        <Box>
          {" "}
          <YoutubeEmbed embedId={videoId} />
        </Box>
        <H4 sx={{ py: 3, px: 3 }}>
          <FormatQuoteIcon />
          {text}
          <FormatQuoteIcon />
        </H4>
      </Box>

      <Grid
        container
        sx={{ borderRadius: "10px", p: 1, mt: 1, backgroundColor: "#f5f5f5" }}
      >
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <H2>{name}</H2>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <H3>{title}</H3>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ textAlign: "center" }}>
            <H3>
              <strong>{company}</strong>
            </H3>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestimonialVideo;
