import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Section1 from "../../src/pages-sections/why-abu-dhabi/Section1";
import Section2 from "../../src/pages-sections/why-abu-dhabi/Section2";
import Goal from "../../src/pages-sections/why-abu-dhabi/Goal";
import SponsorsGrid from "../../src/pages-sections/why-abu-dhabi/SponsorsGrid";
import PartnersGrid from "../../src/pages-sections/why-abu-dhabi/PartnersGrid";
// ======================================================
// ======================================================
const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Section1 />
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Section2 />
        <Goal imageSrc={"/assets/images/why-abu-dhabi/sustainability.jpg"} headline={"Sustainability"} paragraph={`Abu Dhabi Urban Planning Council (UPC). Abu Dhabi’s Plan 2030 establishes a clear vision for sustainability as the foundation of any new development occurring in the Emirate of Abu Dhabi. The purpose of Estidama is to create a new sustainability framework that will direct the current course of development while allowing adaptation as new understanding evolves. Its ultimate goal is to create an ever-improving quality of life for the residents of the Emirate on four equal pillars of sustainability: environmental, economic, social, and cultural.`} />

        <Goal imageSrc={"/assets/images/why-abu-dhabi/economy-environment2.jpg"} headline={"UAE Economic & Environmental Goals"} reversed={true} paragraph={`Home to one of the most advanced energy sectors in the region, Abu Dhabi has seen robust growth in electricity consumption with an annual growth rate of 5% over the past five years. Renewable energy, nuclear and waste-to-energy have allowed for lucrative business opportunities to arise.
        
        In 2017, the UAE launched ‘Energy Strategy 2050’, which is considered the first unified energy strategy in the country that is based on supply and demand. The strategy aims to increase the contribution of clean energy in the total energy mix from 25% to 50% by 2050 and reduce carbon footprint of power generation by 70 percent, thus saving AED 700 billion by 2050. It also seeks to increase consumption efficiency of individuals and corporates by 40%.

        The new energy strategy is being implemented in three phases. The first phase aims to accelerate efficient consumption of energy as well as diversifying and securing it. The second phase is to find new solutions that integrate with energy and transportation solutions. The third phase focuses on research and development in addition to innovation and creativity to supply sustainable energy.
        The strategy targets an energy mix that combines renewable, nuclear and clean energy sources to meet the UAE’s economic requirements and environmental goals as follows:
        44 % clean energy
        38 % gas
        12 % clean coal
        6 % nuclear.`} />

        <Goal imageSrc={"/assets/images/why-abu-dhabi/investment.jpg"} headline={"Global Investments"} paragraph={`The UAE government aims to invest AED 600 billion by 2050 to meet the growing energy demand and ensure a sustainable growth for the country’s economy.
        
        Ramping up renewables to 10% of the country’s total energy mix, and 25% of total power generation, could generate annual savings of USD 1.9 billion by 2030 through avoidance of fossil-fuel consumption and lower energy costs. With health and environmental benefits factored in, the transition to renewables could generate additional net annual savings of USD 1 billion to as much as USD 3.7 billion by 2030.
        
        Based on recent reports by International Renewable Energy Agency (IRENA), the UAE-based Masdar Institute, and the UAE Ministry of Foreign Affairs’ Directorate of Energy and Climate Change. The analysis of the UAE’s renewable energy prospects comes as part of Renewable Energy Road map (REmap 2030) IRENA’s roadmap for doubling the share of renewables in the global energy mix.
        
        Electrical vehicles will be increasingly overwhelming in line with such development plans in Abu Dhabi and the UAE.`} />
      </Container>
      <SponsorsGrid />
      <PartnersGrid />
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
