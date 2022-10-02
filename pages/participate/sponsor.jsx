import { Container } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import EvLayout from "src/components/layouts/EvLayout";
import api from "src/utils/api/evis-api";
import MainForm from "src/components/MainForm";
import { Box } from "@mui/system";
import { useMemo } from "react";

// ======================================================
// ======================================================

const sponsorsData = [
  {
    source: "/assets/images/organizations/DCT.png",
    text: "Destination Partner",
  },
  {
    source: "/assets/images/organizers/ADNEC.png",
    text: "Venue Partner",
  },
  {
    source: "/assets/images/organizers/AbuDhabi.png",
    text: "Host City",
  },
  {
    source: "/assets/images/organizers/Nirvana.png",
    text: "Organized By",
  },
  {
    source: "/assets/images/organizations/CEBC.png",
    text: "Knowledge Partner",
  },
];

const GeneralPage = (props) => {
  // const { offerProducts, allProducts, topSailedProducts } = props;
  // console.log(props.sponsors);
  let sponsors = useMemo(() => {
    if (!props?.sponsors) {
      return {};
    }

    let data = JSON.parse(props.sponsors)?.data ?? null;
    // const sponsors = data;

    const sponsors = data?.map((sponsor) => {
      return {
        text: sponsor?.attributes?.title ?? "",
        source: sponsor?.attributes?.image?.data?.attributes?.url ?? "",
      };
    });

    return sponsors;
  }, [props?.sponsors]);

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mb: "20px" }}>
          <Box mt={"30px"}>
            <SectionTitle>Enquire About Sponsorship Opportunities</SectionTitle>
          </Box>
        </Box>
        <MainForm
          sponsors={sponsors}
          endpoint={"application-for-sponsors"}
        />
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
