import React from "react";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { Grid, Box, useTheme } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import YoutubeEmbed from "src/components/YoutubeEmbed";
import { Paragraph } from "src/components/EvComponents/Typography";

const OpenTechSection = (props) => {
  const theme = useTheme();
  const item = props.item;
  return (
    <Box id={"open-tech"} sx={{ scrollMarginTop: "250px" }}>
      <SectionTitle>Open Tech Sessions</SectionTitle>
      <Box>
        <Paragraph>
          <Box sx={{ whiteSpace: "pre-wrap" }}>{item.text}</Box>
        </Paragraph>
      </Box>
      <Box mt={5}>
        <Grid container mb={-0.5} spacing={3}>
          {props.item.videosList.map((item, ind) => (
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
    </Box>
  );
};

export default OpenTechSection;
