import * as React from "react";
import { Container, Box, Link } from "@mui/material";
import { H5, Paragraph } from "src/components/EvComponents/Typography";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { H2, H3 } from "@/components/Typography";
import { useMemo } from "react";

const FindUsSection = (props) => {
  let {
    contactPageData,
    title,
    mapLocation,
    paragraph,
    email,
    emailTo,

  } = useMemo(() => {
    if (!props?.contactPage) {
      return {};
    }
    let contactPageData = props.contactPage;

    const title = contactPageData?.find_us_title;
    const area = contactPageData?.find_us_area;
    const building = contactPageData?.find_us_building;
    const emirate = contactPageData?.find_us_emirate;
    const country = contactPageData?.find_us_country;
    const email = contactPageData?.contact_email;
    const emailTo = "mailto:" + email;
    const mapLocation = contactPageData?.google_maps_location;

    const paragraph = [
      { body: area },
      { body: building },
      { body: emirate },
      { body: country },
    ];

    return {
      contactPageData,
      title,
      mapLocation,
      paragraph,
      email,
      emailTo,
    };
  }, [props?.contactPage]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          margin: "50px 0 40px",
        }}
      >
        <SectionTitle>{title}</SectionTitle>
      </Box>
      {paragraph?.map(({ body }) => {
        return <Paragraph key={body}>{body}</Paragraph>;
      })}
      <H2 margin="50px 0 20px">
        Email: <Link href={emailTo}>{email}</Link>
      </H2>
      <iframe
        src={mapLocation}
        width="600"
        height="450"
        border="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};


export default FindUsSection;
