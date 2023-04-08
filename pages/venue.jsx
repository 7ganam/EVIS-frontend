import { Container, Stack } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import VenueSection from "src/components/EvSections/about-page-sections/VenueSection";

import { Box } from "@mui/system";

import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
// ======================================================
// ======================================================

const venu_paragraph_1 = `Abu Dhabi has been selected as the venue for the Electric Vehicle Innovation Summit. As the capital of the United Arab Emirates, Abu Dhabi is a business-centric hub, strategically located at the heart of the energy evolution and the application of innovative solutions including the electrical vehicles. With its ‘Economic Vision 2030’ and ‘UAE Energy Strategy 2050’ the UAE government strongly supports a conducive platform towards innovation, cost efficiencies in the energy sector, investor friendly regulations and responsible governance. The ‘Energy Strategy 2050’ aims to increase the contribution of clean energy in the total energy mix from 25% to 50% by 2050 and reduce carbon footprint of power generation by 70 percent, thus saving AED 700 billion by 2050. It also seeks to increase consumption efficiency of individuals and corporates by 40%.
The Emirate also has easy access to developing markets, with more than 200 air routes, 150 shipping lanes and world-class, fully integrated port and logistics’ infrastructure.`;
const venu_paragraph_2 = `EVIS 2023 will take place at ADNEC Halls 3 & 4 with 6,686 sqm of exhibition space. Located in the capital of the United Arab Emirates, our Venue Partner ADNEC is a multi-award-winning venue, with state-of-the-art facilities to provide our attendees with the best experience.`;

const GeneralPage = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <PageHeader
        image={headers?.PLAN_YOUR_VISIT?.image?.data?.attributes?.url}
      >
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.PLAN_YOUR_VISIT?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.PLAN_YOUR_VISIT?.text}
            </H1>
          )}
          {headers?.PLAN_YOUR_VISIT?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginBottom: "20px",
              }}
            >
              {headers?.PLAN_YOUR_VISIT?.sub_text}
            </H6>
          )}
        </Box>
      </PageHeader>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <VenueSection
          venu_paragraph_1={venu_paragraph_1}
          venu_paragraph_2={venu_paragraph_2}
        ></VenueSection>
      </Container>
    </EvLayout>
  );
};

export default GeneralPage;
