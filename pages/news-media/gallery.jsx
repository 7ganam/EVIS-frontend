import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Box } from "@mui/material";
import {
  SectionTitle,
  SectionTitle2,
} from "src/components/EvComponents/StyledTypography";
import Videos from "src/components/EvSections/new-page-sections/Videos";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BazarImage from "src/components/BazarImage";
import ImageGallery from "react-image-gallery";
import ImagesSection from "./imagesSection";
import Card1 from "@/components/Card1";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

const EvHome = (props) => {
  const theme = useTheme();

  let {
    galleryPageData,
    photosData,
    videosData,

  } = useMemo(() => {
    if (!props?.galleryPage) {
      return {};
    }
    let galleryPageData = JSON.parse(props.galleryPage).data?.attributes ?? null;

    const photosData = galleryPageData?.photos?.data?.map((attributes) => {
      return {
        thumbnail: attributes?.attributes?.url,
        original: attributes?.attributes?.url,
      }
    });

    const videosData = galleryPageData?.video_link.map((attributes) => {
      return {
        youtube: attributes?.youtube_link,
      }
    });

    return {
      galleryPageData,
      photosData,
      videosData,
    };
  }, [props?.galleryPage]);

  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <Box sx={{ mt: "30px" }}>
        <SectionTitle>GALLERY</SectionTitle>
      </Box>

      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "50px",
            textAlign: "center",
          }}
        >
          <Box>
            <SectionTitle2>Photos</SectionTitle2>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "-13px 18px 17px",
            }}
          >
            <Divider
              sx={{
                border: "1px solid #bbc4c7",
                margin: "0",
                width: "47%",
                height: "1px",
              }}
            />
            <Divider
              sx={{
                border: "1px solid #55b4d4",
                margin: "0",
                width: "6%",
                height: "2px",
                backgroundColor: theme.palette.secondary.main,
              }}
            />
            <Divider
              sx={{
                border: "1px solid #bbc4c7",
                margin: "0",
                width: "47%",
                height: "2px",
              }}
            />
          </Box>
        </Box>
        <Card1 sx={{ p: "20px" }}>
          <ImagesSection imagesData={photosData}></ImagesSection>
        </Card1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "50px",
            textAlign: "center",
          }}
        >
          <Box>
            <SectionTitle2>Videos</SectionTitle2>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "-13px 18px 17px",
            }}
          >
            <Divider
              sx={{
                border: "1px solid #bbc4c7",
                margin: "0",
                width: "47%",
                height: "1px",
              }}
            />
            <Divider
              sx={{
                border: "1px solid #55b4d4",
                margin: "0",
                width: "6%",
                height: "2px",
                backgroundColor: theme.palette.secondary.main,
              }}
            />
            <Divider
              sx={{
                border: "1px solid #bbc4c7",
                margin: "0",
                width: "47%",
                height: "2px",
              }}
            />
          </Box>
        </Box>

        <Videos videosList={videosData} />
        {/* <ExhibitionFeatures data={featureList} /> */}
        {/* <Press data={news} /> */}
        {/* <Press2 data={news2} /> */}
        {/* <Footer footer1={footer1} footer2={footer2} /> */}
      </Container>
    </EvLayout>
  );
};


export async function getStaticProps(context) {
  let galleryPage = null;
  let galleryPageError = null;

  try {
    galleryPage = await api.getGallery();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    galleryPageError = dev_error;
  }

  if (!galleryPage) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      galleryPage: JSON.stringify(galleryPage),
      galleryPageError: JSON.stringify(galleryPageError),
    },
    revalidate: 10, // In seconds
  };
}

export default EvHome;
