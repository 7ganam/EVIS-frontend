import { Container } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import MainSection from "components/EvSections/book-your-stand-sections/MainSection";
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
          <SectionTitle>Book Your Stand</SectionTitle>
        </Box>
        <MainSection sponsors={sponsorsData} />
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
