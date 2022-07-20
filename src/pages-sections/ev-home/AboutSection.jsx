import { Box, Grid, useTheme } from "@mui/material";

import { SectionTitle } from "components/StyledTypography";
import { Paragraph } from "components/Typography";
import YoutubeEmbed from "components/YoutubeEmbed";
// ===============================================================
const AboutSection = ({ text, youtube }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: "100px" }}>
      <SectionTitle text={"ABOUT ELECTRIC VEHICLE INNOVATION SUMMIT"} />
      <Grid container sx={{ p: "10px" }}>
        <Grid item md={5} sm={12} xs={12}>
          <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
            <YoutubeEmbed embedId={youtube} />
          </Box>
        </Grid>
        <Grid item md={7} sm={12} xs={12} sx={{ pl: "60px" }}>
          <Paragraph fontWeight={500}>{text}</Paragraph>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
