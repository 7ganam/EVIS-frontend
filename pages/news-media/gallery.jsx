import React, { useMemo } from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Box } from "@mui/material";
import api from "src/utils/api/evis-api";
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
import ImagesSection from "@/components/EvSections/imagesSection";
import Card1 from "@/components/Card1";

const images2 = [
  {
    thumbnail: `/assets/images/gallery/1.jpg`,
    original: `/assets/images/gallery/1.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/2.jpg`,
    original: `/assets/images/gallery/2.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/3.jpg`,
    original: `/assets/images/gallery/3.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/4.jpg`,
    original: `/assets/images/gallery/4.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/5.jpg`,
    original: `/assets/images/gallery/5.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/6.jpg`,
    original: `/assets/images/gallery/6.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/7.png`,
    original: `/assets/images/gallery/7.png`,
  },
  {
    thumbnail: `/assets/images/gallery/8.png`,
    original: `/assets/images/gallery/8.png`,
  },
  //   {
  //     thumbnail: `/assets/images/gallery/9.png`,
  //     original: `/assets/images/gallery/9.png`,
  //   },
  //   {
  //     thumbnail: `/assets/images/gallery/10.png`,
  //     original: `/assets/images/gallery/10.png`,
  //   },
  //   {
  //     thumbnail: `/assets/images/gallery/12.png`,
  //     original: `/assets/images/gallery/12.png`,
  //   },
  //   {
  //     thumbnail: `/assets/images/gallery/13.png`,
  //     original: `/assets/images/gallery/13.png`,
  //   },
  //   {
  //     thumbnail: `/assets/images/gallery/14.png`,
  //     original: `/assets/images/gallery/14.png`,
  //   },
  //   {
  //     thumbnail: `/assets/images/gallery/15.png`,
  //     original: `/assets/images/gallery/15.png`,
  //   },
  {
    thumbnail: `/assets/images/gallery/19.jpg`,
    original: `/assets/images/gallery/19.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/17.jpg`,
    original: `/assets/images/gallery/17.jpg`,
  },
  {
    thumbnail: `/assets/images/gallery/18.jpg`,
    original: `/assets/images/gallery/18.jpg`,
  },
];

const videosList2 = [
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

const EvHome = (props) => {
  let { videosList, images } = useMemo(() => {
    if (!props?.galleryPage) {
      return {};
    }

    let data = JSON.parse(props.galleryPage).data?.attributes ?? null;
    let videosList = data?.video_link.map((item) => {
      return { youtube: item.youtube_link };
    });
    let images = data?.photos.data.map((item) => {
      return { thumbnail: item.attributes.url, original: item.attributes.url };
    });
    console.log("data", data);
    let images2;
    return {
      videosList,
      images,
    };
  }, [props]);

  console.log("videosList ", videosList);
  const theme = useTheme();

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
          <ImagesSection images={images}></ImagesSection>
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

        <Videos videosList={videosList} />
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
    galleryPage = await api.getGalleryPage();
    console.log("galleryPage :>> ", galleryPage);
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
