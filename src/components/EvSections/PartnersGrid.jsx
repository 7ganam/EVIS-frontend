import { Box, Container, Grid, Typography } from "@mui/material";
import { H5 } from "src/components/EvComponents/Typography";
import LogoWithTitle from "../EvComponents/LogoWithTitle";
import { H4 } from "../Typography";

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ marginBottom: "10px" }} />;
};

const imagesData = [
  {
    source: "/assets/images/organizations/CEBC.png",
    text: "",
  },
  // {
  //   source: "/assets/images/organizations/CHARIN.png",
  //   text: "Venue Partner",
  // },
  // {
  //   source: "/assets/images/organizations/GEEE.png",
  //   text: "Host City",
  // },
  // {
  //   source: "/assets/images/organizations/ISF.png",
  //   text: "Organized By",
  // },
  // {
  //   source: "/assets/images/organizations/AVERE.png",
  //   text: "Gold Sponsor",
  // },
  // {
  //   source: "/assets/images/organizations/Oxford.jpg",
  //   text: "Silver Sponsor",
  // },
];

const PartnersGrid = ({ sx }) => {
  return (
    <Box sx={{ ...sx, textAlign: "center", paddingBottom: "3rem" }}>
      {/* <h6>KNOWLEDGE PARTNERS</h6>, */}
      <Typography variant="h5" component="h5">
        KNOWLEDGE PARTNERS
      </Typography>
      <Grid
        container
        sx={{ textAlign: "center", placeItems: "center" }}
        mt={3}
        justifyContent="center"
      >
        {imagesData.map(({ source, text }) => {
          return (
            <Grid item xs={12} sm={4} md={2} key={source}>
              <LogoWithTitle source={source} text={text} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PartnersGrid;
