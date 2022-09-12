import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import api from "src/utils/api/grocery3-shop";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import Videos from "src/components/EvSections/new-page-sections/Videos";
import ExhibitionFeatures from "src/components/EvSections/why-exhibit-sections/ExhibitionFeatures";
import Press from "src/components/EvSections/new-page-sections/Press";
import Press2 from "src/components/EvSections/new-page-sections/Press2";
import Footer from "src/components/EvSections/why-exhibit-sections/Footer";
import NewsCard from "src/components/EvComponents/NewsCard";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import BazarImage from "src/components/BazarImage";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const videosList = [
  { youtube: "tKfOCjdwaJ0" },
  { youtube: "Jw_MFPnYn7s" },
  { youtube: "CAKf5hgSZyU" },
  { youtube: "tKfOCjdwaJ0" },
  { youtube: "Jw_MFPnYn7s" },
  { youtube: "CAKf5hgSZyU" },
];

const EvHome = () => {
  const theme = useTheme();
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <SectionTitle>GALLERY</SectionTitle>

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
            <SectionTitle>Photos</SectionTitle>
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

        <Box sx={{ width: "100%", height: 600, overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={4} gap={6}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <BazarImage
                  key={item.title}
                  src={`${item.img}?w=290&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=290&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "50px",
            textAlign: "center",
          }}
        >
          <Box>
            <SectionTitle>Videos</SectionTitle>
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
