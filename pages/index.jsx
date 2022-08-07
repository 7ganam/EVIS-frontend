import { Container, Stack } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";

import VideoSection from "pages-sections/ev-home/VideoSection";
import CarouselSection2 from "pages-sections/ev-home/CarouselSection2";
import AboutSection from "pages-sections/ev-home/AboutSection";
import WhatToExpectSection from "pages-sections/ev-home/WhatToExpectSection";
import SubscribeSection from "pages-sections/ev-home/SubscribeSection";
import EventSection from "pages-sections/ev-home/EventSection";
import VideosSection from "pages-sections/ev-home/VideosSection";
import PageHeader from "components/EvComponents/PageHeader";
import TwoColumnBoxV2 from "components/EvComponents/TwoColumnBoxV2";
import FactsSection from "components/EvSections/home-page-sections/FactsSection";
import FeaturesSection from "components/EvSections/home-page-sections/FeaturesSection";
import CountDownSection from "components/EvSections/home-page-sections/CountDownSection";

import api from "utils/api/grocery3-shop";

// ======================================================
// ======================================================

const pageHeaderData = {
  text: "MENA Region largest electric vehicle tech conference",
  buttonText: "Save The Date",
  buttonLink: "/",
  image: "/assets/images/ev-home/carousel2.jpeg",
};
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
    text: `As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade. Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.
    EVIS is unique by integrating inter-related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.
    The Electric Vehicles are continually evolving for a future of mobility and more efficient modes of transportation, bringing together key players and influential business leaders who works together on electric vehicles, energy and charging infrastructure, information technology to explore more advanced systems. 
    Bringing together all the stakeholders, experts, thought leaders, influencers, manufacturers, and regulation experts has generated a great opportunity to get an exposure on the latest trends and innovations in the EV and transport industries.
.`,
    youtube: "x2CDpB6mrp4",
  };
  const serviceList = [
    {
      image: "/assets/images/ev-home/why-attendees-d.png",
    },
    {
      image: "/assets/images/ev-home/why-sqm-d.png",
    },
    {
      image: "/assets/images/ev-home/why-exhibitions-d.png",
    },
    {
      image: "/assets/images/ev-home/why-delegates-d.png",
    },
    {
      image: "/assets/images/ev-home/why-conference-d.png",
    },
    {
      image: "/assets/images/ev-home/why-speakers-d.png",
    },
  ];
  const featureList = [
    {
      title: "Exhibition Area",
      text: "With over 6,000 square meters of display space, Electric Vehicle Innovation Summit brings in the biggest and best brands from all over the world to present their latest products and innovations in the industry.",
      image: "/assets/images/ev-home/exh2-gradient.png",
      buttonText: "EXHIBIT AT EVIS",
      buttonLink: "/",
    },
    {
      title: "networking opportunities",
      text: "The Electric Vehicle Innovation Summit fosters individual engagement and community interaction through networking opportunities and customized experiences including new technology, sharing economy activities, personalized meet ups and attendee personalized networking. ",
      image: "/assets/images/ev-home/exh4-gradient.png",
      buttonText: "ATTEND EVIS",
      buttonLink: "/",
    },
    {
      title: "high standards",
      text: "The Electric Vehicle Innovation Summit is to be held in accordance with the highest standards governing such professional specialized conferences addressing advanced subject of interest to the specialized experts yet appealing to the public at large. ",
      image: "/assets/images/ev-home/speaker-gradient.png",
      buttonText: "ATTEND EVIS",
      buttonLink: "/",
    },
  ];
  const videosList = [
    { youtube: "tKfOCjdwaJ0" },
    { youtube: "Jw_MFPnYn7s" },
    { youtube: "CAKf5hgSZyU" },
    { youtube: "tKfOCjdwaJ0" },
    { youtube: "Jw_MFPnYn7s" },
    { youtube: "CAKf5hgSZyU" },
    { youtube: "tKfOCjdwaJ0" },
    { youtube: "Jw_MFPnYn7s" },
    { youtube: "CAKf5hgSZyU" },
  ];
  const itemData = {
    img: "https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1108/wavebreakmediamicro110836132/10110536-young-businessman-talking-in-a-presentation.jpg",
    title: "Enjoy preferred rates by booking through us!",
    ps: [
      "Book your accommodation, flights, tours, visa and transportation at preferred rates via our associations with the region’s most trusted travel management company. ",
      "Fill out the form based on your requirements to directly get in touch with dedicated staff from Nirvana Travel & Tourism and enjoy preferred rates. We made it all easy - just for you!",
    ],
  };
  const factsData = [
    {
      title: "50%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
    },
    {
      title: "6%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
    },
    {
      title: "10%",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi, euismod consectetur nisi nisi vitae nisi.",
    },
  ];
  const FeaturesData = [
    {
      img: "/assets/images/home-page/aa.jpg",
      content: `With over 6,000 square meters of display space, Electric Vehicle Innovation Summit brings in the biggest and best brands from all over the world to present their latest products and innovations in the industry.`,
      buttonText: "EXHIBIT AT EVIS",
      buttonLink: "/",
      title: "Exhibition Area",
    },
    {
      img: "/assets/images/home-page/bb.jpg",
      content: `The Electric Vehicle Innovation Summit fosters individual engagement and community interaction through networking opportunities and customized experiences including new technology, sharing economy activities, personalized meet ups and attendee personalized networking.`,
      buttonText: "ATTEND EVIS",
      buttonLink: "/",
      title: "networking opportunities",
    },
    {
      img: "/assets/images/home-page/cc.jpg",
      content: `The Electric Vehicle Innovation Summit is to be held in accordance with the highest standards governing such professional specialized conferences addressing advanced subject of interest to the specialized experts yet appealing to the public at large.`,
      buttonText: "ATTEND EVIS",
      buttonLink: "/",
      title: "high standards",
    },
  ];
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <PageHeader
        text={pageHeaderData.text}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={pageHeaderData.image}
      ></PageHeader>
      <Container
        sx={{
          my: 6,
        }}
      >
        <Stack direction={"column"} spacing={6}>
          <TwoColumnBoxV2 item={itemData} imgPosition="left"></TwoColumnBoxV2>
          <TwoColumnBoxV2 item={itemData} imgPosition="right"></TwoColumnBoxV2>
        </Stack>
      </Container>
      <FactsSection data={factsData}> </FactsSection>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <FeaturesSection cardsData={FeaturesData}></FeaturesSection>
        <CountDownSection></CountDownSection>

        <VideosSection videosList={videosList} />
        <SubscribeSection />
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
export default EvHome;
