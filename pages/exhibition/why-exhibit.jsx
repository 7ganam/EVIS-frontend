import { Container, Box } from "@mui/material";
import WhyExhibitSection from "pages-sections/why-exhibit-sections/WhyExhibitSection";
import FeatureSection from "pages-sections/why-exhibit-sections/FeatureSection";
import WhatToExpect from "pages-sections/why-exhibit-sections/WhatToExpect";
import ExpectToMeet from "pages-sections/why-exhibit-sections/ExpectToMeet";


import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================

const peopleList = [
  'Vehicle Manufacturers and Distributors' ,
  'Integrated Energy Companies',
  'Banks, Finance and Investment Firms',
  'R & D Companies',
  'Engineers, Architects, and Designers',
  'Consultants',
  'Environmental Agencies',
  'Government Officials',
  'Law Firms and Academia',
  'Municipalities',
  'CEO/ President/ Chairman',
  'Owner/ Partner/ Proprietor',
  'Public Transport Operators',
  'Technical/ Business Specialists ',
  'Technology Service Provider'
];

const serviceList = [
  {
    image: "/assets/images/why-exhibit/2.png",
    text: "Connect with thousands of prospective customers and partners",
  },
  {
    image: "/assets/images/why-exhibit/3.png",
    text: "Network with global representatives from across the H/EV supply chain",
  },
  {
    image: "/assets/images/why-exhibit/4.png",
    text: "Stay informed on the latest trends in the EV industry",
  },
  {
    image: "/assets/images/why-exhibit/5.png",
    text: "Benchmark your products and services against industry competition",
  },
  {
    image: "/assets/images/why-exhibit/6.png",
    text: "Stay ahead of the curve on evolving customer requirements",
  }
];

const featureList = [
  {
    title: "Open Tech Sessions",
    text: "Explore the latest technical content and developments in the industry which includes presentations, panel discussions and case studies, all in the show floor and free to attend for everyone.",
    image: "/assets/images/ev-home/exh2-gradient.png",
    buttonText: "BOOK A STAND",
    buttonLink: "/",
  },
  {
    title: "New Product Showcase",
    text: "You can preview new and improved solutions for your applications during the new product showcase. Attend live demonstrations at the booths to learn about new and improved products.",
    image: "/assets/images/ev-home/exh4-gradient.png",
    buttonText: "DOWNLOAD BROCHURE NOW",
    buttonLink: "/",
  },
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
          <WhyExhibitSection />
        </Box>
      </Container>
      <FeatureSection featureList={featureList} />
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
