import { Box, Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import LandingText from "src/components/EvSections/about-page-sections/LandingText";
import Exhibition from "src/components/EvSections/about-page-sections/Exhibition";
import SummitSection from "src/components/EvSections/about-page-sections/SummitSection";
import OpenTechSection from "src/components/EvSections/about-page-sections/OpenTechSection";
import MarketGateway from "@/components/EvSections/about-page-sections/MarketGateway";
import AdvisoryBoardSection from "src/components/EvSections/about-page-sections/AdvisoryBoardSection";
import VenueSection from "src/components/EvSections/about-page-sections/VenueSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";

import api from "src/utils/api/evis-api";
import { useMemo } from "react";

// import Footer from "src/components/EvSections/why-exhibit-sections/Footer";

// ======================================================
// ======================================================
const advisoryBoard = [
  {
    src: "/assets/images/board/Ahmed_Samir_Elbermbali.jpg",
    name: "Ahmed Samir Elbermbali",
    title: "",
    company: "",
  },
  {
    src: "/assets/images/board/Shadie-Bisharat IAB.png",
    name: "Shadie-Bisharat IAB",
    title: "General Manager Kimah and Board Advisor",
    company: "",
    about: `Mr. Bisharat is a leading Executive in the Area of Automotive Technology with more than
15 years of experience in Sales, Management, and Operation in the Automotive
Industry, he has lately led IRP Systems&#39;s Global Sales Activity, with a strong emphasis
on leading and emerging markets and various segments of the electric vehicle world.
Before that Mr. Bisharat held several executive positions in global companies, such as
being the EMEIA President at Ham-let Group, and as a Vice President and Deputy CEO
at Arkal Automotive Group where he was a key influencer in the transformation of the
company to become a strong global player with a significant double-digit growth year-
over-year.
Mr. Bisharat as well is a director of the board at the Israeli Leadership Forum, a holder
of a B.Sc. in Industrial engineering and management from the Technion, a Global
Executive MBA from the IDC Herzliya, and a GCP from the Wharton Business School
Pennsylvania, USA.`,
  },
  {
    src: "/assets/images/board/Nabih Bedewi Photo 1.jpg",
    name: "Dr. Nabih E. Bedewi",
    title: "Managing Director, Global EEE ",
    company: "Global EEE",
    about: `Dr. Nabih E. Bedewi has been serving as Managing Director of Global EEE since 2004. Based in
Washington DC, Global EEE is a nonprofit that organizes student competitions throughout the world
with a focus on Education, Energy, and the Environment. Among the competitions are the United Solar
Challenge (USC), Global Electric Vehicle Challenge (GEVC), Global Hybrid-Electric Challenge (GHEC), and
the Electric Vehicle Grand Prix (EVGP). He also serves on the Executive Board of the International
Solarcar Federation, and continues to lecture at several universities in the USA and the Middle East and
North Africa (MENA) region.
Upon receiving his PhD degree in 1986, Dr. Bedewi worked on several projects at NASA - Goddard Space
Flight Center spanning multiple programs including the Hubble Space Telescope, Space Shuttle missions,
numerous satellites, and space robotics. Over the next decade, Dr. Bedewi moved his research direction
to focus on automotive engineering and alternative energy vehicles. He founded a research center
funded by the US Department of Transportation and the automotive companies, and grew the center to
60 faculty members and research assistants. During that period, Dr. Bedewi also led the GW solar car
team development and raced internationally in the US, Japan, and Australia. In 1996, his team won the
World Solar Rallye in Akita and the Grand Solar Challenge in Noto, Japan.
During his 35 year professional career, Dr. Bedewi published over 200 papers and presented at
numerous conferences. He also co-supervised the research of 38 doctoral students and over 300 master
students. He taught mostly graduate courses in various fields of mechanical engineering and alternative
energy, as well as student design projects emphasizing competitions. Dr. Bedewi holds a PhD (1986), MS
(1984) and BS (1983) in Mechanical Engineering from the University of Maryland, and an MBA (2007)
from California Coast University. Dr. Bedewi is an Egyptian-American and has been living in the
Washington DC area since 1979. He is married with two children.`,
  },
  {
    src: "/assets/images/board/Claas Bracklo - photo.jpg",
    name: "Claas Bracklo",
    title: "Chairman",
    company: "Charging Interface Initiative (CharIN)",
    about: `Claas Bracklo is Chairman of the Charging Interface Initiative (CharIN e. V.), Senior Consultant Electromobility at the VDA and Senior Manager within the power train development at BMW.

Claas Bracklo joined BMW in March 2005 and held various positions in research and development with focus on E/E-architectures, system design, hardware/software components and in car networking. Before his current position in the powertrain development he was in charge of body electronics development. 

He started his career at Mercedes Benz and Daimler in the development of data bus systems. He led several teams and departments in the area of system test, E/E-architecture and ECU-development. 


Claas Bracklo holds a degree in Electrical Engineering from the University of Dortmund.
.`,
  },
];
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
        link: sponsor?.attributes?.link ?? null,
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
  const mediaPartners = sponsors?.filter((partner) => {
    return partner.media_partner === true;
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
        <MarketGateway item={sessions} videos={videos}></MarketGateway>
      </Container>
      <AdvisoryBoardSection
        advisoryBoardData={advisoryBoard}
      ></AdvisoryBoardSection>
      <Container>
        <VenueSection
          venu_paragraph_1={venu_paragraph_1}
          venu_paragraph_2={venu_paragraph_2}
        ></VenueSection>
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
