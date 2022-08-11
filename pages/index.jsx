import { Container, Grid, Box } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";

import VideoSection from "pages-sections/ev-home/VideoSection";
import CarouselSection2 from "pages-sections/ev-home/CarouselSection2";
import AboutSection from "pages-sections/ev-home/AboutSection";
import WhatToExpectSection from "pages-sections/ev-home/WhatToExpectSection";
import SubscribeSection from "pages-sections/ev-home/SubscribeSection";
import EventSection from "pages-sections/ev-home/EventSection";
import VideosSection from "pages-sections/ev-home/VideosSection";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import TwoColumnBoxV3 from "components/EvComponents/TwoColumnBoxV3";
// import WhatToExpectSection from "components/EvSections/HomeSections/WhatToExpectSection";
import DownloadSection from "components/EvSections/HomeSections/DownloadSection";
import NewEventFeatureSection from "components/EvSections/HomeSections/NewEventFeatureSection";
import YoutubeEmbed from "components/YoutubeEmbed";



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
      buttonText: "CONFERENCE OVERVIEW",
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

  const item = {
    img: "/assets/images/ev-home/carousel3-2.jpeg",
    title: "Electric Vehicle Innovation Summit",
    ps: [
      "As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade. Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.",
      "EVIS is unique by integrating inter - related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.",
      "The Electric Vehicles are continually evolving for a future of mobility and more efficient modes of transportation, bringing together key players and influential business leaders who works together on electric vehicles, energy and charging infrastructure, information technology to explore more advanced systems.",
      "Bringing together all the stakeholders, experts, thought leaders, influencers, manufacturers, and regulation experts has generated a great opportunity to get an exposure on the latest trends and innovations in the EV and transport industries.",
    ],
    direction: "right"
  }

  const buttonsData = [
    {
      text: "Download Sales Brochure"
    },
    {
      text: "Download Post Show Report"
    },
    {
      text: "Book Your Stand NO"
    },
    {
      text: "Register your interest to visit"
    },
    {
      text: "Delegate Registration"
    },
  ]

  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <Box marginBottom="40px">
        <TwoColumnBox item={item} />
      </Box>

      {/* <WhatToExpectSection /> */}
      <WhatToExpectSection serviceList={serviceList} />
      <Box sx={{ margin: "20px 0" }}>
        <Container>
          <DownloadSection ButtonsData={buttonsData} />
        </Container>
      </Box>

      <VideoSection />

      <Container
        sx={{
          mb: 6,
        }}
      >

        <CarouselSection2 cardList={carouselCardList} />

        {/* <EventSection featureList={featureList} /> */}
        <NewEventFeatureSection Data={featureList} />

        <Box
          hoverEffect
          data-aos="fade-up"
          data-aos-duration={1700}
          sx={{ borderRadius: "10px", overflow: "hidden" }}
        >
          {/* <YoutubeEmbed embedId={aboutSectionData.youtube} /> */}
        </Box>

        {/* <AboutSection
          text={aboutSectionData.text}
          youtube={aboutSectionData.youtube}
        /> */}
      </Container>


      <Container
        sx={{
          mb: 6,
        }}
      >
        <VideosSection videosList={videosList} />
        <Box margin="30px 0 0">
          <SubscribeSection />
        </Box>
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
