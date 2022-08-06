import { Container, Stack } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import MainSection from "components/EvSections/travel-visa-sections/FormSection";
import IntroSection from "components/EvSections/travel-visa-sections/IntroSection";

import { Box } from "@mui/system";
// ======================================================
// ======================================================

const sponsorsData = [
  {
    source: "/assets/images/organizers/Masdar.png",
  },
  {
    source: "/assets/images/organizers/ADNEC.png",
  },
  {
    source: "/assets/images/organizers/AbuDhabi.png",
  },
  {
    source: "/assets/images/organizers/Nirvana.png",
  },
  {
    source: "/assets/images/organizers/Audi.png",
  },
  {
    source: "/assets/images/organizers/BritishVolt.png",
  },
];

const itemData = {
  img: "/assets/images/travel-visit/city.jpeg",
  title: "Enjoy preferred rates by booking through us!",
  ps: [
    "Book your accommodation, flights, tours, visa and transportation at preferred rates via our associations with the region’s most trusted travel management company. ",
    "Fill out the form based on your requirements to directly get in touch with dedicated staff from Nirvana Travel & Tourism and enjoy preferred rates. We made it all easy - just for you!",
  ],
};

const generalPage = (props) => {
  // const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mb: "20px" }}>
          {" "}
          <SectionTitle>Travel & Visas</SectionTitle>
        </Box>
        <Stack direction={"column"} spacing={3}>
          <IntroSection itemData={itemData}></IntroSection>
          <MainSection sponsors={sponsorsData} />
        </Stack>
      </Container>
    </EvLayout>
  );
};

// export async function getStaticProps() {
//   const allProducts = await api.getGrocery3Products();
//   const offerProducts = await api.getGrocery3offerProducts();
//   const topSailedProducts = await api.getTopSailedProducts();
//   return {
//     props: {
//       allProducts,
//       offerProducts,
//       topSailedProducts,
//     },
//   };
// }
export default generalPage;
