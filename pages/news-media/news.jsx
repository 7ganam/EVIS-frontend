import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import NewsCard from "src/components/EvComponents/NewsCard";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import { H3 } from "src/components/EvComponents/Typography";
import EvisInNewsSection from "@/components/EvSections/new-page-sections/EvisInNewsSection";
import { H2 } from "@/components/Typography";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

const EvHome = (props) => {
  const theme = useTheme();
  let {
    evisNewsData,
    evisInNewsData,
  } = useMemo(() => {
    if (!props?.evisNews) {
      return {};
    }
    let evisNewsData = JSON.parse(props.evisNews).data ?? null;
    const evisInNewsData = evisNewsData?.map((attributes) => {
      return {
        title: attributes?.attributes?.title,
        link: attributes?.attributes?.news_link,
        img: attributes?.attributes?.photo?.data?.[0]?.attributes?.url,
      }
    })
    return {
      evisNewsData,
      evisInNewsData,
    };
  }, [props?.evisNews]);

  let {
    newsArticleData,
    newsList,
  } = useMemo(() => {
    if (!props?.newsArticle) {
      return {};
    }
    let newsArticleData = JSON.parse(props.newsArticle).data ?? null;

    const newsList = newsArticleData.map((attributes) => {
      return {
        img: attributes?.attributes?.article_photo?.data?.attributes?.url,
        content: attributes?.attributes?.content,
        buttonText: "READ MORE",
        buttonLink: attributes?.attributes?.title.replaceAll("?", "%3F"),
        title: attributes?.attributes?.title,
        date: attributes?.attributes?.date,
      }
    })

    return {
      newsArticleData,
      newsList,
    };
  }, [props?.newsArticle]);

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
        <Box sx={{ mb: "30px" }}>
          <H2>2022</H2>
        </Box>
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
          {newsList.map(({ img, title, date, buttonLink }) => {
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
        <ExhibitionFeatures data={newsList} />
        <Press data={news} />
        <Press2 data={news2} /> */}
        {/* <Footer footer1={footer1} footer2={footer2} /> */}
        <SponsorsGrid />
        <PartnersGrid />
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let evisNews = null;
  let evisNewsError = null;
  let newsArticle = null;
  let newsArticleError = null;

  try {
    evisNews = await api.getEvisInNews();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    evisNewsError = dev_error;
  }

  if (!evisNews) {
    return {
      notFound: true,
    };
  }

  try {
    newsArticle = await api.getNewsArticle();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    newsArticleError = dev_error;
  }

  if (!newsArticle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      evisNews: JSON.stringify(evisNews),
      evisNewsError: JSON.stringify(evisNewsError),
      newsArticle: JSON.stringify(newsArticle),
      newsArticleError: JSON.stringify(newsArticleError),
    },
    revalidate: 10, // In seconds
  };
}

export default EvHome;
