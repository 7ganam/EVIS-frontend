import React from 'react';
import EvLayout from "components/layouts/EvLayout";
import { Container} from "@mui/material";
import api from "utils/api/grocery3-shop";



const EvHome = () => {
  return (
    <EvLayout showNavbar={true} title={"Home"}>
      <Container
        sx={{
          mb: 6,
        }}
      >
    <div>News</div>
    </Container>
    </EvLayout>
  )
}

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

export default EvHome;