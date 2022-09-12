import React from "react";
import ShadedTextContainer from "src/components/EvComponents/ShadedTextContainer";
import {
  SectionTitle,
  SectionTitle2,
} from "src/components/EvComponents/StyledTypography";
import { Box, Grid, Card } from "@mui/material";
import { Container } from "@mui/material";
import { Paragraph, H2 } from "src/components/EvComponents/Typography";
import { useTheme } from "@emotion/react";
import { BigButton } from "src/components/EvComponents/Buttons";
import { styled } from "@mui/material/styles";

const HoverCard = styled(({ hoverEffect, children, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, hoverEffect }) => ({
  "&:hover": {
    boxShadow: hoverEffect ? theme.shadows[2] : "",
    color: theme.palette.primary.main,
  },
}));
const topics = [
  "New Energy Vehicles: Electric Passenger Vehicles, Electric Light Vehicles, Electric Commercial Vehicles, Electric Motorcycles, Electric Scooters, Electric Bicycles, Hybrid Electric Vehicles, Fuel Cell Electric Vehicle.",
  "Energy and infrastructure: Electric Energy Suppliers, Hydrogen Energy Suppliers, Energy Infrastructure, Intelligent Grid V2G, Electrical Cables, Connectors, Fast Charging Stations, Energy and Charging Systems, Charging Infrastructure, Hydrogen Fuel infrastructure, Communication Infrastructure.",
  "Batteries: Lithium Batteries, Lead-acid Batteries, Nickel Batteries (MH-Ni Battery), other batteries, Battery Management, Battery Charging Systems, Testing Systems, Capacitors, Fuel Cell Technology, Fuel Cell Systems, Fuel Cell Management, Hydrogen Tank, Hydrogen Refueling, Battery Manufacturing Equipment, Testing Equipment, Raw Materials, Parts & Components.",
  "Powertrain: General Motors, In-wheel Motor, Hybrid Engines, Cable Braider and Automotive Wiring, Drive Systems, Transmission, Braking Technology and Components, Other Powertrain Components.",
];

const CoreSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: 6,
        mt: 1,
      }}
    >
      <Grid>
        <Grid item></Grid>
      </Grid>
      <Box
        bgcolor="grey.300"
        sx={{
          pb: 6,
          width: "auto",
        }}
      >
        <Container sx={{ md: 6, pt: 2 }}>
          <Box sx={{ mb: "40px", mt: "20px" }}>
            <SectionTitle2>{"Core Sectors  "}</SectionTitle2>
          </Box>
          <Grid container spacing={"20px"} justifyContent="center">
            {topics.map((topic, index) => (
              <Grid key={index} item xs={12} md={12} spacing={"5px"}>
                <HoverCard
                  hoverEffect
                  sx={{
                    width: "100%",
                    p: "20px",
                    height: "100%",
                    // textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  {topic}
                </HoverCard>
              </Grid>
            ))}
          </Grid>

          <Container>
            <Box elevation={2} sx={{ mt: "40px", p: "30px" }}>
              <Box
                sx={{
                  maxWidth: "700px",
                  margin: "auto",
                }}
              >
                <H2>
                  <Box
                    sx={{
                      // color: theme.palette.primary.main,
                      textAlign: "center",
                    }}
                  >{`Join us for 2 days packed with high-quality content from the top EV
              leaders from across the globe and the MENA region. `}</Box>
                </H2>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center ",
                  mt: "40px",
                }}
              >
                {" "}
                <BigButton content={"Register now!"} />
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default CoreSection;
