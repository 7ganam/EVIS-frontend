import { Container } from "@mui/material";

import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";

// import RoundedImage from "components/EvComponents/RoundedImages";
// import RoundedImagesPanel from "components/EvComponents/RoundedImages/RoundedImagesPanel";
// ======================================================
// ======================================================
const generalPage = (props) => {
  const { offerProducts, allProducts, topSailedProducts } = props;

  return (
    <EvLayout showNavbar={true}>
      {/* <Container
        sx={{
          mb: 6,
        }}
      >
        <div>why-abu-dhabi</div>
      </Container> */}
      {/* <RoundedImagesPanel /> */}

    </EvLayout>
  );
};

export async function getStaticProps() {
  const allProducts = await api.getGrocery3Products();
  const offerProducts = await api.getGrocery3offerProducts();
  const topSailedProducts = await api.getTopSailedProducts();
  return {
    props: {
      allProducts,
      offerProducts,
      topSailedProducts,
    },
  };
}
export default generalPage;
