import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import FindUsSection from "src/components/EvSections/ContactUsSections/FindUsSection";
import InnovationTeamSection from "src/components/EvSections/ContactUsSections/InnovationTeamSection";
import AboutNirvana from "src/components/EvSections/ContactUsSections/AboutNirvana";
import SponsorsPartnersSection from "src/components/EvSections/ContactUsSections/SponsorsPartnersSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
// ======================================================
// ======================================================

const EvContactUs = (props) => {

  let {
    contactPageData,
    InnovationTeamData,
    titleOfInnovationTeam
  } = useMemo(() => {
    if (!props?.contactPage) {
      return {};
    }
    let contactPageData = JSON.parse(props.contactPage).data?.attributes ?? null;
    const titleOfInnovationTeam = contactPageData?.title_of_innovation_team;
    if (!props?.InnovationTeam) {
      return {};
    }
    let InnovationTeamData = props.InnovationTeam;

    return {
      contactPageData,
      InnovationTeamData,
      titleOfInnovationTeam,

    };
  }, [props?.contactPage, props?.InnovationTeam]);

  return (
    <EvLayout showNavbar={true} title={"Contact-Us"}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <FindUsSection contactPage={contactPageData} />
        <InnovationTeamSection InnovationTeam={InnovationTeamData} Title={titleOfInnovationTeam} />
      </Container>
      <AboutNirvana contactPage={contactPageData} />
      <Container>
        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid />
          <PartnersGrid sx={{ mt: 5 }} />
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let contactPage = null;
  let contactPageError = null;
  try {
    contactPage = await api.getContactUs();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    contactPageError = dev_error;
  }
  if (!contactPage) {
    return {
      notFound: true,
    };
  }
  let InnovationTeam = null;
  let InnovationTeamError = null;
  try {
    InnovationTeam = await api.getInnovationTeam();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    InnovationTeamError = dev_error;
  }
  if (!InnovationTeam) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      contactPage: JSON.stringify(contactPage),
      contactPageError: JSON.stringify(contactPageError),
      InnovationTeam: JSON.stringify(InnovationTeam),
      InnovationTeamError: JSON.stringify(InnovationTeamError),
    },
    revalidate: 10, // In seconds
  };
}

export default EvContactUs;
