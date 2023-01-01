import React from "react";
import { Grid, Box } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Paragraph } from "src/components/EvComponents/Typography";

const VenueSection = (props) => {
  const venu_paragraph_1 = props.venu_paragraph_1;
  const venu_paragraph_2 = props.venu_paragraph_2;
  return (
    <Box id={"venue"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "30px", mb: "20px" }}>
        {" "}
        <SectionTitle>Venue</SectionTitle>
      </Box>
      <Box>
        <Paragraph>
          <Box sx={{ whiteSpace: "pre-wrap" }}>{venu_paragraph_1}</Box>
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
            <Paragraph>{venu_paragraph_2}</Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VenueSection;
