import { Box, Container, Grid, Typography } from "@mui/material";
import { H5 } from "src/components/EvComponents/Typography";

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ marginBottom: "10px" }} />;
};

const imagesData = [
  {
    source: "/assets/images/partners/CEBC.png",
    text: "Sustainability Partner",
  },
  {
    source: "/assets/images/partners/CHARIN.png",
    text: "Venue Partner",
  },
  {
    source: "/assets/images/partners/GEEE.png",
    text: "Host City",
  },
  {
    source: "/assets/images/partners/ISF.png",
    text: "Organized By",
  },
  {
    source: "/assets/images/partners/AVERE.png",
    text: "Gold Sponsor",
  },
  {
    source: "/assets/images/partners/Oxford.png",
    text: "Silver Sponsor",
  },
];

const PartnersGrid = () => {
  return (
    <Box sx={{ textAlign: "center", paddingBottom: "3rem" }}>
      {/* <h6>KNOWLEDGE PARTNERS</h6>, */}
      <Typography variant="h5" component="h5">
        KNOWLEDGE PARTNERS
      </Typography>
      <Grid container sx={{ textAlign: "center", placeItems: "center" }} mt={3}>
        {imagesData.map(({ source, text }) => {
          return (
            <Grid item xs={12} sm={4} md={2} key={source}>
              <Box>
                <H5>{text}</H5>
              </Box>
              <StyledImage Src={source} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PartnersGrid;
