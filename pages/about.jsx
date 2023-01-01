import { Box, Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import LandingText from "src/components/EvSections/about-page-sections/LandingText";
import Exhibition from "src/components/EvSections/about-page-sections/Exhibition";
import SummitSection from "src/components/EvSections/about-page-sections/SummitSection";
import OpenTechSection from "src/components/EvSections/about-page-sections/OpenTechSection";
import AdvisoryBoardSection from "src/components/EvSections/about-page-sections/AdvisoryBoardSection";
import VenueSection from "src/components/EvSections/about-page-sections/VenueSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";

import api from "src/utils/api/evis-api";
import { useMemo } from "react";

// import Footer from "src/components/EvSections/why-exhibit-sections/Footer";

// ======================================================
// ======================================================

const GeneralPage = (props) => {
  let speakers = useMemo(() => {
    if (!props?.speakers) {
      return {};
    }

    let data = JSON.parse(props.speakers)?.data ?? null;
    // const speakers = data;

    const speakers = data?.map((speaker) => {
      return {
        name: speaker?.attributes?.name ?? "",
        title: speaker?.attributes?.title ?? "",
        company: speaker?.attributes?.company ?? "",
        year: speaker?.attributes?.year ?? "",
        src: speaker?.attributes?.image?.data?.attributes?.url ?? "",
        phoneNumber: speaker?.attributes?.phone_number ?? "",
        slug: speaker?.attributes?.slug ?? "",
        about: speaker?.attributes?.about ?? "",
      };
    });

    return speakers;
  }, [props?.speakers]);

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
      };
    });

    return sponsors;
  }, [props?.sponsors]);

  let {
    aboutEvis,
    conference,
    exhibition,
    topics,
    venu_paragraph_1,
    venu_paragraph_2,
    sessions,
    videos,
  } = useMemo(() => {
    if (!props?.aboutPage) {
      return {};
    }

    let data = JSON.parse(props.aboutPage).data?.attributes ?? null;
    console.log("data", data);
    const aboutEvis = {
      title: data?.aboutEvis?.title ?? "",
      paragraph: data?.aboutEvis?.paragraph ?? "",
    };
    const conference = {
      title: "",
      ps: data?.conference?.paragraph ?? "",
      img: data?.conference?.image?.data?.attributes?.url,
    };
    const exhibition = {
      title: "",
      ps: data?.exhibition?.paragraph ?? "",
      img: data?.exhibition?.image?.data?.attributes?.url,
    };
    const topics = data?.topics?.map((topic) => {
      return topic?.text;
    });
    const venu_paragraph_1 = data?.venu_paragraph_1 ?? "";
    const venu_paragraph_2 = data?.venu_paragraph_2 ?? "";

    const sessions = {
      title: "",
      ps: data?.sessions?.paragraph ?? "",
      img: data?.sessions?.image?.data?.attributes?.url,
    };

    const videos = data?.videos?.map((video) => {
      return {
        youtube: video?.youtube_link ?? "",
      };
    });

    return {
      aboutEvis,
      conference,
      exhibition,
      topics,
      sessions,
      venu_paragraph_1,
      venu_paragraph_2,
      videos,
    };
  }, [props?.aboutPage]);

  const key_partners = sponsors?.filter((sponsor) => {
    return sponsor.key_partner === true;
  });
  const knowledgePartners = sponsors?.filter((partner) => {
    return partner.knowledge_partner === true;
  });

  return (
    <EvLayout showNavbar={true}>
      <Container>
        <LandingText
          id={"summit"}
          paragraph={aboutEvis.paragraph}
          topic={aboutEvis.title}
        />
      </Container>
      <Container>
        <Exhibition item={exhibition} />
      </Container>
      <SummitSection item={conference} topics={topics}></SummitSection>
      <Container>
        <OpenTechSection item={sessions} videos={videos}></OpenTechSection>
      </Container>
      <AdvisoryBoardSection advisoryBoardData={speakers}></AdvisoryBoardSection>
      <Container>
        <VenueSection
          venu_paragraph_1={venu_paragraph_1}
          venu_paragraph_2={venu_paragraph_2}
        ></VenueSection>
        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid sponsors={key_partners} />
          <PartnersGrid sx={{ mt: 5 }} partners={knowledgePartners} />
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let aboutPage = null;
  let aboutPageError = null;

  let sponsors = null;
  let sponsorsError = null;

  let partners = null;
  let partnersError = null;

  let speakers = null;
  let speakersError = null;

  try {
    aboutPage = await api.getAboutPage();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    aboutPageError = dev_error;
  }

  if (!aboutPage) {
    return {
      notFound: true,
    };
  }

  try {
    sponsors = await api.getSponsors();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    sponsorsError = dev_error;
  }

  if (!sponsors) {
    return {
      notFound: true,
    };
  }

  try {
    speakers = await api.getSpeakers();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    speakersError = dev_error;
  }

  if (!speakers) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      aboutPage: JSON.stringify(aboutPage),
      aboutPageError: JSON.stringify(aboutPageError),
      sponsors: JSON.stringify(sponsors),
      sponsorsError: JSON.stringify(sponsorsError),
      partnersError: JSON.stringify(partnersError),
      speakers: JSON.stringify(speakers),
      speakersError: JSON.stringify(speakersError),
    },
    revalidate: 10, // In seconds
  };
}
export default GeneralPage;
