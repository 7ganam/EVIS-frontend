import { Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import MobileNavigationBar from "components/mobile-navigation/MobileNavigationBar";
import EvPageFooter from "components/Ev-page-footer/EvPageFooter";
import AllProducts from "pages-sections/grocery3/AllProducts";
import DiscountProducts from "pages-sections/grocery3/DiscountProducts";
import VideoSection from "pages-sections/ev-home/VideoSection";
import CarouselSection2 from "pages-sections/ev-home/CarouselSection2";
import DownloadSection from "pages-sections/ev-home/DownloadSection";
import TopSailedProducts from "pages-sections/grocery3/TopSailedProducts";
import AboutSection from "pages-sections/ev-home/AboutSection";
import WhatToExpectSection from "pages-sections/ev-home/WhatToExpectSection";

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
  const aboutSectionData = {
    text: `As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade.

    Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.

    EVIS is unique by integrating inter-related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.`,
    youtube: "x2CDpB6mrp4",
  };
  const serviceList = [
    {
      icon: "Truck",
      title: "5,000+ Attendees",
      subtitle: "Start from $10",
      image: "/assets/images/ev-home/why-attendees-d.png",
    },
    {
      icon: "MoneyGuarantee",
      title: "10,000+ Gross SQM",
      subtitle: "7 Days Back",
      image: "/assets/images/ev-home/why-sqm-d.png",
    },
    {
      icon: "AlarmClock",
      title: "200+ Exhibitors",
      subtitle: "For free return",
      image: "/assets/images/ev-home/why-exhibitions-d.png",
    },
    {
      icon: "Payment",
      title: "1,000 Delegates",
      subtitle: "Secure system",
      image: "/assets/images/ev-home/why-delegates-d.png",
    },
    {
      icon: "OnlineSupport",
      title: "30+ Conference Sessions",
      subtitle: "24/7 daily",
      image: "/assets/images/ev-home/why-conference-d.png",
    },
    {
      icon: "OnlineSupport",
      title: "50+ Speakers",
      subtitle: "24/7 daily",
      image: "/assets/images/ev-home/why-speakers-d.png",
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
        <AboutSection
          text={aboutSectionData.text}
          youtube={aboutSectionData.youtube}
        />
      </Container>

      <WhatToExpectSection serviceList={serviceList} />

      <Container
        sx={{
          mb: 6,
        }}
      >
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
