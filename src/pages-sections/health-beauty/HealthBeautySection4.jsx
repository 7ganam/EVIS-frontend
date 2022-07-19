import { Button, Grid, styled } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import { FlexRowCenter } from "components/flex-box";
import ProductCard14 from "components/product-cards/ProductCard14";
import { Paragraph } from "components/Typography";
import React from "react"; // styled component

const SubTitle = styled(Paragraph)(({ theme }) => ({
  fontSize: 12,
  marginTop: "-20px",
  marginBottom: "20px",
  color: theme.palette.grey[600],
})); // ===========================================================

// ===========================================================
const HealthBeautySection4 = ({ productsData }) => {
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#" mb={0}>
      <SubTitle>Best deal with medical and beauty items</SubTitle>
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={4} sm={6} xs={12}>
            <ProductCard14
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
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </FlexRowCenter>
    </CategorySectionCreator>
  );
};

export default HealthBeautySection4;
