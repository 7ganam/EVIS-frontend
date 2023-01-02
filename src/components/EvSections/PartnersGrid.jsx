import { Box, Container, Grid, Typography } from "@mui/material";
import { H5 } from "src/components/EvComponents/Typography";
import { H4 } from "../Typography";
import LogoWithTitle from "@/components/EvComponents/LogoWithTitle";

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ marginBottom: "10px" }} />;
};

const imagesData = [
  {
    source: "/assets/images/partners/CEBC.png",
    text: "",
    link: "https://www.cebcmena.com",
  },

  {
    source: "/assets/images/partners/CHARIN.png",
    text: "",
    link: "https://www.charin.global",
  },
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
  //   text: "Knowledge Partner",
  // },
  // {
  //   source: "/assets/images/organizations/Oxford.jpg",
  //   text: "Silver Sponsor",
  // },
];

const mediaData = [
  {
    source: "/assets/images/organizations/nationshield logo-01.png",
    text: "",
    link: "http://www.nationshield.ae",
  },
  {
    source: "/assets/images/organizations/highway.png",
    text: "",
    link: "https://highways.today/",
  },
  {
    source: "/assets/images/organizations/E-Vehicle.png",
    text: "",
    link: "https://e-vehicleinfo.com/",
  },
  {
    source: "/assets/images/organizations/Media7.png",
    text: "",
    link: " https://media7.com",
  },
  {
    source: "/assets/images/organizations/evlogo.jpg",
    text: "",
    link: "https://exhibitorsvoice.com/",
  },
  {
    source: "/assets/images/partners/petrofinder.png",
    text: "",
    link: "http://www.petrofinder.com",
  },
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
        mb={3}
        justifyContent="center"
      >
        {imagesData.map(({ source, text, link }) => {
          return (
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              key={source}
              sx={{ height: "150px" }}
            >
              <a target="_blank" href={link ?? "#"} rel="noopener noreferrer">
                <LogoWithTitle source={source} text={text} />
              </a>
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="h5" component="h5" sx={{ mt: 5 }}>
        MEDIA PARTNERS
      </Typography>
      <Grid
        container
        sx={{ textAlign: "center", placeItems: "center" }}
        mt={3}
        justifyContent="center"
      >
        {mediaData.map(({ source, text, link }) => {
          return (
            <Grid item xs={12} sm={4} md={2} key={source}>
              <a target="_blank" href={link ?? "#"} rel="noopener noreferrer">
                <LogoWithTitle source={source} text={text} />
              </a>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PartnersGrid;
