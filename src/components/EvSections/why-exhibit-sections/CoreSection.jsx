import React from "react";
import ShadedTextContainer from "src/components/EvComponents/ShadedTextContainer";
import {
  SectionTitle,
  SectionTitle2,
} from "src/components/EvComponents/StyledTypography";
import { Box, Grid, Card } from "@mui/material";
import { Container } from "@mui/material";
import { Paragraph, H2, H4 } from "src/components/EvComponents/Typography";
import { useTheme } from "@emotion/react";
import { BigButton } from "src/components/EvComponents/Buttons";
import { styled } from "@mui/material/styles";
import QuadImgSection from "src/components/EvSections/QuadImgSection";
import Carousel from "@/components/carousel/Carousel";
import useWindowSize from "src/hooks/useWindowSize";

const itemsData = [
  {
    img: "/assets/images/quadImage/ev.png",
    title: "New Energy Vehicles",
    ps: [
      "Electric Passenger Vehicles",
      "Electric Light Vehicles",
      "Electric Commercial Vehicles",
      "Electric Motorcycles",
      "Electric Scooters",
      "Electric Bicycles",
      "Hybrid Electric Vehicles",
      "Fuel Cell Electric Vehicles",
    ],
    direction: "left",
  },
  {
    img: "/assets/images/quadImage/infra2.jpg",
    title: "Energy & Infrastructure",
    ps: [
      "Electric Energy Suppliers",
      "Hydrogen Energy Suppliers",
      "Energy Infrastructure",
      "Intelligent Grid V2G",
      "Electrical Cables",
      "Connectors",
      "Fast Charging Stations",
      "Energy and Charging Systems",
      "Charging Infrastructure",
      "Hydrogen Fuel infrastructure",
      "Communication Infrastructure",
    ],
    direction: "right",
  },
  {
    img: "/assets/images/quadImage/patteries.jpg",
    title: "Batteries",
    ps: [
      "Lithium Batteries, Lead-acid Batteries, Nickel",
      "Batteries(MH-Ni Battery) & Other Batteries",
      "Battery Management",
      "Battery Charging Systems",
      "Testing Systems & Testing Equipment",
      "Capacitors",
      "Fuel Cell Technology & Fuel Cell Systems",
      "Hydrogen Tank & Hydrogen Refueling",
      "Battery Manufacturing Equipment",
      "Raw Materials",
      "Parts & Components",
    ],
    direction: "left",
  },
  {
    img: "/assets/images/quadImage/power.jpg",
    title: "Powertrain",
    ps: [
      "General Motors",
      "In-wheel Motor",
      "Hybrid Engines",
      "Cable Braider and Automotive Wiring",
      "Drive Systems",
      "Transmission",
      "Braking Technology and Components",
      "Other Powertrain Components",
    ],
    direction: "right",
  },
  {
    img: "/assets/images/quadImage/h2.jpg",
    title: "Hydrogen",
    ps: ["Hydrogen Vehicles", "Hydrogen Tank", "Hydrogen Refuelling"],
    direction: "left",
  },
];

const Slides = () => {
  const slides = itemsData.map((item, index) => {
    return (
      <Grid
        item
        key={index}
        xs={12}
        sm={12}
        sx={{
          backgroundImage: `url("${item.img}")`,
          backgroundSize: "100% , auto , cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          boxShadow: "-2px 5px 4px #00000078",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} order={{ sm: 2 }}></Grid>
          <Grid
            item
            xs={12}
            sm={4}
            order={{ sm: 1 }}
            sx={{
              bgcolor: "rgba(0,0,0,0.6)",
              color: "white",
              height: "500px",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 4,
              }}
            >
              <H2> {item.title} </H2>
              {item.ps?.map((item, index) => {
                return (
                  <Box sx={{ pt: 1 }} key={index}>
                    <H4>{item}</H4>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return slides;
};

const CoreSection = () => {
  const theme = useTheme();


  return (
    <Box>
      <SectionTitle>{"Core Sectors"}</SectionTitle>
      <Box mt = {3}>
        <Container>
          <Carousel
            step={1}
            totalSlides={5}
            showArrowOnHover={true}
            arrowButtonColor="inherit"
            visibleSlides={1}
          >
            {Slides()}
          </Carousel>
        </Container>
      </Box>
    </Box>
  );
};

export default CoreSection;
