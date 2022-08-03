import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import LandingText from "components/EvSections/about-page-sections/LandingText";
import MobilityFuture from "components/EvSections/about-page-sections/MobilityFuture";
import CoreSection from "components/EvSections/about-page-sections/CoreSection";

import Footer from "components/EvSections/why-exhibit-sections/Footer";

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
        <CoreSection />

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
