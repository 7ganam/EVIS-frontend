import { Container } from "@mui/material";
import WhyExhibit from "components/EvSections/why-exhibit-sections/WhyExhibit";
import ExhibitionFeatures from "components/EvSections/why-exhibit-sections/ExhibitionFeatures";
import ByExhibit from "components/EvSections/why-exhibit-sections/ByExhibit";
import ExpectMeet from "components/EvSections/why-exhibit-sections/ExpectMeet";
import Footer from "components/EvSections/why-exhibit-sections/Footer";


import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
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
    img: "/assets/images/why-exhibit/2.png",
    content: "Connect with thousands of prospective customers and partners",
  },
  {
    img: "/assets/images/why-exhibit/3.png",
    content: "Network with global representatives from across the H/EV supply chain",
  },
  {
    img: "/assets/images/why-exhibit/4.png",
    content: "Stay informed on the latest trends in the EV industry",
  },
  {
    img: "/assets/images/why-exhibit/5.png",
    content: "Benchmark your products and services against industry competition",
  },
  {
    img: "/assets/images/why-exhibit/6.png",
    content: "Stay ahead of the curve on evolving customer requirements",
  },
];

const featureList = [
  {
    img: "/assets/images/why-exhibit/7.jpg",
    content : "You can preview new and improved solutions for your applications during the new product showcase. Attend live demonstrations at the booths to learn about new and improved products.",
    buttonText: "DOWNLOAD BROCHURE NOW",
    buttonLink: "/",
    title: "New Product Showcase",
  },
  {
    img: "/assets/images/why-exhibit/8.jpg",
    content : "Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.",
    buttonText: "BOOK A STAND",
    buttonLink: "/",
    title: "Open Tech Sessions",
  }
];

// const whyExhibit = {
//   p1: "EV innovation is accelerating due to contributions from all around the globe. Improvement in batteries, motor control, and support software will continue to occur and will make EVs a better investment.",
//   p2 : "The exhibition will provide a world-class environment for EV industry to showcase the latest solutions in front of an audience who matters, including financiers and investors, engineers, R&D & government officials.",
//   p3 : "More than 5,000 professionals representing leading companies in the EV industry will be in Abu Dhabi with the goal of networking and sourcing the latest technologies across the 3 days of exhibition.",
//   img : "/assets/images/why-exhibit/charger.png"
// };
const footer1 = [
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQyODYxZjIzZDk0NjRmNjA=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ0ODYxZjIzZGE4N2NhZWM=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ3MzYxZjIzZGMxMDU2Mjc=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ4NTYxZjIzZGNkZTU0ODc=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTkyODYyMmIwMmM4OTk4YjE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTk2MTYyMmIwMmU5OGQ3MjA=.png",
  }
]

const footer2 = [
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjE0MjYxZmQyZDNlNGE3OWY=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEzMjYxZmQyZDM0NWQ4MzE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjExMDYxZmQyZDFlNGVlMjY=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEyMzYxZmQyZDJiMGY1NTE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk5NTYyMWM2MGYzZTVhODE=.png",
  },
  {
      source: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk4NDYyMWM2MGU4ZGVhYjI=.png",
  }
]


const whyExhibit = {
  img: "/assets/images/why-exhibit/charger.png",
  title: " ",
  p1: `EV innovation is accelerating due to contributions from all around the globe. Improvement in batteries, motor control, and support software will continue to occur and will make EVs a better investment.`, 
  p2 :`The exhibition will provide a world-class environment for EV industry to showcase the latest solutions in front of an audience who matters, including financiers and investors, engineers, R&D & government officials.`,
  p3 :`More than 5,000 professionals representing leading companies in the EV industry will be in Abu Dhabi with the goal of networking and sourcing the latest technologies across the 3 days of exhibition.`,
  direction: "right",
};

const generalPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <WhyExhibit whyExhibit = {whyExhibit} />
        <ExhibitionFeatures data = {featureList} />
        <ByExhibit data = {serviceList} />
      <ExpectMeet data = {peopleList}/>
      <Footer footer1 = {footer1} footer2 = {footer2}/>

      </Container>


      {/* <FeatureSection featureList={featureList} /> */}
      {/* <CardsSection data = {featureList} />
      <WhatToExpect serviceList={serviceList} />
      <ExpectToMeet list={peopleList} /> */}
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
