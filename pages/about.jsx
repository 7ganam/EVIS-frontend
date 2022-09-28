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

const section = {
  p1: "The Electric Vehicle Innovation Summit is the MENA region’s first and largest Electric Vehicle Exhibition and Conference which embodies our slogan “Where EV Innovations Meet”. It uniquely integrates inter-related EV technologies at one event, allowing attendees to network across value chains and exploit new opportunities at the intersection of EV technologies. EVIS will bring together the most influential researchers, engineers, government officials, companies, and EV-related institutions from around the world to explore and discuss the latest technical, policy, and market achievements in the E-mobility scene.",
  p2: "The event will feature a major exhibition with the biggest e-mobility companies, a world-class conference featuring the most experienced and the brightest minds of the industry as speakers; Open tech sessions where companies share their insider takes on the latest technical content and developments in sustainable mobility; and unmatched networking opportunities.",
  p3: "Join industry leaders at EVIS2023 for 3 days from 29th to 31st May 2023 at Abu Dhabi National Exhibition Center, Abu Dhabi.",
};

const ExhibitionItem = {
  img: "/assets/images/why-exhibit/DSC08355.jpg",
  title: "",
  ps: [
    `The exhibition will provide a high-quality environment for the EV industry to showcase their latest solutions to an audience who matters, including financiers and investors, engineers, R&D & government officials. More than 5,000 professionals representing leading companies in the EV industry will be in Abu Dhabi with the goal of networking and sourcing the latest technologies across the 3 days of exhibition. Exhibitors include EV-related Manufacturers and Distributors, Fleet owners, Integrated Energy Companies, Banks, Finance and Investment Firms, R & D Companies, Environmental Agencies, Government organizations, Municipalities, Public Transport Operators etc.

You can preview new and improved solutions for your applications during the new product showcase, attend live demonstrations at the booths to learn about new and improved products, and learn about the latest innovations from all around the world.
`,
  ],
  direction: "left",
};

const OpenTechData = {
  img: "/assets/images/about-page/DSC08151.jpg",
  text: `Explore the latest technical content and developments in the industry through presentations, panel discussions and case studies shared by our brilliant Open Tech speakers, all in the show floor and free to attend for everyone. EVIS is committed to accelerating e mobility adoption and is continually working towards shaping the future of mobility by bringing together key players and influential business leaders who works together on electric vehicles, energy and charging infrastructure, information technology to explore more advanced systems.

Take a look at the Open Tech Sessions from the first edition of EVIS.
`,
  videosList: [
    { youtube: "FnU_SEdn3d4" },
    { youtube: "0HfcbVQzXFc" },
    { youtube: "Q-NqQ_LyGdQ" },
    { youtube: "tKfOCjdwaJ0" },
    { youtube: "Jw_MFPnYn7s" },
    { youtube: "CAKf5hgSZyU" },
  ],
};

const advisoryBoardData = [
  {
    src: "/assets/images/board/Ahmed_Samir_Elbermbali.jpg",
    name: "Ahmed Samir Elbermbali",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/Shadie-Bisharat IAB.png",
    name: "Shadie-Bisharat IAB",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/dr elias.png",
    name: "Dr Elias",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/prof nizar al holou.png",
    name: "Prof Nizar Al Holou",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/eng. kamal malas.jpg",
    name: "Eng. kamal Malas",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/prof sabouni.jpg",
    name: "prof Sabouni",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/salim hariri.jpg",
    name: "Salim hariri",
    title: "Head of Organizing Committee",
    company: "",
  },
  {
    src: "/assets/images/board/dr_mohd_kafafy.jpg",
    name: "Dr Mohd Kafafy",
    title: "Conference Manager",
    company: "",
  },
  {
    src: "/assets/images/board/dr_ rami_sabouni.jpg",
    name: "Dr Rami Sabouni",
    title: "Operations Manager",
    company: "",
  },
  {
    src: "/assets/images/board/dr rawa adla.jpg",
    name: "Dr Rawa Adla",
    title: "Operations Manager",
    company: "",
  },
];

const VenueSectionData = {
  text: `Abu Dhabi has been selected as the venue for the Electric Vehicle Innovation Summit. As the capital of the United Arab Emirates, Abu Dhabi is a business-centric hub, strategically located at the heart of the energy evolution and the application of innovative solutions including the electrical vehicles. With its ‘Economic Vision 2030’ and ‘UAE Energy Strategy 2050’ the UAE government strongly supports a conducive platform towards innovation, cost efficiencies in the energy sector, investor friendly regulations and responsible governance. The ‘Energy Strategy 2050’ aims to increase the contribution of clean energy in the total energy mix from 25% to 50% by 2050 and reduce carbon footprint of power generation by 70 percent, thus saving AED 700 billion by 2050. It also seeks to increase consumption efficiency of individuals and corporates by 40%.
The Emirate also has easy access to developing markets, with more than 200 air routes, 150 shipping lanes and world-class, fully integrated port and logistics’ infrastructure.

`,
};

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
    // const sponsors = data;

    const sponsors = data?.map((sponsor) => {
      return {
        text: sponsor?.attributes?.title ?? "",
        source: sponsor?.attributes?.image?.data?.attributes?.url ?? "",
      };
    });

    return sponsors;
  }, [props?.sponsors]);

  let partners = useMemo(() => {
    if (!props?.partners) {
      return {};
    }

    let data = JSON.parse(props.partners)?.data ?? null;
    // const partners = data;

    const partners = data?.map((partner) => {
      return {
        text: partner?.attributes?.title ?? "",
        source: partner?.attributes?.image?.data?.attributes?.url ?? "",
      };
    });

    return partners;
  }, [props?.partners]);

  let {
    aboutEvis,
    conference,
    exhibition,
    topics,
    venue,
    mapContent,
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
    const venue = {
      title: data?.venue?.title ?? "",
      text: data?.venue?.paragraph ?? "",
    };
    const mapContent = {
      text: data?.mapContent?.text,
    };
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
      venue,
      mapContent,
      videos,
    };
  }, [props?.aboutPage]);

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
        <VenueSection data={venue} map={mapContent.text}></VenueSection>
        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid sponsors={sponsors} />
          <PartnersGrid sx={{ mt: 5 }} partners={partners} />
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
    partners = await api.getPartners();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    partnersError = dev_error;
  }

  if (!partners) {
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
      partners: JSON.stringify(partners),
      partnersError: JSON.stringify(partnersError),
      speakers: JSON.stringify(speakers),
      speakersError: JSON.stringify(speakersError),
    },
    revalidate: 10, // In seconds
  };
}
export default GeneralPage;
