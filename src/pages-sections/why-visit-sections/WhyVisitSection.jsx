import { SectionTitle } from "components/StyledTypography";

import { H4 } from "components/Typography";
import { Grid, Box, useTheme, Container } from "@mui/material";
import BazarButton from "components/BazarButton";
import BazarImage from "components/BazarImage";

// ===============================================================

const WhyVisitSection = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: "10px" }}>
      <SectionTitle text="WHY VISIT ?" />
      <Grid container sx={{ p: "10px" }}>
        <Grid item md={5} sm={12} xs={12} sx={{ pt: 0 }}>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0  }}>
            <H4 color="grey.700"  fontWeight={500} sx = {{width : {md : '600px'}}}>
              The Electric Vehicle Innovation Summit is the leading EV trade
              show and conference in the region offering access to hundreds of
              companies and experts in the industry.
            </H4>
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0, mt: {md :"80px" , xs : '50px'} }}>
            <H4 color="grey.700"  fontWeight={500} sx = {{width : {md : '600px'}}}>
              EVIS is more focused on Electric Vehicles which include land, air
              and sea, hence you will be able to get more insight on the latest
              applications, technologies, and market progress on electric
              vehicles.
            </H4>
          </Grid>
        </Grid>
        <Grid item md={7} sm={12} xs={12} sx={{ pl: {md : "150px" , sm : '0px'}, pt: {md : "0px" , xs : '20px'} }}>
          <BazarImage
            src="/assets/images/why-visit/1.jpeg"
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
      <Grid container spacing={6} justifyContent={"center"}>
        <Grid item sm={3} xs={12} mt={{ xs: "20px", md: "10px" }}>
          <BazarButton variant="outlined" color="primary"  fullWidth>
                REGISTER NOW
          </BazarButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyVisitSection;
