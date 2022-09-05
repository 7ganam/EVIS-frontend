import { Box, Grid, styled, useTheme } from "@mui/material";
import React from "react";
import YoutubeEmbed from "src/components/YoutubeEmbed";

const Videos = ({ videosList }) => {
  const theme = useTheme();
  return (
    <Box mt={6}>
      <Grid container mb={-0.5} spacing={3}>
        {videosList.map((item, ind) => (
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
                data-aos="fade-up"
                data-aos-duration={(ind + 1) * 300}
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <YoutubeEmbed embedId={item.youtube} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
