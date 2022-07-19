import { Box, Button, Grid } from "@mui/material";
import ProductCard17 from "components/product-cards/ProductCard17";
import { H1, Paragraph } from "components/Typography";
import React from "react";

const FurnitureShopAllProducts = ({ productsData }) => {
  return (
    <Box>
      <Box my={2}>
        <H1 mb="4px">All Product</H1>
        <Paragraph color="grey.600">
          Tall blind but were, been folks not the expand
        </Paragraph>
      </Box>
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard17
              id={item.id}
              hideRating={true}
              title={item.title}
              rating={item.rating}
              price={item.price}
              status={item.status}
              off={item.discount}
              imgUrl={item.imgUrl}
              productColors={item.productColors}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </Box>
  );
};

export default FurnitureShopAllProducts;
