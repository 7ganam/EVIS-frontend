import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import LandingText from "src/components/EvSections/agenda-page-sections/LandingText";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import PageHeader from "src/components/EvComponents/PageHeader";
import React from "react"; // styled component
import CarouselSection from "@/components/EvSections/agenda-page-sections/CarouselSection";
import { BigButton } from "@/components/EvComponents/Buttons";
import DownloadingIcon from "@mui/icons-material/Downloading";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
import AgendaSection from "@/components/EvSections/agenda-page-sections/AgendaSection";
import Link from "next/link";

import { H1, H6 } from "src/components/Typography";
import { styled, Button } from "@mui/material";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
// ======================================================
// ======================================================
const pageHeaderData = {
  // text: "Open Tech Sessions",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  // image: "/assets/images/techSessions.jpg",
};

const GeneralPage = (props) => {
  const headers = props?.headers ?? [];

  let {
    openTechPageData,
    talks,
    agendaTitle,
    firstBody,
    secondBody,
    downloadLink,
    mainImage,
    scheduleImages,
  } = useMemo(() => {
    if (!props?.openTechPage) {
      return {};
    }
    let openTechPageData =
      JSON.parse(props.openTechPage).data?.attributes ?? null;
    const agendaTitle = openTechPageData?.header?.text;
    const firstBody = { text: openTechPageData?.first_body };
    const talks = openTechPageData?.talks ?? [];
    const secondBody = { text: openTechPageData?.second_body };
    const downloadLink =
      openTechPageData?.download_link?.data?.[0]?.attributes?.url;
    const mainImage = openTechPageData?.header?.image?.data?.attributes?.url;
    const scheduleImages = openTechPageData?.schedule_images?.data?.map(
      (highlight) => {
        return highlight?.attributes?.url;
      }
    );

    console.log("openTechPageData :>> ", openTechPageData);
    return {
      openTechPageData,
      talks,
      agendaTitle,
      firstBody,
      secondBody,
      downloadLink,
      mainImage,
      scheduleImages,
    };
  }, [props?.openTechPage]);

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
          <LandingText id={"summit"} section={firstBody} />
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
            my: "40px",
          }}
        >
          {/* <a href={downloadLink} download> */}
          <Link href="/download/opentech-agenda">
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
  let openTechPage = null;
  let openTechPageError = null;

  try {
    openTechPage = await api.getOpenTech();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    openTechPage = dev_error;
  }

  if (!openTechPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      openTechPage: JSON.stringify(openTechPage),
      openTechPageError: JSON.stringify(openTechPageError),
    },
    revalidate: 10, // In seconds
  };
}
export default GeneralPage;
