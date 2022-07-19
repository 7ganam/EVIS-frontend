import { Button, Grid, styled } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import { FlexRowCenter } from "components/flex-box";
import ProductCard13 from "components/product-cards/ProductCard13";
import { Paragraph } from "components/Typography";
import React from "react";
const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.palette.grey[600],
})); // ========================================================

// ========================================================
const AllProducts = ({ productsData }) => {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <SubTitle>Best collection in 2021 for you!</SubTitle>

      <Grid container spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard13
              id={item.id}
              title={item.title}
              price={item.price}
              off={item.discount}
              rating={item.rating}
              imgUrl={item.imgUrl}
            />
          </Grid>
        ))}
      </Grid>

      <FlexRowCenter mt={6}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: 13,
          }}
        >
          Load More...
        </Button>
      </FlexRowCenter>
    </CategorySectionCreator>
  );
};

export default AllProducts;
