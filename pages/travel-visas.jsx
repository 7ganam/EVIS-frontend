import { Container, Stack } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import EvLayout from "src/components/layouts/EvLayout";
import MainSection from "src/components/EvSections/travel-visa-sections/FormSection";
import IntroSection from "src/components/EvSections/travel-visa-sections/IntroSection";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

import { Box } from "@mui/system";

import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
// ======================================================
// ======================================================

const itemData = {
  img: "/assets/images/travel-visit/city.jpeg",
  title: "Enjoy preferred rates by booking through us!",
  ps: [
    "Book your accommodation, flights, tours, visa and transportation at preferred rates via our associations with the region’s most trusted travel management company. ",
    "Fill out the form based on your requirements to directly get in touch with dedicated staff from Nirvana Travel & Tourism and enjoy preferred rates. We made it all easy - just for you!",
  ],
};

const GeneralPage = (props) => {
  const headers = props?.headers ?? [];

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
      };
    });

    return sponsors;
  }, [props?.sponsors]);
  const key_partners = sponsors?.filter((sponsor) => {
    return sponsor.key_partner === true;
  });
  return (
    <EvLayout showNavbar={true}>
      <PageHeader
        image={headers?.PLAN_YOUR_VISIT?.image?.data?.attributes?.url}
      >
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.PLAN_YOUR_VISIT?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.PLAN_YOUR_VISIT?.text}
            </H1>
          )}
          {headers?.PLAN_YOUR_VISIT?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginBottom: "20px",
              }}
            >
              {headers?.PLAN_YOUR_VISIT?.sub_text}
            </H6>
          )}
        </Box>
      </PageHeader>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mb: "20px", mt: "30px" }}>
          {" "}
          <SectionTitle>Travel & Visas</SectionTitle>
        </Box>
        <Stack direction={"column"} spacing={3}>
          <IntroSection itemData={itemData}></IntroSection>
          <MainSection
            sponsors={key_partners}
            endpoint={"application-for-visas"}
          />
        </Stack>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let sponsors = null;
  let sponsorsError = null;

  try {
    sponsors = await api.getSponsors();
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
    },
    revalidate: 10, // In seconds
  };
}
export default GeneralPage;
