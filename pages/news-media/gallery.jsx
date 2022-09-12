import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Box } from "@mui/material";
import api from "src/utils/api/grocery3-shop";
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
const images = [
  {
    original: "/assets/images/gallery/1.jpg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
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

const EvHome = () => {
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
          <ImagesSection></ImagesSection>
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
