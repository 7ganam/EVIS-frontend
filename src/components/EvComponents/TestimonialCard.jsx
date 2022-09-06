import React from "react";
import { Box, Container, Grid, useTheme } from "@mui/material";
import { H4, H6 } from "src/components/EvComponents/Typography";
import YoutubeEmbed from "src/components/YoutubeEmbed";
import { Button } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const TestimonialCard = (props) => {
  const data = props.data;
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const joinedText = `${data.title} at ${data.company}`;
  const pos = data.pos;
  let g1 = 1;
  let g2 = 2;

  if (pos === "right") {
    g1 = 2;
    g2 = 1;
  }

  if (pos === "left") {
    g1 = 1;
    g2 = 2;
  }

  return (
    <Box>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} px={3} order={{ xs: 2, md: g1 }}>
            <Box
              sx={{
                borderLeft: `solid 3px ${primary}`,
              }}
            >
              <H4
                ml={2}
                sx={{
                  color: "#666666",
                }}
              >
                {data.text}
              </H4>
            </Box>
            <Grid item mt={2} md={12}>
              <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                  <H4>{data.name}</H4>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={8}
                  sx={{
                    marginTop: "3px",
                    color: "#8c8c8c",
                  }}
                >
                  <H6>{joinedText}</H6>
                </Grid>
              </Grid>
            </Grid>
            <Button fullWidth={true}>
              <H4> Watch Video Now </H4>
              <TrendingFlatIcon/>
            </Button>
          </Grid>
          <Grid
            item
            sx={12}
            sm={12}
            md={6}
            px={3}
            order={{ xs: 1, md: g2 }}
            mt={1}
          >
            <YoutubeEmbed embedId={data.videoId} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialCard;
