import { Box, Grid } from "@mui/material";
import { H5 } from "src/components/EvComponents/Typography";

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ margin: "10px" }} alt = {props.Src} />;
};

const imagesData = [
  {
    source: "/assets/images/organizers/Masdar.png",
    text: "Sustainability Partner",
  },
  {
    source: "/assets/images/organizers/ADNEC.png",
    text: "Venue Partner",
  },
  {
    source: "/assets/images/organizers/AbuDhabi.png",
    text: "Host City",
  },
  {
    source: "/assets/images/organizers/Nirvana.png",
    text: "Organized By",
  },
  {
    source: "/assets/images/organizers/Audi.png",
    text: "Gold Sponsor",
  },
  {
    source: "/assets/images/organizers/BritishVolt.png",
    text: "Silver Sponsor",
  },
];

const SponsorsGrid = () => {
  return (
    <Grid container sx={{ textAlign: "center", placeItems: "center" }}>
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
  );
};

export default SponsorsGrid;
