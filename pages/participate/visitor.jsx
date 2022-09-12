import { Container } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import EvLayout from "src/components/layouts/EvLayout";
// import api from "src/utils/api/grocery3-shop";
import MainSection from "src/components/EvSections/book-your-stand-sections/MainSection";
import { Box } from "@mui/system";
// ======================================================
// ======================================================

const sponsorsData = [
  {
    source: "/assets/images/organizers/Masdar.png",
    text: "Sustainability Partner",
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
    source: "/assets/images/organizers/Audi.png",
    text: "Gold Sponsor",
  },
  {
    source: "/assets/images/organizers/BritishVolt.png",
    text: "Silver Sponsor",
  },
];

const generalPage = () => {
  // const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <Box sx={{ mb: "20px" }}>
          <Box mt={"30px"}>
            <SectionTitle>Attend as Visitor</SectionTitle>{" "}
          </Box>
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
