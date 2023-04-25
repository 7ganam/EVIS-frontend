import { Box, Grid, styled, useTheme } from "@mui/material";
import React from "react";
import YoutubeEmbed from "src/components/YoutubeEmbed";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

function extract_yt_id(url) {
  var video_id = url.split("v=")[1];
  if (video_id) {
    var ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }
}

const VideosSection = ({ videosList }) => {
  const theme = useTheme();
  return (
    <Box mt={6}>
      <Box sx={{ mb: "20px", mt: "30px" }}>
        <SectionTitle>A Glimpse of EVIS Previous Edition </SectionTitle>
      </Box>
      <Grid container mb={-0.5} spacing={3}>
        {videosList?.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <Box
              sx={{
                p: "5px",
                border: `solid 1px ${theme.palette.primary.main}`,
                borderRadius: "10px",
              }}
            >
              <Box
                hoverEffect
                // data-aos="fade-up"
                // data-aos-duration={(ind + 1) * 300}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <YoutubeEmbed embedId={extract_yt_id(item.youtube)} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideosSection;
