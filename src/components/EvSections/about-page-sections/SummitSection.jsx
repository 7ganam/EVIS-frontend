import React from "react";
import { Paragraph } from "src/components/EvComponents/Typography";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Card } from "@mui/material";
import { Container } from "@mui/material";
import { H2 } from "src/components/EvComponents/Typography";
import { useTheme } from "@emotion/react";
import { BigButton } from "src/components/EvComponents/Buttons";
import LandingText from "src/components/EvSections/agenda-page-sections/LandingText";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import TopicsSection from "src/components/EvSections/agenda-page-sections/TopicsSection";

const section = {
  text: `The summit runs over 2 consecutive days and features more than 10-panel discussions, 10 keynote presentations, speeches, and thought leadership sessions from the top industry leaders and experts from across the e-mobility value chain from all over the world, including leading electric vehicle manufacturers (OEMs), charging point operations (CPOs), E-Mobility Services Providers (MSP), dealerships, banks, government entities, investment firms, insurance companies, research institutions, think tanks and more. 
`,
};
const itemData1 = {
  img: "/assets/images/ev-home/speaker.jpg",
  title: "",
  ps: [
    "The summit runs over 2 consecutive days and features more than 10-panel discussions, 10 keynote presentations, speeches, and thought leadership sessions from the top industry leaders and experts from across the e-mobility value chain from all over the world, including leading electric vehicle manufacturers (OEMs), charging point operations (CPOs), E-Mobility Services Providers (MSP), dealerships, banks, government entities, investment firms, insurance companies, research institutions, think tanks and more.EVIS 2022 features speakers from leading organizations such as BMW Group, ABB, Siemens, Audi, Renault, Transport for London, CharIN, The Economist, TotalEnergies, Uber, BP Ventures, Stellantis, Hager Group, Bridgestone, BritishVolt, and more. ",
  ],
};
const data = {
  title: "EVIS 2023 summit will cover many topics such as: ",
  text: "The motto for the Summit is “Smart Vehicle Mobility” with four themes (concentrations) that are in perfect synergy with Abu Dhabi, which is witnessing an overwhelming energy greening and sustainability awareness trends. Abu Dhabi has proven to be one of the fastest growing smart cities worldwide adopting the latest green technologies after the successful establishment of Masdar City, the first of its kind worldwide.",
};

const topics = [
  "Policies to accelerate the transition to zero-emission vehicles (ZEV).",
  "Technology development and challenges in the vehicle powertrain and alternative fuels. ",
  "EV charging infrastructure technology developments and challenges. ",
  "Investment opportunities in the EV market in the MENA region and globally. ",
  "Electrification of medium and heavy-duty vehicles. ",
  "Electrification of the shipping and aviation sectors. ",
  "Supply chain challenges in the EV sector from the well to the wheel.",
];

const SummitSection = (props) => {
  const theme = useTheme();

  return (
    <Box id={"summit"} sx={{ scrollMarginTop: "250px" }}>
      <SectionTitle>Summit</SectionTitle>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mt: "40px" }}>
          <TwoColumnBoxV2 item={itemData1} imgPosition="left"></TwoColumnBoxV2>
        </Box>
      </Container>
      <TopicsSection></TopicsSection>
    </Box>
  );
};

export default SummitSection;
