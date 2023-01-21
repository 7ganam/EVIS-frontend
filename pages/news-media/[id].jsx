import EvLayout from "src/components/layouts/EvLayout";
import { useRouter } from "next/router";
import { Container, Grid, Box } from "@mui/material";
import { H2, H4, H5, Paragraph } from "src/components/EvComponents/Typography";
import TodayIcon from "@mui/icons-material/Today";
import { useTheme } from "@emotion/react";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

import Image from "src/components/BazarImage";

const ArticlePage = (props) => {
  const router = useRouter();
  const theme = useTheme();

  let articleData = useMemo(() => {
    if (props?.article) {
      let article = JSON.parse(props.article)?.data[0].attributes ?? null;
      return article;
    }

    return {};
  }, [props?.article]);

  // const nameData = newsList.filter((item) => item.title === filterName)[0];
  // const nameData = newsList.filter((item) => item.title === filterName)[0];
  if (!articleData) {
    return (
      <Box pt={20}>
        <Container mb={6}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <H2>Loading ...</H2>
          </Box>
        </Container>
      </Box>
    );
  }

  // console.log(nameData);

  return (
    <EvLayout showNavbar={true} title={articleData.name}>
      <Box py={5}>
        <Container mb={6}>
          <Grid
            container
            sx={{
              boxShadow: "1px 1px 5px 1px gray",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                backgroundColor: "#f0f0f0",
                borderRight: " solid 1px #d9d9d9",
              }}
            >
              <Box
                sx={{
                  my: "1em",
                  mx: "1em",
                }}
              >
                <Image
                  sx={{
                    objectFit: "cover",
                    // padding: "30px 60px"
                    //   width: "120px",
                    //   height: "120px",
                    margin: "auto",
                  }}
                  alt="image"
                  src={articleData?.article_photo?.data?.attributes?.url}
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              sx={{
                backgroundColor: "#f0f0f0",
                paddingTop: "15px",
              }}
            >
              <Box ml={3} my={3} sx={{}}>
                <H2>{articleData.title}</H2>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                borderTop: "solid 1px #d9d9d9",
                color: theme.palette.primary.main,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                JustifyContent: "center",
                padding: "10px",
              }}
            >
              <TodayIcon
                sx={{
                  fontSize: "40px",
                  marginRight: "7px",
                  marginLeft: "auto",
                  verticalAlign: "middle",
                  color: theme.palette.primary.main,
                }}
              />
              <H4 sx={{ marginRight: "auto" }}>{articleData.date}</H4>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                borderTop: "solid 1px #d9d9d9",
              }}
            >
              <Box mx={2} my={2} sx={{ margin: "30px" }}>
                <Paragraph>
                  <Box sx={{ whiteSpace: "pre-wrap" }}>
                    {articleData.content}
                  </Box>
                </Paragraph>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </EvLayout>
  );
};

export async function getStaticPaths() {
  let allArticles = null;
  let allArticlesError = null;

  try {
    allArticles = await api.getNewsArticle();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    allArticlesError = dev_error;
  }

  if (!allArticles) {
    return {
      notFound: true,
    };
  }

  const paths = allArticles.data.map((article) => ({
    params: { id: article?.id.toString() },
  }));

  console.log("paths :>> ", paths);

  return {
    paths: [...paths],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  let id = context?.params?.id ?? "";
  let article = null;
  let articleError = null;
  try {
    article = await api.getNewsArticleById(id);
  } catch (dev_error) {
    articleError = dev_error;
    console.log(`dev_error`, dev_error);
    return {
      notFound: true,
    };
  }

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: JSON.stringify(article),
      articleError: JSON.stringify(articleError),
    }, // will be passed to the page component as props
  };
}

export default ArticlePage;
