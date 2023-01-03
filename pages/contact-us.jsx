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
  let sponsors = useMemo(() => {
    if (!props?.sponsors) {
      return {};
    }

    let data = JSON.parse(props.sponsors)?.data ?? null;

    const sponsors = data?.map((sponsor) => {
      return {
        text: sponsor?.attributes?.title ?? "",
        source: sponsor?.attributes?.image?.data?.attributes?.url ?? "",
        year: sponsor?.attributes?.year ?? "",
        key_partner: sponsor?.attributes?.key_partner ?? null,
        sponsor: sponsor?.attributes?.sponsor ?? null,
        international_media_partner:
          sponsor?.attributes?.international_media_partner ?? null,
        knowledge_partner: sponsor?.attributes?.knowledge_partner ?? null,
        research_partner: sponsor?.attributes?.research_partner ?? null,
        media_partner: sponsor?.attributes?.media_partner ?? null,
        link: sponsor?.attributes?.link ?? null,
      };
    });

    return sponsors;
  }, [props?.sponsors]);
  const key_partners = sponsors?.filter((sponsor) => {
    return sponsor.key_partner === true;
  });
  const knowledgePartners = sponsors?.filter((partner) => {
    return partner.knowledge_partner === true;
  });
  const mediaPartners = sponsors?.filter((partner) => {
    return partner.media_partner === true;
  });

  let { contactPageData, InnovationTeamData, titleOfInnovationTeam } =
    useMemo(() => {
      if (!props?.contactPage) {
        return {};
      }
      let contactPageData =
        JSON.parse(props.contactPage).data?.attributes ?? null;
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
        <InnovationTeamSection
          InnovationTeam={InnovationTeamData}
          Title={titleOfInnovationTeam}
        />
      </Container>
      <AboutNirvana contactPage={contactPageData} />
      <Container>
        <Box sx={{ mt: "100px" }}>
          <PartnersGrid
            sx={{ mt: 5 }}
            partners={key_partners}
            title={"KEY PARTNERS"}
          />
          <PartnersGrid
            sx={{ mt: "80px" }}
            partners={knowledgePartners}
            title={"KNOWLEDGE PARTNERS"}
          />
          <PartnersGrid
            sx={{ mt: "80px", pb: "100px" }}
            partners={mediaPartners}
            title={"MEDIA PARTNERS"}
          />
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

  let sponsors = null;
  let sponsorsError = null;
  try {
    sponsors = await api.getSponsors(23);
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    sponsorsError = dev_error;
  }
  if (!sponsors) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      sponsors: JSON.stringify(sponsors),
      sponsorsError: JSON.stringify(sponsorsError),
      contactPage: JSON.stringify(contactPage),
      contactPageError: JSON.stringify(contactPageError),
      InnovationTeam: JSON.stringify(InnovationTeam),
      InnovationTeamError: JSON.stringify(InnovationTeamError),
    },
    revalidate: 10, // In seconds
  };
}

export default EvContactUs;
