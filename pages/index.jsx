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
import Link from "next/link";

import api from "src/utils/api/evis-api";
import { useMemo } from "react";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
// ======================================================
// ======================================================

const pageHeaderData = {
  text: "The MENA’s First Electric Vehicles Exhibition and Conference",
  buttonText: "Become A Sponsor",
  buttonLink:
    " https://registration.infosalons.ae/EVIS23AD/SPON/Registration/Demographics",
  image: "/assets/images/ev-home/carousel2.jpeg",
};
const EvHome = (props) => {
  let {
    homePageData,
    pageHeaderData,
    topSectionsData,
    highlightsData,
    eventFeaturesData,
    videosData,
  } = useMemo(() => {
    if (!props?.homePage) {
      return {};
    }
    let homePageData = JSON.parse(props.homePage).data?.attributes ?? null;

    const pageHeaderData = {
      text: homePageData?.header?.text ?? "",
      image: homePageData?.header?.image?.data?.attributes?.url ?? "",
    };

    const topSectionsData = homePageData?.section1?.map((section) => {
      return {
        img: section?.image?.data?.attributes?.url ?? "",
        title: section?.title ?? "",
        ps: section?.paragraph ?? "",
      };
    });

    const highlightsData = homePageData?.highlights?.data?.map((highlight) => {
      return { image: highlight?.attributes?.url };
    });

    const eventFeaturesData = homePageData?.event_features?.map((feature) => {
      return {
        img: feature?.image?.data?.attributes?.url ?? "",
        title: feature?.title ?? "",
        content: feature?.paragraph ?? "",

        buttonText: feature?.action_button_text ?? "",
        buttonLink:
          feature?.action_button_url.replace(
            `https://www.evinnovationsummit.com`,
            ""
          ) ?? "", // if url is internal to the app. make sure navigations uses relative path by removing the url
      };
    });

    const videosData = homePageData?.videos?.map((video) => {
      return {
        youtube: video?.youtube_link ?? "",
      };
    });

    return {
      homePageData,
      pageHeaderData,
      topSectionsData,
      highlightsData,
      eventFeaturesData,
      videosData,
    };
  }, [props?.homePage]);

  const buttonsData = [
    {
      text: "BOOK YOUR STAND",
      url: " https://registration.infosalons.ae/EVIS23AD/EXH/Registration/Demographics",
      type: "internalLink",
    },
    {
      text: "BECOME A SPONSOR",
      url: " https://registration.infosalons.ae/EVIS23AD/SPON/Registration/Demographics",
      type: "internalLink",
    },
    {
      text: "DELEGATE REGISTRATION",
      url: "https://cloudme02.infosalons.biz/reg/EVIS23AD/Delegate/",
      type: "internalLink",
    },
    {
      text: "VISITOR REGISTRATION",
      url: "https://registration.infosalons.ae/EVIS23AD/Visitor/Registration/Demographics",
      type: "internalLink",
    },
    {
      text: "DOWNLOAD EVENT BROCHURE",
      // url: "/assets/images/EVIS Event Brochure 2023 10_11_22.pdf",
      url: "/download/brochure",
      type: "internalLink",
    },
    {
      text: "DOWNLOAD POST SHOW REPORT",
      url: "/download/post-report",
      type: "internalLink",
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
          {
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box mx={"0px"} p={1.25}>
                <Link
                  href={
                    "https://registration.infosalons.ae/EVIS23AD/SPON/Registration/Welcome"
                  }
                >
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
                      {"BECOME A SPONSOR"}
                    </StyledButton>
                  </a>
                </Link>
              </Box>
              <Box mx={"0px"} p={1.25}>
                <Link
                  href={
                    "https://registration.infosalons.ae/EVIS23AD/EXH/Registration/Demographics"
                  }
                >
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
          }
        </Box>
      </PageHeader>
      <Container
        sx={{
          my: 6,
        }}
      >
        <Stack direction={"column"} spacing={6}>
          {topSectionsData &&
            topSectionsData.map((section, index) => {
              return (
                <TwoColumnBoxV2
                  key={index}
                  item={section}
                  imgPosition={index % 2 === 0 ? "left" : "right"}
                ></TwoColumnBoxV2>
              );
            })}
        </Stack>
      </Container>
      {/* <FactsSection data={factsData}> </FactsSection> */}
      <WhatToExpectSection serviceList={highlightsData}></WhatToExpectSection>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <DownloadSection ButtonsData={buttonsData} />
        <FeaturesSection cardsData={eventFeaturesData}></FeaturesSection>
        {/* <Box sx={{ mt: "60px" }}>
          <CountDownSection></CountDownSection>
        </Box> */}
        <VideosSection videosList={videosData} />
        <SubscribeSection />
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let homePage = null;
  let homePageError = null;

  try {
    homePage = await api.getHomePage();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    homePageError = dev_error;
  }

  if (!homePage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      homePage: JSON.stringify(homePage),
      homePageError: JSON.stringify(homePageError),
    },
    revalidate: 10, // In seconds
  };
}

export default EvHome;
