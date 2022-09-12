import { SectionTitle } from "src/components/StyledTypography";

import { H5 } from "src/components/Typography";
import { Grid, Box } from "@mui/material";
import BazarImage from "src/components/BazarImage";
// ===============================================================

const whyExhibitSection = (props) => {
  const { p1, p2, p3, img } = props.data;
  return (
    <Box sx={{ mt: "10px" }}>
      <SectionTitle text="Why Exhibit?" />
      <Grid container sx={{ p: "10px" }}>
        <Grid item md={5} sm={12} xs={12} sx={{ pt: 0 }}>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0 }}>
            <H5
              color="grey.700"
              fontWeight={500}
              sx={{ width: { md: "600px", xs: "350px" } }}
            >
              {p1}
            </H5>
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0, mt: "20px" }}>
            <H5
              color="grey.700"
              sx={{ width: { md: "600px", xs: "350px" } }}
              fontWeight={500}
            >
              {p2}
            </H5>
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0, mt: "20px" }}>
            <H5
              color="grey.700"
              sx={{ width: { md: "600px", xs: "350px" } }}
              fontWeight={500}
            >
              {p3}
            </H5>
          </Grid>
        </Grid>
        <Grid
          item
          md={7}
          sm={12}
          xs={12}
          sx={{ pl: { md: "150px", sm: "0px" }, pt: { md: "0px", xs: "20px" } }}
        >
          <BazarImage
            src={img}
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
