import { Box, Grid } from "@mui/material";
import { H5 } from "src/components/EvComponents/Typography";
import LogoWithTitle from "../EvComponents/LogoWithTitle";
import { H4 } from "../Typography";

const StyledImage = (props) => {
  return (
    <img
      src={props.Src}
      width="170"
      style={{ margin: "10px" }}
      alt={props.Src}
    />
  );
};

const imagesData = [
  {
    source: "/assets/images/organizations/Masdar.jpg",
    text: "Sustainability Partner",
  },
  {
    source: "/assets/images/organizations/DCT.png",
    text: "Destination Partner",
  },
  {
    source: "/assets/images/organizations/ADNEC.png",
    text: "Venue Partner",
  },
  {
    source: "/assets/images/organizations/AbuDhabi.png",
    text: "Host City",
  },
  {
    source: "/assets/images/NirvanaLogo.png",
    text: "Organized By",
  },
  // {
  //   source: "/assets/images/organizations/Audi.png",
  //   text: "Knowledge Partner",
  // },
  // {
  //   source: "/assets/images/organizations/BritishVolt.png",
  //   text: "Silver Sponsor",
  // },
];

const SponsorsGrid = () => {
  return (
    <Grid
      container
      sx={{ textAlign: "center", placeItems: "center" }}
      justifyContent={"center"}
    >
      {imagesData.map(({ source, text }) => {
        return (
          <Grid item xs={12} sm={4} md={2} key={source}>
            <LogoWithTitle source={source} text={text} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SponsorsGrid;
