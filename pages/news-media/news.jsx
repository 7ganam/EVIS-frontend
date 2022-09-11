import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import api from "src/utils/api/grocery3-shop";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import NewsCard from "src/components/EvComponents/NewsCard";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import { H3 } from "src/components/EvComponents/Typography";
import EvisInNewsSection from "@/components/EvSections/new-page-sections/EvisInNewsSection";

const evisInNewsData = [
  {
    title: "Sky News Morning Show coverage",
    link: "https://youtu.be/b1HNKh4eU18",
    img: "/assets/images/news-page/inNews/1.jpg",
  },
  {
    title: `AD TV -OloomAl Dar`,
    link: "https://www.youtube.com/watch?v=thzikNydA80&ab_channel=Oloomaldaar%D8%B9%D9%84%D9%88%D9%85%D8%A7%D9%84%D8%AF%D8%A7%D8%B1",
    img: "/assets/images/news-page/inNews/2.jpg",
  },
  {
    title: `Dubai TVr`,
    link: "https://www.youtube.com/watch?v=bxKhcfhiLXo&ab_channel=DubaiTVI%D8%AA%D9%84%D9%81%D8%B2%D9%8A%D9%88%D9%86%D8%AF%D8%A8%D9%8A",
    img: "/assets/images/news-page/inNews/3.jpg",
  },
  {
    title: `ERAM Channel`,
    link: "https://youtu.be/KB9GENQflOo",
    img: "/assets/images/news-page/inNews/4.jpg",
  },
  {
    title: `Sky News –Our Planet `,
    link: "https://www.skynewsarabia.com/program/kawkabona-%D9%83%D9%88%D9%83%D8%A8%D9%86%D8%A7",
    img: "/assets/images/news-page/inNews/5.jpg",
  },
];
const featureList = [
  {
    img: "/assets/images/news-page/2.png",
    content:
      "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
    buttonText: "READ MORE",
    buttonLink:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    title:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    date: "2022-08-15",
  },
  {
    img: "/assets/images/news-page/1.png",
    content: "An informative article on EV Adoption in the Middle East",
    buttonText: "READ MORE",
    buttonLink: "Time for the Middle East to go electric%3F How and why%3F",
    title: "Time for the Middle East to go electric? How and why?",
    date: "2022-08-08",
  },
  {
    img: "/assets/images/news-page/2.png",
    content:
      "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
    buttonText: "READ MORE",
    buttonLink:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    title:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    date: "2022-08-15",
  },
  {
    img: "/assets/images/news-page/1.png",
    content: "An informative article on EV Adoption in the Middle East",
    buttonText: "READ MORE",
    buttonLink: "Time for the Middle East to go electric%3F How and why%3F",
    title: "Time for the Middle East to go electric? How and why?",
    date: "2022-08-08",
  },
  {
    img: "/assets/images/news-page/2.png",
    content:
      "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
    buttonText: "READ MORE",
    buttonLink:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    title:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    date: "2022-08-15",
  },
  {
    img: "/assets/images/news-page/1.png",
    content: "An informative article on EV Adoption in the Middle East",
    buttonText: "READ MORE",
    buttonLink: "Time for the Middle East to go electric%3F How and why%3F",
    title: "Time for the Middle East to go electric? How and why?",
    date: "2022-08-08",
  },
  {
    img: "/assets/images/news-page/2.png",
    content:
      "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
    buttonText: "READ MORE",
    buttonLink:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    title:
      "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
    date: "2022-08-15",
  },
  {
    img: "/assets/images/news-page/1.png",
    content: "An informative article on EV Adoption in the Middle East",
    buttonText: "READ MORE",
    buttonLink: "Time for the Middle East to go electric%3F How and why%3F",
    title: "Time for the Middle East to go electric? How and why?",
    date: "2022-08-08",
  },
];

const EvHome = () => {
  const theme = useTheme();

  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <EvisInNewsSection data={evisInNewsData}></EvisInNewsSection>
      <Box mt={"30px"}>
        <SectionTitle>Articles</SectionTitle>
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
          <H3>{featureList[0].date.slice(0, 4)}</H3>
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

      <Container
        sx={{
          mb: 6,
        }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            mb: 6,
          }}
        >
          {featureList.map(({ img, title, date, buttonLink }) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={title}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <NewsCard
                  srcImage={img}
                  header={title}
                  date={date}
                  directory={buttonLink}
                />
              </Grid>
            );
          })}
        </Grid>

        {/* <Videos videosList={videosList} />
        <ExhibitionFeatures data={featureList} />
        <Press data={news} />
        <Press2 data={news2} /> */}
        {/* <Footer footer1={footer1} footer2={footer2} /> */}
        <SponsorsGrid />
        <PartnersGrid />
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
