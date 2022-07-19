import { Box, Button, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import React from "react";

const GiftShopAllProducts = ({ productsData }) => {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={3} sm={6} xs={12}>
            <ProductCard16
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              price={item.price}
              off={item.discount}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </CategorySectionCreator>
  );
};

export default GiftShopAllProducts;
