import { Box, Grid, styled, useTheme } from "@mui/material";
import { H1 } from "components/Typography";
import React from "react";
import YoutubeEmbed from "components/YoutubeEmbed";

const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px",
  },
  "& div": {
    width: 200,
    height: "2px",
    margin: "auto",
    background: theme.palette.primary.main,
  },
}));

const VideosSection = ({ videosList }) => {
  const theme = useTheme();
  return (
    <Box mt={5}>
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

export default VideosSection;
