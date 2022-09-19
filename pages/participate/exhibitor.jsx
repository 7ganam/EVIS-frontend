import { Container } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import EvLayout from "src/components/layouts/EvLayout";
// import api from "src/utils/api/grocery3-shop";
import MainForm from "src/components/MainForm";
import { Box } from "@mui/system";
// ======================================================
// ======================================================

const sponsorsData = [
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
    text: "Gold Sponsor",
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
          {" "}
          <Box mt={"30px"}>
            <SectionTitle>Book Your Stand</SectionTitle>
          </Box>
        </Box>
        <MainForm
          sponsors={sponsorsData}
          endpoint={"application-for-exhibitors"}
        />
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
