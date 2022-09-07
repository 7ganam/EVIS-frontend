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

const itemData1 = {
  img: "/assets/images/ev-home/speaker.jpg",
  title: "",
  ps: [
    "The summit runs over 2 consecutive days and features more than 10-panel discussions, 10 keynote presentations, speeches, and thought leadership sessions from the top industry leaders and experts from across the e-mobility value chain from all over the world, including leading electric vehicle manufacturers (OEMs), charging point operations (CPOs), E-Mobility Services Providers (MSP), dealerships, banks, government entities, investment firms, insurance companies, research institutions, think tanks and more.EVIS 2022 features speakers from leading organizations such as BMW Group, ABB, Siemens, Audi, Renault, Transport for London, CharIN, The Economist, TotalEnergies, Uber, BP Ventures, Stellantis, Hager Group, Bridgestone, BritishVolt, and more. ",
  ],
};

const SummitSection = (props) => {
  const theme = useTheme();

  return (
    <Box id={"summit"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "30px" }}>
        {" "}
        <SectionTitle>Summit</SectionTitle>
      </Box>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mt: "30px" }}>
          <TwoColumnBoxV2 item={itemData1} imgPosition="left"></TwoColumnBoxV2>
        </Box>
      </Container>
      <TopicsSection></TopicsSection>
    </Box>
  );
};

export default SummitSection;
