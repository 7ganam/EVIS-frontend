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
    src: "/assets/images/board/dr elias.png",
    name: "Dr. Elias Boutros Sayah",
    title: "President and Founder",
    company: "Sayah Engineering MENA",
    about: `President and Founder at Sayah Engineering MENA,
GEFCO Trading &amp; LIWA Petroleum Technology

Senior Vice President
AmCham Abu Dhabi
International director for Region 10
American Society of Civil Engineers ASCE
https://www.linkedin.com/in/eliassayah`,
  },
  {
    src: "/assets/images/board/prof nizar al holou.png",
    name: "Prof. Nizar Al-Holou",
    title: "Professor Emeritus",
    company: "University of Detroit Mercy",
    about: `Dr. Nizar Al-Holou is a Professor Emeritus of Electrical &amp; Computer Engineering
&amp; Computer Science at the University of Detroit Mercy since 2019. He was a
Professor for 26 years. He served as chair of the ECE department for 14 years.
He has been an active member of numerous professional engineering societies
such as the Institute of Electrical and Electronic Engineer IEEE, IEEE-Computer
Society, Intelligent Transportation Systems (ITS), and the American Society for
Engineering Education (ASEE).`,
  },
  {
    src: "/assets/images/board/eng. kamal malas.jpg",
    name: "Dr. Eng. Kamal Adnan Malas",
    title: `Kamal Malas &amp; Associates
Prof. Eng., PhD (disputes),
BA, MS in Law, MCIArb`,
    company: "",
    about: `Kamal Malas &amp; Associates
Prof. Eng., PhD (disputes),
BA, MS in Law, MCIArb
www.kamalmalas.com
Mob. 00971505971141`,
  },
  {
    src: "/assets/images/board/prof sabouni.jpg",
    name: "Prof. Abdul Rahim Sabouni",
    title: "PhD (Cornell), MSc(GWU), BSc(Honor) PEng, FASCE, FACI,FCIOB,IAUP",
    company: "",
    about: `Professor Abdul Rahim Sabouni is the President &amp; CEO of the Emirates College of
Technology ECT, and the founding CEO of Span M Consulting. He holds a PhD degree from
Cornell university and a Master’s degree from George Washington University in Structural
Engineering. He has more than 30 years of academic and professional experience in the US,
Canada, and the Middle East. He assumed teaching, research, and/or adjunct faculty
positions at several universities including Damascus University, UAE University, Ryerson
University, Western University, and Carleton University. Dr. Sabouni is the past president of
Civil Net International, Canada. He assumed the posts of the Building Design Expert, and
Technical and Projects Adviser in Abu Dhabi Municipality. He is a registered Professional
Engineer in Ontario, Fellow of the American Concrete Institute and the founding president of
the ACI-UAE Chapter, Fellow of the American Society of Civil Engineers and President of the
ASCE-UAE Section, Fellow and chartered construction manager CIOB, UK, Director of the
International Federation of High Rise StructuresIFHSUAE. He is the first recipient of the
George Winter Award from Cornell University, and the founding editor of a refereed scientific
engineering Journal in Abu Dhabi.`,
  },
  {
    src: "/assets/images/board/salim hariri.jpg",
    name: "Salim hariri",
    title: "Co-Director",
    company: `NSF Center for Cloud and Autonomic Computing The University of Arizona`,
    about: `Salim Hariri is a Professor in the Department of Electrical and Computer Engineering at The University of Arizona.
He received his Ph.D. in computer engineering from University of Southern California in 1986, an MSc from The
Ohio State University in 1982 and Electronic Engineering from Damascus University, Syria in 1977.
He is the co-director of NSF Center for Cloud and Autonomic Computing and he is the Editor-In-Chief for the
CLUSTER COMPUTING JOURNAL (Springer, http://clus.edmgr.com). He is the founder of the IEEE/ACM
Symposium on High Performance Distributed Computing (HPDC) started in 1990, http://www.hpdc.org.
Research interests include Autonomic Computing, Self-protection of networks and computers, Cybersecurity
modeling and analysis, resilient cyber resources and services, resilient DDDAS services, and high performance
distributed systems. Dr. Hariri has co-authored five books in the area of autonomic computing and parallel and
distributed systems. At the University of Arizona, he lead managed more than 10 million dollars of research
projects funded by the National Science Foundation (NSF), Department of Energy, Deparmtne of Defense and
industry.
Dr. Hariri is a founder of AVIRTEK, a startup Cybersecurity company from the NSF CAC center at UA. AVIRTEK
received more than 7 million dollars in DoD funding to develop innovative Autonomic Cyber Security platform that
provides self-protection with little involvement of users or system administrators.`,
  },
  {
    src: "/assets/images/board/dr_mohd_kafafy.jpg",
    name: "Dr. Mohamed G. Kafafy, PhD; DBA",
    title: "President",
    company: "World Chairman",
    about: `Dr. Mohamed G. Kafafy, PhD; DBA

World Chairman | President
World Green Economy Council (WGECO)
HR Management Institute (HRMI)
Global Quality Council (GQCO)

Emails: President@WGECO.org / President@HRMI.org / Info@GQCO.org
Phone: +202-44822119 - GSM: +2-01001612017 (WhastApp)
Official Sites:  www.HRMI.org / www.WGECO.org / www.GQCO.org`,
  },
  {
    src: "/assets/images/board/dr_ rami_sabouni.jpg",
    name: "Dr. Rami Sabouni",
    title: `Adjunct Professor`,
    company: "Carleton University, Ottawa, Canada",
    about: `Dr. Rami Sabouni is Adjunct Professor at Carleton University, Ottawa, Canada. He holds a PhD degree and
Master of Science degree from Carleton University in Systems and Computer Engineering and Master of
Engineering degree from University of Detroit Mercy in Electrical and Computer Engineering. He has
more than 10 years of academic and professional experience in the US, Canada, and the Middle East. He
assumed teaching and research positions at several universities including UAE University, University of
Detroit Mercy and Carleton University.
Recent relevant publications.
R. Sabouni and R. H. M. Hafez, “Performance of DSRC for V2V communications in urban and highway
environments”, Canadian Conference on Electrical and Computer Engineering (CCECE, 2012), Montreal,
Quebec, Canada, May, 2012.
R. Sabouni, N. Al-Holou, U. Mohammad, K. Albarazi, S. Fallouh, M. Abdul-Hak, and F. Saadeh, “New
Approach To Enhance And Evaluate The Performance Of Vehicle-Infrastructure Integration And Its
Communication Systems”, Report No: MIOH UTC TS15p1-2 2010-Final, September 2010.
Rami Sabouni, Evaluation of DSRC for V2V Communications, Master of Applied Science in Systems and
Computer Engineering, Carleton University, Canada, MSc Thesis, April 2011.
Rami Sabouni, Evaluation of DSRC for V2V Communications, Master of Engineering in Computer
Engineering, University of Detroit Mercy, MSc Thesis, USA, August 2008.`,
  },
  {
    src: "/assets/images/board/dr rawa adla.jpg",
    name: "Dr. Rawa Adla",
    title: "Assistant Professor",
    company: `Department of Electrical and Computer
Engineering at Florida Polytechnic University`,
    about: `Dr. Rawa Adla is an assistant professor at the Department of Electrical and Computer
Engineering at Florida Polytechnic University, FL, USA. Previously she held multi
positions at different academic and industrial institutes. She was an assistant professor
at the University of Arizona, Tucson, AZ. Also, she was a senior research engineer at
Ford Motor Company / Collision Avoidance Metrics Partnership (CAMP). She was the
technical lead manager for projects related to connected vehicles V2X and autonomous
driving. Dr. Adla has more than ten years of teaching and research experience. Dr. Adla
earned her doctoral degree in Electrical and Computer Engineering from the University
of Detroit Mercy, MI, and her Master’s degree in Computer Science from the University
of Michigan. Her B.S in Electrical and Computer Engineering from the University of
Aleppo. Dr. Adla research interest lies in the field of control systems and theories,
wireless communication, automotive safety, connected vehicles and autonomous
driving, and electric vehicles. More specifically, her research spans several areas and
aims to be as interdisciplinary as possible such as, data-fusion / target tracking problem,
real-time signal filtering and prediction. Dr. Adla has published several referee papers
and co-authored multiple high-quality publications. She is a senior member of IEEE,
ACM, SWE, and the Eta Kappa Nu (HKN) (Electrical Engineering Honor Society).`,
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
