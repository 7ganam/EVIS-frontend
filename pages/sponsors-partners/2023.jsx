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

// const keyPartners = [
//   {
//     source: "/assets/images/organizations/Masdar.jpg",
//     text: "Sustainability Partner",
//   },
//   {
//     source: "/assets/images/organizers/ADNEC.png",
//     text: "Venue Partner",
//   },
//   {
//     source: "/assets/images/organizers/AbuDhabi.png",
//     text: "Host City",
//   },
//   {
//     source: "/assets/images/NirvanaLogo.png",
//     text: "Organized by",
//   },
// ];

// const sponsors = [
//   {
//     source: "/assets/images/organizers/Audi.png",
//     text: "Knowledge Partner",
//   },
//   {
//     source: "/assets/images/organizers/BritishVolt.png",
//     text: "Silver Sponsor",
//   },
//   {
//     source: "/assets/images/associations/Totalenergies.png",
//     text: "Delegate Host Sponsor",
//   },
// ];

// const internationalMediaPartners = [
//   {
//     source: "/assets/images/associations/Skynews.png",
//     text: "",
//   },
// ];

// const knowledgePartners = [
//   {
//     source: "/assets/images/partners/CEBC.png",
//     text: "",
//   },
//   {
//     source: "/assets/images/partners/CHARIN.png",
//     text: "",
//   },
//   {
//     source: "/assets/images/partners/GEEE.png",
//     text: "",
//   },
//   {
//     source: "/assets/images/partners/ISF.png",
//     text: "",
//   },
//   {
//     source: "/assets/images/partners/AVERE.png",
//     text: "",
//   },
// ];

// const researchPartners = [
//   {
//     source: "/assets/images/organizations/Oxford.jpg",
//     text: "",
//   },
// ];

// const mediaPartners = [
//   {
//     source: "/assets/images/associations/Nationshield.png",
//     text: "",
//   },
//   {
//     source: "/assets/images/associations/Petrofinder.png",
//     text: "",
//   },
// ];
const pageHeaderData = {
  text: "TO OUR 2022 SUPPORTERS, PARTNERS AND SPONSORS!",
  //   buttonText: "Save The Date",
  //   buttonLink: "/",
  image: "/assets/images/png_bg.png",
};
const GeneralPage = (props) => {
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
      };
    });

    return sponsors;
  }, [props?.sponsors]);

  let partners = useMemo(() => {
    if (!props?.partners) {
      return {};
    }

    let data = JSON.parse(props.partners)?.data ?? null;

    const partners = data?.map((partner) => {
      return {
        text: partner?.attributes?.title ?? "",
        source: partner?.attributes?.image?.data?.attributes?.url ?? "",
        year: partner?.attributes?.year ?? "",
        key_partner: partner?.attributes?.key_partner ?? null,
        sponsor: partner?.attributes?.sponsor ?? null,
        international_media_partner:
          partner?.attributes?.international_media_partner ?? null,
        knowledge_partner: partner?.attributes?.knowledge_partner ?? null,
        research_partner: partner?.attributes?.research_partner ?? null,
        media_partner: partner?.attributes?.media_partner ?? null,
      };
    });

    return partners;
  }, [props?.partners]);

  const key_partners = sponsors?.filter((sponsor) => {
    return sponsor.key_partner === true;
  });
  const SponsorsGrid = sponsors?.filter((sponsor) => {
    return sponsor.sponsor === true;
  });

  const internationalMediaPartners = partners?.filter((partner) => {
    return partner.international_media_partner === true;
  });

  const knowledgePartners = partners?.filter((partner) => {
    return partner.knowledge_partner === true;
  });

  const researchPartners = partners?.filter((partner) => {
    return partner.research_partner === true;
  });

  const mediaPartners = partners?.filter((partner) => {
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
        <Box sx={{ mt: "30px" }}>
          <SectionTitle>KEY PARTNERS</SectionTitle>
        </Box>{" "}
        <Grid
          container
          sx={{
            width: "800px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {key_partners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
        <SectionTitle>SPONSORS</SectionTitle>
        <Grid
          justifyContent={"center"}
          container
          sx={{
            width: "600px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {SponsorsGrid?.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={4} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
        <SectionTitle>INTERNATIONAL MEDIA PARTNER</SectionTitle>
        <Grid
          container
          sx={{ textAlign: "center", placeItems: "center", marginTop: "40px" }}
        >
          {internationalMediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
        <SectionTitle>KNOWLEDGE PARTNERS</SectionTitle>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 10 }}
          justifyContent={"center"}
          sx={{
            width: "950px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {knowledgePartners.map(({ source, text, link }) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
        <SectionTitle>RESEARCH PARTNER</SectionTitle>
        <Grid
          container
          sx={{ textAlign: "center", placeItems: "center", marginTop: "40px" }}
        >
          {researchPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
        <SectionTitle>MEDIA PARTNERS</SectionTitle>
        <Grid
          container
          sx={{
            width: "450px",
            textAlign: "center",
            placeItems: "center",
            marginTop: "40px",
          }}
        >
          {mediaPartners.map(({ source, text }) => {
            return (
              <Grid item xs={12} sm={6} key={source}>
                <LogoWithTitle source={source} text={text} />
              </Grid>
            );
          })}
        </Grid>
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

  try {
    partners = await api.getPartners(23);
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    partnersError = dev_error;
  }

  if (!partners) {
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
