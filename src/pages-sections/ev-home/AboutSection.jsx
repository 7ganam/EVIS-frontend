import { Box, Grid, Paper, useTheme } from "@mui/material";

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
        <Grid item md={5} sm={12} xs={12} sx={{ pt: 0 }}>
          <Box
            hoverEffect
            data-aos="fade-up"
            data-aos-duration={1700}
            sx={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <YoutubeEmbed embedId={youtube} />
          </Box>
        </Grid>
        <Grid item md={7} sm={12} xs={12} sx={{ pl: "60px" }}>
          <Paper
            sx={{
              borderColor: theme.palette.primary.dark,
              borderStyle: "solid ",
              borderWidth: "1px",
              borderRadius: "0px 0px 0 0",
              p: 4,
            }}
          >
            <Paragraph fontWeight={500}>{text}</Paragraph>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
