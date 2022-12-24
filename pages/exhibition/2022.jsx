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
    img: "/assets/images/2022_EXHIBITOR/Al Damani/Al Damani logo.png",
    content: "Al Damani",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Al Masaood Automobiles Company/Al Masaood Logo.png",
    content: "Al Masaood Automobiles Company",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Al Masaood Power/Masaood Power logo.jpg",
    content: "Al Masaood Power",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Audi - Ali & Sons/Audi logo.png",
    content: "Audi - Ali & Sons",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/autonxt/AA Logo Final.png",
    content: "Autonxt",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Barq EV/download.png",
    content: "Barq EV",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/British Volt/British volt logo.png",
    content: "BritishVolt",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/CEBC/CEBC_Logo---New.png",
    content: "CEBC",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/CharIN/charin logo.jpg",
    content: "CharIN",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/CITA EV/CITA EV High Res.png",
    content: "CITA EV",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/City Transformer/CT Logo PNG Black.png",
    content: "City Transformer",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/CUSP/CUSP.png",
    content: "CUSP",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Emirates Global Motor Electric/EGME.pdf.png",
    content: "Emirates Global Motor Electric",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Emirates Motor Company/EMC logo.jpg",
    content: "Emirates Motor Company",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/EVO Cargo/evocargo-color-png.png",
    content: "EVO Cargo",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/EVS/EVS_logo.png",
    content: "EVS",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/EV Tech (SIIG)/EV Tech logo-02.jpg",
    content: "EV Tech (SIIG)",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/FUSE/Fuse logo.png",
    content: "FUSE",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/GENEC/Genec.jpg",
    content: "GENEC",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Gulf Auto Center DMCC/NEW AUTO LOGO PNG.png",
    content: "Gulf Auto Center DMCC",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Juma Al Majid (Hyundai)/JAM Est logo png.png",
    content: "Juma Al Majid (Hyundai)",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/MENA mobility (Al Naboodah)/Al Naboodah Logo.jpg",
    content: "MENA mobility (Al Naboodah)",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/NEV investment/NEV LOGO png.png",
    content: "NEV Investment",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Propower Electrical equipments/Powertech Mobility English Logo .pdf.png",
    content: "Propower Electrical Equipments",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Pulse EV/Pulse Logo -02.jpg",
    content: "Pulse EV",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/QPole Energy Services/qpole-logo-White Backgroung.png",
    content: "QPole Energy Services",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/SABER-THIQAH/SABER PNG.png",
    content: "SABER-THIQAH",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/STELLANTIS (Peugeout)/Peugeot-Brand-Logo-CMJN-WBG_01.png",
    content: "STELLANTIS (Peugeout)",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Temai General Trading/TEMAI logo.png",
    content: "Temai General Trading",
  },
  {
    img: "/assets/images/2022_EXHIBITOR/Trinomial Solutions Nigeria (NADDC)/Logo NADDC.jpg",
    content: "Trinomial Solutions Nigeria (NADDC)",
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
        <Cards data={serviceList} />
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
