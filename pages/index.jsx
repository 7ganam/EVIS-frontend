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

const EvHome = (props) => {
  let {
    homePageData,
    pageHeaderData,
    topSectionsData,
    highlightsData,
    buttonsData,
    eventFeaturesData,
    videosData,
  } = useMemo(() => {
    if (!props?.homePage) {
      return {};
    }
    let homePageData = JSON.parse(props.homePage).data?.attributes ?? null;

    const pageHeaderData = {
      text: homePageData?.header?.text ?? "",
      buttonText: "Become A Sponsor",
      buttonLink: "/participate/sponsor",
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

    const buttonsData = [
      {
        text: "BOOK YOUR STAND",
        url: "/participate/exhibitor",
        type: "internalLink",
      },
      {
        text: "BECOME A SPONSOR",
        url: "/participate/sponsor",
        type: "internalLink",
      },
      {
        text: "DELEGATE REGISTRATION",
        url: "/participate/delegate",
        type: "internalLink",
      },
      {
        text: "VISITOR REGISTRATION",
        url: "/participate/visitor",
        type: "internalLink",
      },
      {
        text: "DOWNLOAD EVENT BROCHURE",
        url: homePageData?.event_brochure?.data?.attributes?.url,
        type: "download",
      },
      {
        text: "DOWNLOAD POST SHOW REPORT",
        url: homePageData?.post_show_report?.data?.attributes?.url,
        type: "download",
      },
    ];

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
      buttonsData,
      eventFeaturesData,
      videosData,
    };
  }, [props?.homePage]);
  console.log("homePageData", homePageData);
  console.log("videosData", videosData);

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
                <Link href={"/participate/exhibitor"}>
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
