import { Box, Container, Stack, styled, Button } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import WhatToExpectSection from "src/components/EvSections/home-page-sections/WhatToExpectSection";
import SubscribeSection from "src/pages-sections/ev-home/SubscribeSection";
import EventSection from "src/pages-sections/ev-home/EventSection";
import VideosSection from "src/pages-sections/ev-home/VideosSection";
import PageHeader from "src/components/EvComponents/PageHeader";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import FactsSection from "src/components/EvSections/home-page-sections/FactsSection";
import FeaturesSection from "src/components/EvSections/home-page-sections/FeaturesSection";
import CountDownSection from "src/components/EvSections/home-page-sections/CountDownSection";
import DownloadSection from "src/components/EvSections/home-page-sections/DownloadSection";
import { H1 } from "src/components/Typography";

import api from "src/utils/api/grocery3-shop";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
import Link from "next/link";
// ======================================================
// ======================================================

const pageHeaderData = {
  text: "The MENA’s First Electric Vehicles Exhibition and Conference",
  buttonText: "Become A Sponsor",
  buttonLink: "/",
  image: "/assets/images/ev-home/carousel2.jpeg",
};
const EvHome = (props) => {
  const serviceList = [
    {
      image: "/assets/images/ev-home/0.jpeg",
    },
    {
      image: "/assets/images/ev-home/1.jpeg",
    },
    {
      image: "/assets/images/ev-home/2.jpeg",
    },
    {
      image: "/assets/images/ev-home/3.jpeg",
    },
    {
      image: "/assets/images/ev-home/4.jpeg",
    },
    {
      image: "/assets/images/ev-home/5.jpeg",
    },
    {
      image: "/assets/images/ev-home/6.jpeg",
    },
    {
      image: "/assets/images/ev-home/7.jpeg",
    },
    {
      image: "/assets/images/ev-home/8.jpeg",
    },
  ];

  const videosList = [
    {
      youtube:
        "https://www.youtube.com/watch?v=pH-S5T4v000&feature=emb_logo&ab_channel=EVIS",
    },
    {
      youtube:
        "https://www.youtube.com/watch?v=9QsM34soYg0&list=PLZmjl1dQxsOWycsdwOKYlbBebzpfxhUDo&index=3&ab_channel=EVIS",
    },
    {
      youtube:
        "https://www.youtube.com/watch?v=hFxiyLbi2Sg&list=PLZmjl1dQxsOWycsdwOKYlbBebzpfxhUDo&index=4&ab_channel=EVIS",
    },
    {
      youtube:
        "https://www.youtube.com/watch?v=BzT8e_IFVPs&list=PLZmjl1dQxsOWycsdwOKYlbBebzpfxhUDo&index=5&ab_channel=EVIS",
    },
    {
      youtube:
        "https://www.youtube.com/watch?v=VSiDveJb23w&list=PLZmjl1dQxsOWycsdwOKYlbBebzpfxhUDo&index=6&ab_channel=EVIS",
    },
    { youtube: "https://www.youtube.com/watch?v=x2CDpB6mrp4&ab_channel=EVIS" },
  ];
  const itemData1 = {
    img: "/assets/images/ev-home/DSC07429.jpg",
    title: "Electric Vehicle Innovation Summit",
    ps: [
      "As is true for many emerging technologies, vehicle electrification is experiencing rapid innovation. The Middle East & Africa Electric Vehicle Market is expected to witness substantial growth & business opportunities over the next decade. Governments are focusing on renewable energy and clean transportation technologies along with the implementation of economic and energy diversification plans.",
      "EVIS is unique by integrating inter - related technologies at one event, allowing attendees to network across the value chains and exploit new opportunities at the intersection of EV technologies.",
    ],
  };
  const itemData2 = {
    img: "/assets/images/ev-home/exh4.jpg",
    title: "",
    ps: [
      "The Electric Vehicles are continually evolving for a future of mobility and more efficient modes of transportation, bringing together key players and influential business leaders who works together on electric vehicles, energy and charging infrastructure, information technology to explore more advanced systems.",
      "The Electric Vehicles are continually evolving for a future of mobility and more efficient modes of transportation, bringing together key players and influential business leaders who works together on electric vehicles, energy and charging infrastructure, information technology to explore more advanced systems.",
    ],
  };
  const FeaturesData = [
    {
      img: "/assets/images/ev-home/exh2.jpg",
      content: `With over 6,000 square meters of display space, Electric Vehicle Innovation Summit brings in the biggest and best brands from all over the world to present their latest products and innovations in the industry.`,
      buttonText: "EXHIBIT AT EVIS",
      buttonLink: "/",
      title: "Exhibition Area",
    },
    {
      img: "/assets/images/ev-home/exh4-gradient.png",
      content: `The Electric Vehicle Innovation Summit fosters individual engagement and community interaction through networking opportunities and customized experiences including new technology, sharing economy activities, personalized meet ups and attendee personalized networking.`,
      buttonText: "ATTEND EVIS",
      buttonLink: "/",
      title: "Networking Opportunities",
    },
    {
      img: "/assets/images/ev-home/DSC01808.jpg",
      content: `The Electric Vehicle Innovation Summit is to be held in accordance with the highest standards governing such professional specialized conferences addressing advanced subject of interest to the specialized experts yet appealing to the public at large.`,
      buttonText: "ATTEND EVIS",
      buttonLink: "/",
      title: "High Standards",
    },
  ];
  const buttonsData = [
    {
      text: "BOOK YOUR STAND",
    },
    {
      text: "BECOME A SPONSOR",
    },
    {
      text: "DELEGATE REGISTRATION",
    },
    {
      text: "VISITOR REGISTRATION",
    },
    {
      text: "DOWNLOAD EVENT BROCHURE",
    },
    {
      text: "DOWNLOAD POST SHOW REPORT",
    },
  ];
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <PageHeader
        text={pageHeaderData.text}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={pageHeaderData.image}
      >
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {pageHeaderData.text && (
            <H1 sx={{ fontSize: { xs: "40px", md: "55px" } }}>
              {pageHeaderData.text}
            </H1>
          )}
          {pageHeaderData.buttonText && pageHeaderData.buttonLink && (
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box mx={"0px"} p={1.25}>
                <Link href={pageHeaderData.buttonLink}>
                  <a>
                    <StyledButton
                      minWidth={"250px"}
                      variant="contained"
                      color="primary"
                      sx={{
                        width: "250px",
                        px: "30px",
                        py: "15px",
                        fontWeight: "700",
                        border: "1px white solid",
                      }}
                    >
                      {pageHeaderData.buttonText}
                    </StyledButton>
                  </a>
                </Link>
              </Box>
              <Box mx={"0px"} p={1.25}>
                <Link href={pageHeaderData.buttonLink}>
                  <a>
                    <StyledButton
                      variant="contained"
                      color="primary"
                      sx={{
                        width: "250px",
                        px: "30px",
                        py: "15px",
                        fontWeight: "700",
                        border: "1px white solid",
                      }}
                    >
                      {"Book your stand now"}
                    </StyledButton>
                  </a>
                </Link>
              </Box>
            </Box>
          )}
        </Box>
      </PageHeader>
      <Container
        sx={{
          my: 6,
        }}
      >
        <Stack direction={"column"} spacing={6}>
          <TwoColumnBoxV2 item={itemData1} imgPosition="left"></TwoColumnBoxV2>
          <TwoColumnBoxV2 item={itemData2} imgPosition="right"></TwoColumnBoxV2>
        </Stack>
      </Container>
      {/* <FactsSection data={factsData}> </FactsSection> */}
      <WhatToExpectSection serviceList={serviceList}></WhatToExpectSection>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <DownloadSection ButtonsData={buttonsData} />
        <FeaturesSection cardsData={FeaturesData}></FeaturesSection>
        {/* <Box sx={{ mt: "60px" }}>
          <CountDownSection></CountDownSection>
        </Box> */}
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
