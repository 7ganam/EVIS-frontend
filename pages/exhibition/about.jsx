import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import LandingText from "components/EvSections/about-page-sections/LandingText";
import MobilityFuture from "components/EvSections/about-page-sections/MobilityFuture";
import CoreSection from "components/EvSections/about-page-sections/CoreSection";
import ExpectMeet from "components/EvSections/about-page-sections/ExpectMeet";
import Facts from "components/EvSections/about-page-sections/Facts";
import Footer from "components/EvSections/why-exhibit-sections/Footer";
import {H3} from "components/EvComponents/Typography";
import QuadImg from 'components/EvComponents/QuadImg';


// ======================================================
// ======================================================



const section = {
  p1: "As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade. Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.",
  p2: "EVIS is unique by integrating inter-related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.",
  p3: "The Electric Vehicle Innovation Summit, partnered with Masdar, will bring together researchers, engineers, government officials, companies, EV-related institutions from around the world in Abu Dhabi to explore and discuss the technical, policy, and market achievements in E-mobility. The event will feature a major trade show, conference, plenary sessions and technical sessions.",
};

const footer1 = [
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQyODYxZjIzZDk0NjRmNjA=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ0ODYxZjIzZGE4N2NhZWM=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ3MzYxZjIzZGMxMDU2Mjc=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ4NTYxZjIzZGNkZTU0ODc=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTkyODYyMmIwMmM4OTk4YjE=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTk2MTYyMmIwMmU5OGQ3MjA=.png",
  },
];

const footer2 = [
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjE0MjYxZmQyZDNlNGE3OWY=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEzMjYxZmQyZDM0NWQ4MzE=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjExMDYxZmQyZDFlNGVlMjY=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEyMzYxZmQyZDJiMGY1NTE=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk5NTYyMWM2MGYzZTVhODE=.png",
  },
  {
    source:
      "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk4NDYyMWM2MGU4ZGVhYjI=.png",
  },
];

const item = {
  img: "/assets/images/about-page/1.jpeg",
  title: "",
  ps :[
   "Electric cars will eventually be dominated by few giants; however the components and enabling technologies are applicable to many other types of vehicles - land,sea & air. Billion dollar businesses will be created for those supplying components and vehicles to these niches.",
   "The electric vehicles of the future are likely to combine several enabling platforms.",
   "By providing accurate information about relative market sizes, battery demand and fastest growing electric vehicle markets beyond cars, our aim is to give those in the industry the knowledge to make more informed decisions on their investments and focus into the electric vehicle market.",
   "EV’s are increasingly visible on the UAE’s roads. This number is set to expand rapidly in the coming years and will interlink the transport and electricity sector like never before.",
],
  direction: "left",
};


const itemsData = [
  {
    img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5NzcxODYxNDM0MWQ2M2VhYWQ=.jpeg",
    title: "New Energy Vehicles",
    ps: [
      "Electric Passenger Vehicles",
      "Electric Light Vehicles",
      "Electric Commercial Vehicles",
      "Electric Motorcycles",
      "Electric Scooters",
      "Electric Bicycles",
      "Hybrid Electric Vehicles",
      "Fuel Cell Electric Vehicles",
    ],
    direction: "left",
  },
  {
    img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5Nzc1NDYxNDM0MWZhZGY1NTU=.jpeg",
    title: "Energy & Infrastructure",
    ps: [
      "Electric Energy Suppliers",
      "Hydrogen Energy Suppliers",
      "Energy Infrastructure",
      "Intelligent Grid V2G",
      "Electrical Cables",
      "Connectors",
      "Fast Charging Stations",
      "Energy and Charging Systems",
      "Charging Infrastructure",
      "Hydrogen Fuel infrastructure",
      "Communication Infrastructure",
    ],
    direction: "right",
  },
  {
    img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5Nzc5NzYxNDM0MjI1YmJhMGU=.jpeg",
    title: "Batteries",
    ps: [
      "Lithium Batteries, Lead-acid Batteries, Nickel",
      "Batteries(MH-Ni Battery) & Other Batteries",
      "Battery Management",
      "Battery Charging Systems",
      "Testing Systems & Testing Equipment",
      "Capacitors",
      "Fuel Cell Technology, Fuel Cell Systems & Fuel Cell",
      "Management",
      "Hydrogen Tank & Hydrogen Refueling",
      "Battery Manufacturing Equipment",
      "Raw Materials",
      "Parts & Components",
    ],
    direction: "left",
  },
  {
    img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5Nzg2NTYxNDM0MjY5NmU3YzI=.jpeg",
    title: "Powertrain",
    ps: [
      "General Motors",
      "In-wheel Motor",
      "Hybrid Engines",
      "Cable Braider and Automotive Wiring",
      "Drive Systems",
      "Transmission",
      "Braking Technology and Components",
      "Other Powertrain Components",
    ],
    direction: "right",
  },
];

const features = [
  "Recent announcements by vehicle manufacturers intending to electrify the car and buses markets.",
  "Battery manufacturing is undergoing important transitions, including major investments to expand production.",
  "Utilities, charging point operators, charging hardware manufacturers and other power sector shareholders are also boosting investments in charging infrastructures."
];

const p = "";
const facts = [
  {
    title: "5,000+",
    text: <H3>Attendees</H3>,
  },
  {
    title: "10,000+",
    text: <H3>Gross SQM</H3>,
  },
  {
    title: "200+",
    text: <H3>Exhibitors</H3>,
  },
  {
    title: "1000+",
    text: <H3>Delegate</H3>,
  },
  {
    title: "30+",
    text: <H3>Conference sessions</H3>,
  },
  {
    title: "100+",
    text: <H3>Speakers</H3>,
  }
];

const generalPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <LandingText section={section} />
        <MobilityFuture item = {item} />
        <CoreSection items = {itemsData} />
        <ExpectMeet data = {features} />
        </Container>
        <Facts data={facts} p={p}/>
        <QuadImg data = {itemsData} />
        <Container sx={{ mb: 6 }}>
        <Footer footer1={footer1} footer2={footer2} />
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
