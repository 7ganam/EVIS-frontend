import { SectionTitle } from "components/StyledTypography";

import { H5 } from "components/Typography";
import { Grid, Box } from "@mui/material";
import BazarImage from "components/BazarImage";
// ===============================================================

const whyExhibitSection = () => {
  return (
    <Box sx={{ mt: "10px" }}>
      <SectionTitle text="Why Exhibit?" />
      <Grid container sx={{ p: "10px" }}>
        <Grid item md={5} sm={12} xs={12} sx={{ pt: 0 }}>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0 }}>
            <H5 color="grey.700" width="600px" fontWeight={500}>
              EV innovation is accelerating due to contributions from all around
              the globe. Improvement in batteries, motor control, and support
              software will continue to occur and will make EVs a better
              investment.
            </H5>
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0, mt: "20px" }}>
            <H5 color="grey.700" width="600px" fontWeight={500}>
              The exhibition will provide a world-class environment for EV
              industry to showcase the latest solutions in front of an audience
              who matters, including financiers and investors, engineers, R&D &
              government officials.
            </H5>
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0, mt: "20px" }}>
            <H5 color="grey.700" width="600px" fontWeight={500}>
              More than 5,000 professionals representing leading companies in
              the EV industry will be in Abu Dhabi with the goal of networking
              and sourcing the latest technologies across the 3 days of
              exhibition.
            </H5>
          </Grid>
        </Grid>
        <Grid item md={7} sm={12} xs={12} sx={{ pl: "150px", mt: "1px" }}>
          <BazarImage
            src="/assets/images/why-exhibit/charger.png"
            sx={{
              display: "block",
              maxWidth: "500px",
              width: "100%",
              mb: "1.5rem",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default whyExhibitSection;
