import { Container, Box } from "@mui/material";
import WhyExhibitSection from "pages-sections/why-exhibit-sections/WhyExhibitSection";
import FeatureSection from "pages-sections/why-exhibit-sections/FeatureSection";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================

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
