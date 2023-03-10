import EvLayout from "src/components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import { H2, H4, H5 } from "src/components/EvComponents/Typography";

import Image from "src/components/BazarImage";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";
import { useRouter } from "next/router";

const SpeakerPage = (props) => {
  const router = useRouter();

  let speakerData = useMemo(() => {
    if (props?.speaker) {
      let speaker = JSON.parse(props.speaker)?.data[0].attributes ?? null;
      return speaker;
    }

    return {};
  }, [props?.speaker]);

  if (router.isFallback) {
    return (
      <EvLayout showNavbar={true}>
        <Box pt={5}>
          <Container>
            <Grid
              container
              sx={{
                boxShadow: "1px 1px 5px 1px gray",
              }}
            >
              Loading ...
            </Grid>
          </Container>
        </Box>
      </EvLayout>
    );
  }

  return (
    <EvLayout showNavbar={true} title={speakerData?.name ?? ""}>
      <Box pt={5}>
        <Container>
          <Grid
            container
            sx={{
              boxShadow: "1px 1px 5px 1px gray",
            }}
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
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
                    borderRadius: "50%",
                    objectFit: "cover",
                    // padding: "30px 60px"
                    //   width: "120px",
                    //   height: "120px",
                    margin: "auto",
                  }}
                  alt="rounded image"
                  src={speakerData?.image?.data?.attributes?.url}
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={10}
              sx={{
                backgroundColor: "#f0f0f0",
              }}
            >
              <Box ml={3} my={3} sx={{}}>
                <H2>{speakerData?.name ?? ""}</H2>
                <H4
                  sx={{
                    color: "gray",
                  }}
                >
                  {speakerData?.title ?? ""}
                </H4>
                <H4
                  sx={{
                    color: "gray",
                  }}
                >
                  {speakerData?.company ?? ""}
                </H4>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                borderTop: "solid 1px #d9d9d9",
              }}
            >
              <Box mx={2} my={2}>
                <H2
                  sx={{
                    color: "#4d4d4d",
                  }}
                >
                  About
                </H2>
                <H5
                  sx={{
                    color: "#4d4d4d",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {speakerData?.about ? speakerData.about : "No data"}
                </H5>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </EvLayout>
  );
};

export async function getStaticPaths() {
  let allSpeakers = null;
  let allSpeakersError = null;

  try {
    allSpeakers = await api.getSpeakers();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    allSpeakersError = dev_error;
  }

  if (!allSpeakers) {
    return {
      notFound: true,
    };
  }

  const paths = allSpeakers.data.map((speaker) => ({
    params: { slug: speaker?.attributes?.slug },
  }));

  return {
    paths: [...paths],
    fallback: true, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  let slug = context?.params?.slug ?? "";
  let speaker = null;
  let speakerError = null;
  try {
    speaker = await api.getSpeaker(slug);
  } catch (dev_error) {
    speakerError = dev_error;
    console.log(`dev_error`, dev_error);
    return {
      notFound: true,
    };
  }

  if (!speaker) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      speaker: JSON.stringify(speaker),
      speakerError: JSON.stringify(speakerError),
    },
    revalidate: 1, // In seconds
  };
}

export default SpeakerPage;
