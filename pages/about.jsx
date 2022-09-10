import { Box, Container } from "@mui/material";

import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
import LandingText from "src/components/EvSections/about-page-sections/LandingText";
import Exhibition from "src/components/EvSections/about-page-sections/Exhibition";
import SummitSection from "src/components/EvSections/about-page-sections/SummitSection";
import OpenTechSection from "src/components/EvSections/about-page-sections/OpenTechSection";
import AdvisoryBoardSection from "src/components/EvSections/about-page-sections/AdvisoryBoardSection";
import VenueSection from "src/components/EvSections/about-page-sections/VenueSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";

// import Footer from "src/components/EvSections/why-exhibit-sections/Footer";

// ======================================================
// ======================================================

const section = {
  p1: "The Electric Vehicle Innovation Summit is the MENA region’s first and largest Electric Vehicle Exhibition and Conference which embodies our slogan “Where EV Innovations Meet”. It uniquely integrates inter-related EV technologies at one event, allowing attendees to network across value chains and exploit new opportunities at the intersection of EV technologies. EVIS will bring together the most influential researchers, engineers, government officials, companies, and EV-related institutions from around the world to explore and discuss the latest technical, policy, and market achievements in the E-mobility scene.",
  p2: "The event will feature a major exhibition with the biggest e-mobility companies, a world-class conference featuring the most experienced and the brightest minds of the industry as speakers; Open tech sessions where companies share their insider takes on the latest technical content and developments in sustainable mobility; and unmatched networking opportunities.",
  p3: "Join industry leaders at EVIS2023 for 3 days from 29th to 31st May 2023 at Abu Dhabi National Exhibition Center, Abu Dhabi.",
};

const ExhibitionItem = {
  img: "/assets/images/about-page/1.jpeg",
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

const AdvisoryBoardData = [
  {
    Src: "/assets/images/contact-us/NaserAlbahri.jpeg",
    Name: "Eng. Naser Albahri",
    Position: "Head of Organizing Committee",
    Mobile: "+971 2 304 3321 / +971 50 211 1583",
    Email: "naser.ali@nirvanatls.com",
    EmailTo: "mailto:naser.ali@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/SarahSalera.jpeg",
    Name: "Sarah Salera",
    Position: "Conference Manager",
    Mobile: "+971 2 304 3353 / +971 50 452 1237",
    Email: "sara.salera@nirvanatls.com",
    EmailTo: "mailto:sara.salera@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/CorinaSharayah.jpeg",
    Name: "Corina Sharayah",
    Position: "Operations Manager",
    Mobile: "+971 2 304 3354 / +971 56 111 0272",
    Email: "corina.sh@nirvanatls.com ",
    EmailTo: "mailto:corina.sh@nirvanatls.com ",
  },
  {
    Src: "/assets/images/contact-us/ZayidAhamed.jpeg",
    Name: "Zayid Ahamed",
    Position: "Exhibition Enquiries - Sales Executive",
    Mobile: "+971 2 304 3352 / +971 50 686 3956",
    Email: "zayid.ahamed@nirvanatls.com",
    EmailTo: "mailto:zayid.ahamed@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/JessySuraj.jpeg",
    Name: "Jessy Suraj",
    Position: "Exhibition Enquiries - Sales Team",
    Mobile: "+971 2 304 3322 / +971 50 686 3769",
    Email: "jessy.suraj@nirvanatls.com",
    EmailTo: "mailto:jessy.suraj@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/VilmaDucay.jpeg",
    Name: "Vilma Ducay",
    Position: "Conference Enquiries - Sales Team",
    Mobile: "+971 2 304 3322 / +971 50 686 3740",
    Email: "vilma.ducay@nirvanatls.com ",
    EmailTo: "mailto:vilma.ducay@nirvanatls.com ",
  },
  {
    Src: "/assets/images/contact-us/NasryAbouZaki.jpeg",
    Name: "Nasry Abou Zaki",
    Position: "PR Manager",
    Mobile: "+971 2 4444 788 / +971 56 998 9252",
    Email: "nasry.zaki@9yards.ae",
    EmailTo: "mailto:nasry.zaki@9yards.ae",
  },
  {
    Src: "/assets/images/contact-us/HadhiaShaju.jpeg",
    Name: "Hadhia Shaju",
    Position: "Marketing & Media Enquiries - Digital Marketing Specialist",
    Mobile: "+971 2 304 3322 / +971 50 686 3137",
    Email: "hadhia.shaju@nirvanatls.com",
    EmailTo: "mailto:hadhia.shaju@nirvanatls.com",
  },
  {
    Src: "/assets/images/contact-us/HeshamAlbahri.jpeg",
    Name: "Hesham Albahri",
    Position: "Member of Organizing Committee - US Market Executive Manager ",
    Mobile: "+18185817431",
    Email: "hesham@leadingeventsusa.com",
    EmailTo: "mhesham@leadingeventsusa.com",
  },
  {
    Src: "/assets/images/contact-us/TheanleouaChu.jpeg",
    Name: "Theanleoua Chu",
    Position: "Sales & Marketing Executive",
    Mobile: "+971 2 304 3333 / +971 503833859",
    Email: "theanleoua.chu@nirvanatls.com",
    EmailTo: "mailto:theanleoua.chu@nirvanatls.com",
  },
];

const VenueSectionData = {
  text: `Abu Dhabi has been selected as the venue for the Electric Vehicle Innovation Summit. As the capital of the United Arab Emirates, Abu Dhabi is a business-centric hub, strategically located at the heart of the energy evolution and the application of innovative solutions including the electrical vehicles. With its ‘Economic Vision 2030’ and ‘UAE Energy Strategy 2050’ the UAE government strongly supports a conducive platform towards innovation, cost efficiencies in the energy sector, investor friendly regulations and responsible governance. The ‘Energy Strategy 2050’ aims to increase the contribution of clean energy in the total energy mix from 25% to 50% by 2050 and reduce carbon footprint of power generation by 70 percent, thus saving AED 700 billion by 2050. It also seeks to increase consumption efficiency of individuals and corporates by 40%.
The Emirate also has easy access to developing markets, with more than 200 air routes, 150 shipping lanes and world-class, fully integrated port and logistics’ infrastructure.

`,
};

const generalPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <Container>
        <LandingText id={"summit"} section={section} />
      </Container>
      <SummitSection></SummitSection>
      <Container>
        <Exhibition item={ExhibitionItem} />
        <OpenTechSection item={OpenTechData}></OpenTechSection>
      </Container>
      <AdvisoryBoardSection data={AdvisoryBoardData}></AdvisoryBoardSection>
      <Container>
        <VenueSection data={VenueSectionData}> </VenueSection>
        {/* <Footer footer1={footer1} footer2={footer2} /> */}

        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid />
          <PartnersGrid />
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps() {
  const allProducts = await api.getGrocery3Products();
  const offerProducts = await api.getGrocery3offerProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  return {
    props: {
      allProducts,
      offerProducts,
      topSailedProducts,
    },
  };
}
export default generalPage;
