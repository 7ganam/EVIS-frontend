import { Box, Button, Grid, styled } from "@mui/material";
import ProductCard10 from "components/product-cards/ProductCard10";
import { H1 } from "components/Typography";
import React from "react";
const TitleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& h1": {
    fontSize: 40,
    fontWeight: 600,
    marginBottom: "10px",
  },
  "& div": {
    width: 200,
    height: "2px",
    margin: "auto",
    background: theme.palette.primary.main,
  },
}));

const AllProducts = ({ productsData }) => {
  return (
    <Box>
      <TitleBox my={4}>
        <H1>Our All Products</H1>
        <Box />
      </TitleBox>
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard10
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              price={item.price}
              off={item.discount}
              hideRating={true}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: "13px",
          }}
        >
          Load More...
        </Button>
      </Box>
    </Box>
  );
};

export default AllProducts;
