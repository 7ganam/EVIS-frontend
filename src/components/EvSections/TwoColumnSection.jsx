import React from "react";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const data = [
  {
    img: "/assets/images/gallery/1.png",
    title: "Meet over 540+ Exhibitors",
    ps: ["The Electric & Hybrid Vehicle Technology Expo provides attendees the chance to find solutions to their application needs, get a look at the latest technologies, and connect with their peers."],
    direction: "left",
  },
  {
    img: "/assets/images/gallery/2.png",
    title: "Meet over 540+ Exhibitors",
    ps: ["The Electric & Hybrid Vehicle Technology Expo provides attendees the chance to find solutions to their application needs, get a look at the latest technologies, and connect with their peers."],
    direction: "right",
  },
  {
    img: "/assets/images/gallery/3.png",
    title: "Meet over 540+ Exhibitors",
    ps: ["The Electric & Hybrid Vehicle Technology Expo provides attendees the chance to find solutions to their application needs, get a look at the latest technologies, and connect with their peers."],
    direction: "left",
  },
  {
    img: "/assets/images/gallery/4.png",
    title: "Meet over 540+ Exhibitors",
    ps: ["The Electric & Hybrid Vehicle Technology Expo provides attendees the chance to find solutions to their application needs, get a look at the latest technologies, and connect with their peers."],
    direction: "right",
  },
];

const TwoColumnSection = () => {
  return (
    <Box sx={{ pt: "100px"}}>
      <SectionTitle>Two Column Section </SectionTitle>

      {data.map((item, index) => {
        return <TwoColumnBox key={index} item={item} />;
      })}
    </Box>

    // <TwoColumnBox item = {data[0]}/>
  );
};

export default TwoColumnSection;
