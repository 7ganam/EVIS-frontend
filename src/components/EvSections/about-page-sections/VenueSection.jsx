import React from "react";
import TwoColumnBoxV2 from "components/EvComponents/TwoColumnBoxV2";
import { Grid, Box, useTheme } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import { Paragraph } from "components/EvComponents/Typography";

const VenueSection = (props) => {
  const theme = useTheme();
  const data = props.data;
  return (
    <Box id={"venue"} sx={{ scrollMarginTop: "250px" }}>
      <SectionTitle>Venue</SectionTitle>
      <Box>
        <Paragraph>
          <Box sx={{ whiteSpace: "pre-wrap" }}>{data.text}</Box>
        </Paragraph>
      </Box>
      <Grid container>
        <Grid item md={6} sm={12} xs={12} sx={{ padding: "20px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232406.6567360958!2d54.324372!3d24.473188000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3ec9c9737756f30!2sNirvana%20Travel%20%26%20Tourism!5e0!3m2!1sen!2sae!4v1659829234637!5m2!1sen!2sae"
            width="100%"
            height="400"
            border="0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid item md={6} sm={12} xs={12} sx={{ padding: "20px" }}>
          <Box>
            <Paragraph>
              EVIS 2023 will take place at ADNEC Hall 3 & 4 with 6,686 sqm of
              exhibition space. Located in the capital of the United Arab
              Emirates, our Venue Partner ADNEC is a multi-award-winning venue,
              with state-of-the-art facilities to provide our attendees the best
              experience.{" "}
            </Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VenueSection;
