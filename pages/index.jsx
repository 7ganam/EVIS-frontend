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
import { H1, H3 } from "src/components/Typography";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import ByExhibit from "src/components/EvSections/why-exhibit-sections/ByExhibit";

import api from "src/utils/api/evis-api";
import { useMemo } from "react";
import Link from "next/link";
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
  const headers = props?.headers ?? [];

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

  let sponsors = useMemo(() => {
    if (!props?.sponsors) {
      return {};
    }

    let data = JSON.parse(props.sponsors)?.data ?? null;

    const sponsors = data?.map((sponsor) => {
      return {
        text: sponsor?.attributes?.title ?? "",
        source: sponsor?.attributes?.image?.data?.attributes?.url ?? "",
        year: sponsor?.attributes?.year ?? "",
        key_partner: sponsor?.attributes?.key_partner ?? null,
        sponsor: sponsor?.attributes?.sponsor ?? null,
        international_media_partner:
          sponsor?.attributes?.international_media_partner ?? null,
        knowledge_partner: sponsor?.attributes?.knowledge_partner ?? null,
        research_partner: sponsor?.attributes?.research_partner ?? null,
        media_partner: sponsor?.attributes?.media_partner ?? null,
        link: sponsor?.attributes?.link ?? null,
      };
    });

    return sponsors;
  }, [props?.sponsors]);

  const key_partners = sponsors?.filter((sponsor) => {
    return sponsor.key_partner === true;
  });
  const knowledgePartners = sponsors?.filter((partner) => {
    return partner.knowledge_partner === true;
  });
  const mediaPartners = sponsors?.filter((partner) => {
    return partner.media_partner === true;
  });

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
      url: "https://registration.infosalons.ae/EVIS23AD/DEL/Registration/Demographics",
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

  const serviceList = [
    {
      content: "Connect with thousands of prospective customers and partners",
      img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672600334/2_1_6288772a72_8e38586ce3.png",
    },
    {
      content:
        "Network with global representatives from across the H/EV supply chain",
      img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672604207/3_dfc79f579b.png",
    },
    {
      content: "Stay informed on the latest trends in the EV industry",
      img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672604244/4_c2f19d4da6.png",
    },
    {
      content:
        "Benchmark your products and services against industry competition",
      img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672604272/5_f24e400cff.png",
    },
    {
      content: "Stay ahead of the curve on evolving customer requirements",
      img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672604295/6_5e35888177.png",
    },
  ];
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <PageHeader image={headers?.home?.image?.data?.attributes?.url}>
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.home?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.home?.text}
            </H1>
          )}
          {headers?.home?.sub_text && (
            <H3
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.home?.sub_text}
            </H3>
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
                    "https://registration.infosalons.ae/EVIS23AD/Visitor/Registration/Demographics"
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
                      {"Register to Visit"}
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
                      {"Exhibit/Sponsor"}
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
        {/* <DownloadSection ButtonsData={buttonsData} /> */}
        <FeaturesSection cardsData={eventFeaturesData}></FeaturesSection>
        {/* <Box sx={{ mt: "60px" }}>
          <CountDownSection></CountDownSection>
        </Box> */}
        <VideosSection videosList={videosData} />
        <SubscribeSection />
        <ByExhibit data={serviceList} />
        <Box sx={{ mt: "100px" }}>
          <PartnersGrid
            sx={{ mt: 5 }}
            partners={key_partners}
            title={"KEY PARTNERS"}
          />
          <PartnersGrid
            sx={{ mt: "80px" }}
            partners={knowledgePartners}
            title={"KNOWLEDGE PARTNERS"}
          />
          <PartnersGrid
            sx={{ mt: "80px", pb: "100px" }}
            partners={mediaPartners}
            title={"MEDIA PARTNERS"}
          />
        </Box>
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

  let sponsors = null;
  let sponsorsError = null;

  try {
    sponsors = await api.getSponsors(23);
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    sponsorsError = dev_error;
  }

  return {
    props: {
      homePage: JSON.stringify(homePage),
      homePageError: JSON.stringify(homePageError),
      sponsors: JSON.stringify(sponsors),
    },
    revalidate: 10, // In seconds
  };
}

export default EvHome;
