import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Landing from "components/EvSections/why-abu-dhabi-page/Landing";
import LandingText from "components/EvSections/why-abu-dhabi-page/LandingText";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import TextField from "components/EvSections/why-abu-dhabi-page/TextField";
import Footer from "components/EvSections/why-exhibit-sections/Footer";
import Facts from "components/EvSections/why-abu-dhabi-page/Facts";
import {H2} from "components/EvComponents/Typography";

// ======================================================

const passedContent = (content) => {
  return <H2>{content}</H2>;
}

const sections = {
  p1: "Abu Dhabi has been selected as the venue to launch the 1st Electric Vehicle Innovation Summit . The capital of the United Arab Emirates, Abu Dhabi is a business-centric hub, strategically located at the heart of the energy evolution and the application of innovative solutions including the electrical vehicles. With its ‘Economic Vision 2030’ and ‘UAE Energy Strategy 2050’ the UAE government strongly supports a conducive platform towards innovation, cost efficiencies in the energy sector, investor friendly regulations and responsible governance. The Emirate also has easy access to developing markets, with more than 200 air routes, 150 shipping lanes and world-class, fully integrated port and logistics’ infrastructure.",
  p2: "With its booming metropolis, Abu Dhabi is bustling with tourism and trade and recognized throughout the Arabian Gulf region for its balance of business and cultural offerings. It is a vibrant emirate rich with history and heritage which is reflected in the variety of activities available both on land and at sea. Abu Dhabi’s history stretches back as far as 7,000 years – the Oasis city of Al Ain is the Abu Dhabi’s heritage heartland and a UNESCO World Heritage Site.",
};

const item = {
  img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTYzMjEyNDM2MzYxNDgzZGNiZDgwOTE=.jpeg",
  title: "Sustainability",
  ps: [
    "Estidama, the Arabic word for sustainability, is the sustainability initiative of the Abu Dhabi Urban Planning Council (UPC). Abu Dhabi’s Plan 2030 establishes a clear vision for sustainability as the foundation of any new development occurring in the Emirate of Abu Dhabi. The purpose of Estidama is to create a new sustainability framework that will direct the current course of development while allowing adaptation as new understanding evolves. Its ultimate goal is to create an ever-improving quality of life for the residents of the Emirate on four equal pillars of sustainability: environmental, economic, social, and cultural.",
  ],
  direction: "left",
};
const data = {
  title: "UAE Economic & Environmental Goals",
  ps: [
    "Home to one of the most advanced energy sectors in the region, Abu Dhabi has seen robust growth in electricity consumption with an annual growth rate of 5% over the past five years. Renewable energy, nuclear and waste-to-energy have allowed for lucrative business opportunities to arise.",
    "In 2017, the UAE launched ‘Energy Strategy 2050’, which is considered the first unified energy strategy in the country that is based on supply and demand. The strategy aims to increase the contribution of clean energy in the total energy mix from 25% to 50% by 2050 and reduce carbon footprint of power generation by 70 percent, thus saving AED 700 billion by 2050. It also seeks to increase consumption efficiency of individuals and corporates by 40%.",
    "The new energy strategy is being implemented in three phases. The first phase aims to accelerate efficient consumption of energy as well as diversifying and securing it. The second phase is to find new solutions that integrate with energy and transportation solutions. The third phase focuses on research and development in addition to innovation and creativity to supply sustainable energy.",
  ],
  lst: [],
};
const data2 = {
  title: "Global Investments",
  ps: [
    "The UAE government aims to invest AED 600 billion by 2050 to meet the growing energy demand and ensure a sustainable growth for the country’s economy.",
    "Ramping up renewables to 10% of the country’s total energy mix, and 25% of total power generation, could generate annual savings of USD 1.9 billion by 2030 through avoidance of fossil-fuel consumption and lower energy costs. With health and environmental benefits factored in, the transition to renewables could generate additional net annual savings of USD 1 billion to as much as USD 3.7 billion by 2030.",
    "Based on recent reports by International Renewable Energy Agency (IRENA), the UAE-based Masdar Institute, and the UAE Ministry of Foreign Affairs’ Directorate of Energy and Climate Change. The analysis of the UAE’s renewable energy prospects comes as part of Renewable Energy Road map (REmap 2030) IRENA’s roadmap for doubling the share of renewables in the global energy mix.",
    "Electrical vehicles will be increasingly overwhelming in line with such development plans in Abu Dhabi and the UAE.",
  ],
  lst: [],
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

const facts = [
  {
    title: "44 %",
    text: passedContent("CLEAN ENERGY"),
  },
  {
    title: "38 %",
    text: passedContent("GAS"),
  },
  {
    title: "12 %",
    text: passedContent("CLEAN COAL"),
  },
  {
    title: "6 %",
    text: passedContent("NUCLEAR"),
  },
];

const p =
  "The strategy targets an energy mix that combines renewable, nuclear and clean energy sources to meet the UAE’s economic requirements and environmental goals as follows:";

const generalPage = () => {
  return (
    <EvLayout showNavbar={true}>
      <Landing />

      <Container
        sx={{
          mb: 2,
        }}
      >
        <LandingText section={sections} />
        <TwoColumnBox item={item} />
        <TextField section={data} />
        </Container>
        <Facts data={facts} p={p} />
        <Container sx={{ mb: 6 }}>

        <TextField section={data2} />
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
