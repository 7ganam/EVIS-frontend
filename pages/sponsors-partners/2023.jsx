import React from "react";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Grid, Container, Box } from "@mui/material";
import { H1, H4 } from "src/components/EvComponents/Typography";

import EvLayout from "src/components/layouts/EvLayout";
import { H2, H5 } from "@/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import LogoWithTitle from "@/components/EvComponents/LogoWithTitle";
import { useTheme } from "@emotion/react";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

// ======================================================
// ======================================================

const StyledImage = (props) => {
  return <img src={props.Src} width="170" style={{ margin: "10px" }} />;
};

const GeneralPage = (props) => {
  let sponsors = useMemo(() => {
    if (!props?.sponsors) {
      return {};
    }

    let data = JSON.parse(props.sponsors)?.data ?? null;
    console.log("data", data);
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
  const SponsorsGrid = sponsors?.filter((sponsor) => {
    return sponsor.sponsor === true;
  });

  const internationalMediaPartners = sponsors?.filter((partner) => {
    return partner.international_media_partner === true;
  });

  const knowledgePartners = sponsors?.filter((partner) => {
    return partner.knowledge_partner === true;
  });

  const researchPartners = sponsors?.filter((partner) => {
    return partner.research_partner === true;
  });

  const mediaPartners = sponsors?.filter((partner) => {
    return partner.media_partner === true;
  });

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          textAlign: "center",
          placeItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pb: "30px",
        }}
      >
        {key_partners && key_partners.length > 0 && (
          <Box sx={{ mt: "30px" }}>
            <SectionTitle>KEY PARTNERS</SectionTitle>
          </Box>
        )}
        <Box
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "900px",
            mt: "15px",
          }}
        >
          {key_partners.map(({ source, text }) => {
            return (
              <Box sx={{}} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Box>
            );
          })}
        </Box>
        {SponsorsGrid && SponsorsGrid.length > 0 && (
          <Box sx={{ mt: "40px", mb: "20px" }}>
            <SectionTitle>SPONSORS</SectionTitle>
          </Box>
        )}
        <Box
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "900px",
          }}
        >
          {SponsorsGrid?.map(({ source, text }) => {
            return (
              <Box sx={{}} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Box>
            );
          })}
        </Box>
        {internationalMediaPartners && internationalMediaPartners.length > 0 && (
          <Box sx={{ mt: "40px", mb: "20px" }}>
            <SectionTitle>INTERNATIONAL MEDIA PARTNER</SectionTitle>
          </Box>
        )}
        <Box
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "900px",
          }}
        >
          {internationalMediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Box>
        {knowledgePartners && knowledgePartners.length > 0 && (
          <Box sx={{ mt: "40px", mb: "20px" }}>
            <SectionTitle>KNOWLEDGE PARTNERS</SectionTitle>
          </Box>
        )}
        <Box
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "900px",
          }}
        >
          {knowledgePartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Box>
        {researchPartners && researchPartners.length > 0 && (
          <Box sx={{ mt: "40px", mb: "20px" }}>
            <SectionTitle>RESEARCH PARTNER</SectionTitle>
          </Box>
        )}
        <Box
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "900px",
          }}
        >
          {researchPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Box>
        {mediaPartners && mediaPartners.length > 0 && (
          <Box sx={{ mt: "40px", mb: "20px" }}>
            <SectionTitle>MEDIA PARTNERS</SectionTitle>
          </Box>
        )}
        <Box
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            width: "900px",
          }}
        >
          {mediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={4} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Box>
      </Container>
    </EvLayout>
  );
};

export async function getStaticProps(context) {
  let sponsors = null;
  let sponsorsError = null;

  let partners = null;
  let partnersError = null;

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
      partners: JSON.stringify(partners),
      partnersError: JSON.stringify(partnersError),
    },
    revalidate: 10, // In seconds
  };
}
export default GeneralPage;
