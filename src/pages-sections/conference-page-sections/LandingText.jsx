import React from "react";
import BazarButton from "components/BazarButton";

import { H3, H4, H5 } from "components/Typography";
import { Grid, Box } from "@mui/material";

const LandingText = () => {
  return (
    <Box sx={{ mt: "10px" }}>
      <H4 color="grey.700" fontWeight={800} mt={5}>
        The motto for the Summit is “Smart Vehicle Mobility” with four themes
        (concentrations) that are in perfect synergy with Abu Dhabi, which is
        witnessing an overwhelming energy greening and sustainability awareness
        trends. Abu Dhabi has proven to be one of the fastest growing smart
        cities worldwide adopting the latest green technologies after the
        successful establishment of Masdar City, the first of its kind
        worldwide.
      </H4>
      <Grid container sx={{ p: "10px" }} mt={5}>
        <Grid item md={6} sm={12} xs={12} sx={{ pt: 0 }}>
          <H3>Paid Conference</H3>
          <H5 color="grey.700" width="550px" fontWeight={500}>
            Each conference day kicks off with a notable keynote address
            followed by a roundtable panel of top industry leaders discussing
            the most important market disruptors of the last year and what they
            expect to see in the years to come.
          </H5>
        </Grid>
        <Grid item md={6} sm={12} xs={12} sx={{ pt: 0 }}>
          <H3>Open Tech Sessions</H3>

          <H5 color="grey.700" width="550px" fontWeight={500}>
            Explore the latest technical content and developments in the
            industry which includes presentations, panel discussions and case
            studies, all in the show floor and free to attend for everyone.
          </H5>
        </Grid>
      </Grid>
      <Grid container spacing={6} justifyContent={"center"}>
        <Grid item sm={3} xs={12} mt={{ xs: "20px", md: "10px" }}>
          <BazarButton variant="contained" color="primary" fullWidth>
            <H5 color = 'white'>Book Your Delegate Pass</H5>
          </BazarButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingText;
