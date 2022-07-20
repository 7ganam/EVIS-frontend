import { Button, Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import EvPageFooter from "components/Ev-page-footer/EvPageFooter";
import AllProducts from "pages-sections/grocery3/AllProducts";
import DiscountProducts from "pages-sections/grocery3/DiscountProducts";
import VideoSection from "pages-sections/ev-home/VideoSection";
import CarouselSection2 from "pages-sections/ev-home/CarouselSection2";
import DownloadSection from "pages-sections/ev-home/DownloadSection";
import TopSailedProducts from "pages-sections/grocery3/TopSailedProducts";
import api from "utils/api/grocery3-shop";
// ======================================================
// ======================================================
const EvHome = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;
  const carouselCardList = [
    {
      title: "Powertrain",
      subtitle:
        "Covering latest engine technology industry news for automotive engineers ",
      imgUrl: "/assets/images/ev-home/carousel1.jpeg",
      shopUrl: "/",
    },
    {
      title: "New Energy Vehicles",
      subtitle:
        "Recent announcements by vehicle manufacturers intending to electrify the car and buses markets",
      imgUrl: "/assets/images/ev-home/carousel2.jpeg",
      shopUrl: "/",
    },
    {
      title: "Energy and Infrastructure",
      subtitle:
        "Utilities, charging point operators, charging hardware manufacturers and other power sector shareholders are also boosting investments in charging infrastructures. ",
      imgUrl: "/assets/images/ev-home/carousel3.jpeg",
      shopUrl: "/",
    },
    {
      title: "Batteries",
      subtitle:
        "Battery manufacturing is undergoing important transitions, including major investments to expand production.",
      imgUrl: "/assets/images/ev-home/carousel4.png",
      shopUrl: "/",
    },
  ];
  return (
    <EvLayout showNavbar={true}>
      <VideoSection />

      <Container
        sx={{
          mb: 6,
        }}
      >
        <CarouselSection2 cardList={carouselCardList} />
        <DownloadSection />
        <DiscountProducts offerProducts={offerProducts} />
        <TopSailedProducts productsData={topSailedProducts} />
        <AllProducts productsData={allProducts} />
      </Container>

      <EvPageFooter />

      <MobileNavigationBar />
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
export default EvHome;
