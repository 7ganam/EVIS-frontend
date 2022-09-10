import React from "react";
import { Box, Container, Grid, useTheme } from "@mui/material";
import { H4, H6, H3, H2 } from "src/components/EvComponents/Typography";
import YoutubeEmbed from "src/components/YoutubeEmbed";
import { Button } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Image from "src/components/BazarImage";

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
            <Box pt={3}>
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

              <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
                <Box
                  sx={{
                    borderRadius: "50%",
                    overflow: "hidden",
                    width: "50px",
                    height: "50px",
                    mt: "15px",
                    ml: "10px",
                  }}
                >
                  <Image
                    sx={{
                      borderRadius: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={data?.img ?? "/assets/images/testimonials/profile.jpg"}
                    alt="profile"
                  />
                </Box>
                <Box pt={1} pl={2}>
                  <H2 sx={{ fontWeight: "600" }}>{data.name}</H2>
                  <H6>{joinedText}</H6>
                </Box>
              </Box>
            </Box>
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
            <Box
              sx={{
                borderRadius: "5px",
                overflow: "hidden",
                boxShadow: "-4px 6px 12px 0px #00000075",
              }}
            >
              {" "}
              <YoutubeEmbed embedId={data.videoId} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialCard;
