import { Container } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import EvLayout from "src/components/layouts/EvLayout";
// import api from "src/utils/api/grocery3-shop";
import DownloadForm from "src/components/DownloadForm";
import { Box } from "@mui/system";
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
            <SectionTitle>Download Post Show Report</SectionTitle>
          </Box>
        </Box>
        <DownloadForm
          sponsors={sponsorsData}
          endpoint={"application-for-post-report-downloads"}
          downloadFileUrl={
            "https://res.cloudinary.com/drf11lmmn/image/upload/v1670312823/EVIS_2022_Post_Show_Rep_ort_21_11_22_5e08289762.pdf"
          }
          fileName="2023_post_show_report.pdf"
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
