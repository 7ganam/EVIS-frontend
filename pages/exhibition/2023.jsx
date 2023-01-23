import { Box, Container } from "@mui/material";
import WhyExhibit from "src/components/EvSections/why-exhibit-sections/WhyExhibit";
import ExhibitionFeatures from "src/components/EvSections/why-exhibit-sections/ExhibitionFeatures";
import ByExhibit from "src/components/EvSections/why-exhibit-sections/ByExhibit";
import ExpectMeet from "src/components/EvSections/why-exhibit-sections/ExpectMeet";
import Footer from "src/components/EvSections/why-exhibit-sections/Footer";
import CoreSection from "@/components/EvSections/why-exhibit-sections/CoreSection";
import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/grocery3-shop";
import QuadImgSection from "src/components/EvSections/QuadImgSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import Cards from "@/components/EvSections/exhibitors/Cards";
// ======================================================
// ======================================================

const peopleList = [
  "Vehicle Manufacturers and Distributors",
  "Integrated Energy Companies",
  "Banks, Finance and Investment Firms",
  "R & D Companies",
  "Engineers, Architects, and Designers",
  "Consultants",
  "Environmental Agencies",
  "Government Officials",
  "Law Firms and Academia",
  "Municipalities",
  "CEO/ President/ Chairman",
  "Owner/ Partner/ Proprietor",
  "Public Transport Operators",
  "Technical/ Business Specialists ",
  "Technology Service Provider",
];

const serviceList = [
  {
    img: "/assets/images/2023_EXHIBITOR/CATEC-Mobility.webp",
    content: "Cubic Art Technologies (CATEC)",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/CEBC-Logo.png",
    content: "Clean Energy Business Council (CEBC)",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/Char-IN-logo-min.jpg",
    content: "Charging Interface Initiative (CharIN)",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/CITA-EV-logo-min.png",
    content: "CITA EV Charger ",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/EGME-min.png",
    content: "Emirates Global Motor Electric ",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/MOEI-logo-min.jpg",
    content: "Ministry Of Energy and Infrastructure ",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/Powertech-Mobility-logo-min.png",
    content: "Powertech Electrical Equipments Trading LLC ",
  },
  {
    img: "/assets/images/2023_EXHIBITOR/Quench-Logo-min.png",
    content: "Quench",
  },
];

const featureList = [
  {
    img: "/assets/images/why-exhibit/7.jpg",
    content:
      "You can preview new and improved solutions for your applications during the new product showcase. Attend live demonstrations at the booths to learn about new and improved products.",
    buttonText: "DOWNLOAD BROCHURE NOW",
    buttonLink: "/",
    title: "New Product Showcase",
  },
  {
    img: "/assets/images/why-exhibit/8.jpg",
    content:
      "Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.",
    buttonText: "LEARN MORE",
    buttonLink: "/about#open-tech",
    title: "Open Tech Sessions",
  },
];

const whyExhibit = {
  img: "/assets/images/why-exhibit/DSC08355.jpg",
  title: " ",
  ps: [
    `As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade. Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.
EVIS is unique by integrating inter-related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.
`,
  ],
  direction: "right",
};

const futureOfMobility = {
  img: "/assets/images/why-exhibit/f2.jpg",
  title: "Future Of Mobility",
  ps: [
    `Electric cars will eventually be dominated by few giants; however the components and enabling technologies are applicable to many other types of vehicles - land,sea & air. Billion-dollar businesses will be created for those supplying components and vehicles to these “niches”. The electric vehicles of the future are likely to combine several enabling platforms. 
By providing accurate information about relative market sizes, battery demand and fastest growing electric vehicle markets beyond cars, our aim is to give those in the industry the knowledge to make more informed decisions on their investments and focus into the electric vehicle market.
EV’s are increasingly visible on the UAE’s roads. This number is set to expand rapidly in the coming years and will interlink the transport and electricity sector like never before. 

`,
  ],
  direction: "left",
};
const generalPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      ></Container>
      <Container>
        <Cards data={serviceList} title={"2023 EXHIBITORS"} />
      </Container>
    </EvLayout>
  );
};

export default generalPage;
