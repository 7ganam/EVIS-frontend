import React from "react";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { Grid, Box, useTheme } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Paragraph } from "src/components/EvComponents/Typography";

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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14531.667585283021!2d54.4369963!3d24.4189545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2f73ba3f513d4b3!2sAbu%20Dhabi%20National%20Exhibition%20Centre!5e0!3m2!1sen!2seg!4v1662066790096!5m2!1sen!2seg"
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
