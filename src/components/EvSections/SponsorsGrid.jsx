import { Box, Grid } from "@mui/material";
import { H5 } from "src/components/EvComponents/Typography";

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
  //   text: "Gold Sponsor",
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
            <Box sx={{ height: "200px" }}>
              <Box>
                <H5>{text}</H5>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <StyledImage Src={source} />
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SponsorsGrid;
