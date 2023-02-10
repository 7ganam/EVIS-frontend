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

const PartnersGrid = ({ sx, partners, title }) => {
  return (
    <Box sx={{ ...sx, textAlign: "center" }}>
      <Typography variant="h5" component="h5">
        {title}
      </Typography>
      <Box
        container
        sx={{
          textAlign: "center",
          placeItems: "center",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
        mt={3}
        justifyContent="center"
      >
        {partners?.map(({ source, text, link }) => {
          return (
            <Box key={source}>
              {link ? (
                <a target="_blank" href={link} rel="noopener noreferrer">
                  <LogoWithTitle source={source} text={text} />
                </a>
              ) : (
                <LogoWithTitle source={source} text={text} />
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PartnersGrid;
