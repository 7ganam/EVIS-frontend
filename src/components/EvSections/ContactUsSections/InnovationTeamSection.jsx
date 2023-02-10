import * as React from "react";
import { Container, Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import RectangularInfoImage from "src/components/EvComponents/RectangularInfoImage";
import api from "src/utils/api/evis-api";
import { useMemo } from "react";

const sectionTitle = {
  Title: "THE ELECTRIC VEHICLE INNOVATION TEAM",
};

const InnovationTeamSection = (props) => {
  let { InnovationTeamData, data } = useMemo(() => {
    if (!props?.InnovationTeam) {
      return {};
    }
    let InnovationTeamData = JSON.parse(props.InnovationTeam).data;

    const data = InnovationTeamData?.map((attributes) => {
      return {
        Src: attributes?.attributes?.image?.data?.attributes?.url,
        Name: attributes?.attributes?.name,
        Position: attributes?.attributes?.position,
        Mobile: attributes?.attributes?.phone,
        Email: attributes?.attributes?.member_email,
        EmailTo: "mailto:" + attributes?.attributes?.member_email,
      };
    });

    return {
      InnovationTeamData,
      data,
    };
  }, [props?.InnovationTeam]);

  return (
    <Container>
      <Box sx={{ margin: "80px 0 -30px" }}>
        <SectionTitle>THE ELECTRIC VEHICLE INNOVATION TEAM</SectionTitle>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{
          textAlign: "center",
          placeItems: "start",
          marginTop: "40px",
          alignItems: "stretch",
        }}
      >
        {data?.map(({ Src, Name, Position, Mobile, Email, EmailTo }) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={Name} gap={"30px"}>
              <RectangularInfoImage
                src={Src}
                title={Position}
                name={Name}
                tel={Mobile}
                email={Email}
                emailTo={EmailTo}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export async function getStaticProps(context) {
  let InnovationTeam = null;
  let InnovationTeamError = null;

  try {
    InnovationTeam = await api.getInnovationTeam();
  } catch (dev_error) {
    console.log(`error fetching`, dev_error);
    InnovationTeamError = dev_error;
  }

  if (!InnovationTeam) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      InnovationTeam: JSON.stringify(InnovationTeam),
      InnovationTeamError: JSON.stringify(InnovationTeamError),
    },
    revalidate: 10, // In seconds
  };
}

export default InnovationTeamSection;
