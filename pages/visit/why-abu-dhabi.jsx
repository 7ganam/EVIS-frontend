import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Landing from "components/EvSections/why-abu-dhabi-page/Landing";
import LandingText from "components/EvSections/why-abu-dhabi-page/LandingText";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";

// ======================================================

const sections = {
  p1 :"Abu Dhabi has been selected as the venue to launch the 1st Electric Vehicle Innovation Summit . The capital of the United Arab Emirates, Abu Dhabi is a business-centric hub, strategically located at the heart of the energy evolution and the application of innovative solutions including the electrical vehicles. With its ‘Economic Vision 2030’ and ‘UAE Energy Strategy 2050’ the UAE government strongly supports a conducive platform towards innovation, cost efficiencies in the energy sector, investor friendly regulations and responsible governance. The Emirate also has easy access to developing markets, with more than 200 air routes, 150 shipping lanes and world-class, fully integrated port and logistics’ infrastructure.",
  p2 :"With its booming metropolis, Abu Dhabi is bustling with tourism and trade and recognized throughout the Arabian Gulf region for its balance of business and cultural offerings. It is a vibrant emirate rich with history and heritage which is reflected in the variety of activities available both on land and at sea. Abu Dhabi’s history stretches back as far as 7,000 years – the Oasis city of Al Ain is the Abu Dhabi’s heritage heartland and a UNESCO World Heritage Site.",
}

const item =   {
  img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTYzMjEyNDM2MzYxNDgzZGNiZDgwOTE=.jpeg",
  title: "Sustainability",
  ps:[
    "Estidama, the Arabic word for sustainability, is the sustainability initiative of the Abu Dhabi Urban Planning Council (UPC). Abu Dhabi’s Plan 2030 establishes a clear vision for sustainability as the foundation of any new development occurring in the Emirate of Abu Dhabi. The purpose of Estidama is to create a new sustainability framework that will direct the current course of development while allowing adaptation as new understanding evolves. Its ultimate goal is to create an ever-improving quality of life for the residents of the Emirate on four equal pillars of sustainability: environmental, economic, social, and cultural."
  ],
  direction: "left",
}

const generalPage = () => {

  return (
    <EvLayout showNavbar={true}>
      <Landing />

      <Container
        sx={{
          mb: 6,
        }}
      ></Container>
      <LandingText section = {sections}/>
      <TwoColumnBox item={item} />
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
