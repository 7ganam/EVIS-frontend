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

// ======================================================
// ======================================================
const pageHeaderData = {
  // text: "Open Tech Sessions",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  // image: "/assets/images/techSessions.jpg",
};

const GeneralPage = (props) => {
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
    const downloadLink = openTechPageData?.download_link;
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
      <PageHeader
        text={agendaTitle}
        buttonText={pageHeaderData.buttonText}
        buttonLink={pageHeaderData.buttonLink}
        image={mainImage}
      ></PageHeader>

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
          <a href={downloadLink} download>
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
