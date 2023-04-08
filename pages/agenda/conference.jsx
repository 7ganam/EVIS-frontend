import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import LandingText from "src/components/EvSections/agenda-page-sections/LandingText";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import React from "react"; // styled component
import CarouselSection from "@/components/EvSections/agenda-page-sections/CarouselSection";
import { BigButton } from "@/components/EvComponents/Buttons";
import DownloadingIcon from "@mui/icons-material/Downloading";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
import AgendaSection from "@/components/EvSections/agenda-page-sections/AgendaSection";

import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
// ======================================================
// ======================================================
const pageHeaderData = {
  text: "Conference",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/summit.png",
};

const GeneralPage = (props) => {
  const headers = props?.headers ?? [];

  let {
    conferencePageData,
    talks,
    agendaTitle,
    firstBody,
    secondBody,
    // firstAndSecondBody,
    downloadLink,
    mainImage,
    scheduleImages,
  } = useMemo(() => {
    if (!props?.conferencePage) {
      return {};
    }
    let conferencePageData =
      JSON.parse(props.conferencePage).data?.attributes ?? null;
    const agendaTitle = conferencePageData?.header?.text;
    const firstBody = { text: conferencePageData?.first_body };
    const talks = conferencePageData?.talks ?? [];
    const secondBody = { text: conferencePageData?.second_body };
    const downloadLink =
      conferencePageData?.download_link?.data?.[0]?.attributes?.url;
    const mainImage = conferencePageData?.header?.image?.data?.attributes?.url;
    const scheduleImages = conferencePageData?.schedule_images?.data?.map(
      (highlight) => {
        return highlight?.attributes?.url;
      }
    );

    return {
      conferencePageData,
      talks,
      agendaTitle,
      firstBody,
      secondBody,
      // firstAndSecondBody,
      downloadLink,
      mainImage,
      scheduleImages,
    };
  }, [props?.conferencePage]);

  return (
    <EvLayout showNavbar={true}>
      <PageHeader image={headers?.AGENDA?.image?.data?.attributes?.url}>
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.AGENDA?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.AGENDA?.text}
            </H1>
          )}
          {headers?.AGENDA?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "33px" },
                marginBottom: "20px",
              }}
            >
              {headers?.AGENDA?.sub_text}
            </H6>
          )}
        </Box>
      </PageHeader>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mt: "40px" }}>
          <LandingText section={firstBody} />
          <LandingText section={secondBody} />
        </Box>
        <Box sx={{ mt: "40px", mb: "20px" }}>
          <SectionTitle> Agenda </SectionTitle>
        </Box>
        <Box sx={{ width: "100%", margin: "auto" }}>
          <AgendaSection talks={talks}></AgendaSection>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center ",
            mt: "40px",
          }}
        >
          {/* <a href={downloadLink} download> */}
          <Link href="/download/conference-agenda">
            <a>
              <BigButton
                content={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <span>Download Agenda!</span>
                    <DownloadingIcon
                      sx={{ height: "40px", width: "40px", ml: 2 }}
                    ></DownloadingIcon>
                  </Box>
                }
              />
            </a>
          </Link>

          {/* </a> */}
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps() {
  let conferencePage = null;
  let conferencePageError = null;

  try {
    conferencePage = await api.getAgenda();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    conferencePage = dev_error;
  }

  if (!conferencePage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      conferencePage: JSON.stringify(conferencePage),
      conferencePageError: JSON.stringify(conferencePageError),
    },
    revalidate: 10, // In seconds
  };
}
export default GeneralPage;
