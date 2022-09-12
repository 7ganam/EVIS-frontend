import { SectionTitle } from "src/components/StyledTypography";

import { H4 } from "src/components/Typography";
import { Grid, Box, useTheme, Container } from "@mui/material";
import BazarButton from "src/components/BazarButton";
import BazarImage from "src/components/BazarImage";

// ===============================================================

const WhyVisitSection = (props) => {
  const { p1, p2, img } = props.data;
  const theme = useTheme();
  return (
    <Box sx={{ mt: "10px" }}>
      <SectionTitle text="WHY VISIT ?" />
      <Grid container sx={{ p: "10px" }}>
        <Grid item md={5} sm={12} xs={12} sx={{ pt: 0 }}>
          <Grid item md={6} sm={12} xs={12} sx={{ pt: 0 }}>
            <H4
              color="grey.700"
              fontWeight={500}
              sx={{ width: { md: "600px" } }}
            >
              {p1}
            </H4>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{ pt: 0, mt: { md: "80px", xs: "50px" } }}
          >
            <H4
              color="grey.700"
              fontWeight={500}
              sx={{ width: { md: "600px" } }}
            >
              {p2}
            </H4>
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
      <Grid container spacing={6} justifyContent={"center"}>
        <Grid item sm={3} xs={12} mt={{ xs: "20px", md: "10px" }}>
          <BazarButton variant="outlined" color="primary" fullWidth>
            REGISTER NOW
          </BazarButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyVisitSection;
