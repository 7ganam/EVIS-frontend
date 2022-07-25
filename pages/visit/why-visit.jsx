import { Container , Box} from "@mui/material";

import WhyVisitSection from "pages-sections/why-visit-sections/WhyVisitSection";
import WhatToExpect from "pages-sections/why-visit-sections/WhatToExpect";
import ExpectToMeet from "pages-sections/why-exhibit-sections/ExpectToMeet";



import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================


const peopleList = [
  'Manufacturers of Electric & Hybrid Vehicles' ,
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
const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box hoverEffect data-aos="fade-up" data-aos-duration={1000}>
          <WhyVisitSection />
        </Box>
      </Container>
      <WhatToExpect serviceList={serviceList} />
      <ExpectToMeet list = {peopleList}/>
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
