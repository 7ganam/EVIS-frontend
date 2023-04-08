import { Box, Container } from "@mui/material";
import WhyExhibit from "src/components/EvSections/why-exhibit-sections/WhyExhibit";
import ExhibitionFeatures from "src/components/EvSections/why-exhibit-sections/ExhibitionFeatures";
import ByExhibit from "src/components/EvSections/why-exhibit-sections/ByExhibit";
import ExpectMeet from "src/components/EvSections/why-exhibit-sections/ExpectMeet";
import Footer from "src/components/EvSections/why-exhibit-sections/Footer";
import CoreSection from "@/components/EvSections/why-exhibit-sections/CoreSection";
import EvLayout from "src/components/layouts/EvLayout";
import QuadImgSection from "src/components/EvSections/QuadImgSection";
import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
import { HighlightOff } from "@mui/icons-material";

import MarketGateway from "@/components/EvSections/about-page-sections/MarketGateway";

import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));

const WhyExhibitComponent = (props) => {
  const headers = props?.headers ?? [];
  let {
    whyExhibitPageData,
    whyExhibitSections,
    expectToMeetCardsText,
    futureOfMobility,
    featureList,
    whyExhibit,
    serviceList,
    peopleList,
  } = useMemo(() => {
    if (!props?.whyExhibitPage) {
      return {};
    }
    let whyExhibitPageData =
      JSON.parse(props.whyExhibitPage).data?.attributes ?? null;

    let whyExhibitSections = whyExhibitPageData?.why_exhibit_sections;
    const whyExhibit = {
      img: whyExhibitSections[0].image.data?.attributes.url,
      title: whyExhibitSections[0].title,
      ps: whyExhibitSections[0].paragraph,
      direction: "right",
    };
    const futureOfMobility = {
      img: whyExhibitSections[1].image.data?.attributes.url,
      title: whyExhibitSections[1].title,
      ps: whyExhibitSections[1].paragraph,
      direction: "left",
    };

    const serviceList = whyExhibitPageData?.by_exhibiting_cards?.map(
      (highlight) => {
        return {
          img: highlight?.image?.data?.attributes?.url,
          content: highlight?.text,
        };
      }
    );

    const featureList = whyExhibitPageData?.exhibition_features_cards?.map(
      (highlight) => {
        return {
          img: highlight?.image?.data?.attributes?.url,
          content: highlight?.paragraph,
          buttonText: highlight?.action_button_text,
          buttonLink: highlight?.action_button_url,
          title: highlight?.title,
        };
      }
    );

    const peopleList = whyExhibitPageData?.expect_to_meet_cards_text?.map(
      (highlight) => {
        return highlight?.text;
      }
    );

    let expectToMeetCardsText = whyExhibitPageData?.expect_to_meet_cards_text;

    // const videosData = whyExhibitPageData?.why_exhibit_sections?.map((paragraph) => {
    //   return {
    //     youtube: video?.youtube_link ?? "",
    //   };
    // });

    return {
      whyExhibitPageData,
      whyExhibitSections,
      expectToMeetCardsText,
      futureOfMobility,
      whyExhibit,
      featureList,
      serviceList,
      peopleList,
    };
  }, [props?.whyExhibitPage]);

  return (
    <EvLayout showNavbar={true}>
      <PageHeader image={headers?.home?.image?.data?.attributes?.url}>
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.EXHIBIT_SPONSOR?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.EXHIBIT_SPONSOR?.text}
            </H1>
          )}
          {headers?.EXHIBIT_SPONSOR?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginBottom: "20px",
              }}
            >
              {headers?.EXHIBIT_SPONSOR?.sub_text}
            </H6>
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
                <Link href={"/download/brochure"}>
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
                      {"Download the Event Brochure"}
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
          mb: 6,
        }}
      >
        <WhyExhibit
          whyExhibit={whyExhibit}
          futureOfMobility={futureOfMobility}
        />
      </Container>
      <CoreSection></CoreSection>
      <Container>
        <ExhibitionFeatures data={featureList} />
        <ByExhibit data={serviceList} />
        <ExpectMeet data={peopleList} />
      </Container>

      <Container>
        <Box sx={{ mt: "100px" }}>
          <SponsorsGrid />
          <PartnersGrid sx={{ mt: 5 }} />
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps() {
  let whyExhibitPage = null;
  let whyExhibitPageError = null;

  try {
    whyExhibitPage = await api.getWhyExhibit();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    whyExhibitPageError = dev_error;
  }

  if (!whyExhibitPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      whyExhibitPage: JSON.stringify(whyExhibitPage),
      whyExhibitPageError: JSON.stringify(whyExhibitPageError),
    },
    revalidate: 10, // In seconds
  };
}

export default WhyExhibitComponent;
