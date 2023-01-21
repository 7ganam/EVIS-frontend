import React from "react";
import EvLayout from "src/components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import SponsorsGrid from "src/components/EvSections/SponsorsGrid";
import PartnersGrid from "src/components/EvSections/PartnersGrid";
import NewsCard from "src/components/EvComponents/NewsCard";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import EvisInNewsSection from "@/components/EvSections/new-page-sections/EvisInNewsSection";
import { H2 } from "@/components/Typography";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

const EvHome = (props) => {
  const theme = useTheme();

  let sponsors = useMemo(() => {
    if (!props?.sponsors) {
      return {};
    }

    let data = JSON.parse(props.sponsors)?.data ?? null;

    const sponsors = data?.map((sponsor) => {
      return {
        text: sponsor?.attributes?.title ?? "",
        source: sponsor?.attributes?.image?.data?.attributes?.url ?? "",
        year: sponsor?.attributes?.year ?? "",
        key_partner: sponsor?.attributes?.key_partner ?? null,
        sponsor: sponsor?.attributes?.sponsor ?? null,
        international_media_partner:
          sponsor?.attributes?.international_media_partner ?? null,
        knowledge_partner: sponsor?.attributes?.knowledge_partner ?? null,
        research_partner: sponsor?.attributes?.research_partner ?? null,
        media_partner: sponsor?.attributes?.media_partner ?? null,
        link: sponsor?.attributes?.link ?? null,
      };
    });

    return sponsors;
  }, [props?.sponsors]);
  const key_partners = sponsors?.filter((sponsor) => {
    return sponsor.key_partner === true;
  });
  const knowledgePartners = sponsors?.filter((partner) => {
    return partner.knowledge_partner === true;
  });
  const mediaPartners = sponsors?.filter((partner) => {
    return partner.media_partner === true;
  });

  let { evisNewsData, evisInNewsData } = useMemo(() => {
    if (!props?.evisNews) {
      return {};
    }
    let evisNewsData = JSON.parse(props.evisNews).data ?? null;
    const evisInNewsData = evisNewsData?.map((attributes) => {
      return {
        title: attributes?.attributes?.title,
        link: attributes?.attributes?.news_link,
        img: attributes?.attributes?.photo?.data?.[0]?.attributes?.url,
      };
    });
    return {
      evisNewsData,
      evisInNewsData,
    };
  }, [props?.evisNews]);

  let { newsArticleData, newsList } = useMemo(() => {
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
      };
    });

    //sort by date descending
    newsList.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

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
          {newsList?.map(({ img, title, date, buttonLink }) => {
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
        <Box sx={{ mt: "100px" }}>
          <PartnersGrid
            sx={{ mt: 5 }}
            partners={key_partners}
            title={"KEY PARTNERS"}
          />
          <PartnersGrid
            sx={{ mt: "80px" }}
            partners={knowledgePartners}
            title={"KNOWLEDGE PARTNERS"}
          />
          <PartnersGrid
            sx={{ mt: "80px", pb: "100px" }}
            partners={mediaPartners}
            title={"MEDIA PARTNERS"}
          />
        </Box>
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

  let sponsors = null;
  let sponsorsError = null;
  try {
    sponsors = await api.getSponsors(23);
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    sponsorsError = dev_error;
  }
  if (!sponsors) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sponsors: JSON.stringify(sponsors),
      sponsorsError: JSON.stringify(sponsorsError),
      evisNews: JSON.stringify(evisNews),
      evisNewsError: JSON.stringify(evisNewsError),
      newsArticle: JSON.stringify(newsArticle),
      newsArticleError: JSON.stringify(newsArticleError),
    },
    revalidate: 10, // In seconds
  };
}

export default EvHome;
