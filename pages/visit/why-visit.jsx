import { Container, Box } from "@mui/material";

import WhyVisitSection from "pages-sections/why-visit-sections/WhyVisitSection";
import WhatToExpect from "pages-sections/why-visit-sections/WhatToExpect";
import ExpectToMeet from "pages-sections/why-exhibit-sections/ExpectToMeet";

import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import Section1 from "components/EvSections/WhyVisitSections/Section1";
import Section2 from "components/EvSections/WhyVisitSections/Section2";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================


const peopleList = [
  'Manufacturers of Electric & Hybrid Vehicles',
  'Innovators and Planning Specialists',
  'Engineering and Designing Companies',
  'Regulatory and Government Agencies',
  'Battery Manufacturers',
  'Charging Infrastructure Providers',
  'Component Manufacturers & Suppliers ',
  'Public Transport Operators',
  'Suppliers of Electric Components & Spare Parts',
  'Environmental Agencies',
  'Equipment Suppliers',
  'EV Charging Application Providers',
  'Law Firms and Academia',
  'Fleet Owners and Managers',
  'Automotive EV Service Providers'
];


const serviceList = [
  {
    image: "/assets/images/why-visit/2.png",
    text: "Meet potential clients",
  },
  {
    image: "/assets/images/why-visit/3.png",
    text: "Stay updated on new trends",
  },
  {
    image: "/assets/images/why-visit/4.png",
    text: "Keep the pulse on new product launches",
  },
  {
    image: "/assets/images/why-visit/5.png",
    text: "Hear from leaders in the industry",
  },
  {
    image: "/assets/images/why-visit/6.png",
    text: "Industry specific education",
  }
];

// const whyVisit = {
//   p1: "The Electric Vehicle Innovation Summit is the leading EV trade show and conference in the region offering access to hundreds of companies and experts in the industry.",
//   p2: "EVIS is more focused on Electric Vehicles which include land, air and sea, hence you will be able to get more insight on the latest applications, technologies, and market progress on electric vehicles.",
//   img: "/assets/images/why-visit/1.jpeg"
// }
const whyVisit = {
  img: "/assets/images/why-visit/1.jpeg",
  title: "WHY VISIT",
  text: "The Electric Vehicle Innovation Summit is the leading EV trade show and conference in the region offering access to hundreds of companies and experts in the industry. <br/> EVIS is more focused on Electric Vehicles which include land, air and sea, hence you will be able to get more insight on the latest applications, technologies, and market progress on electric vehicles.",
  direction: "right",
}
// img, title, text, direction

const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Section1 />
      </Container>
      <Section2 />

      <Container
        sx={{
          mb: 6,
        }}
      >

        {/* <TwoColumnBox item={whyVisit} /> */}
        <Box hoverEffect data-aos="fade-up" data-aos-duration={1000}>
          <WhyVisitSection data={whyVisit} />
        </Box>
      </Container>
      <WhatToExpect serviceList={serviceList} />
      <ExpectToMeet list={peopleList} />
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
