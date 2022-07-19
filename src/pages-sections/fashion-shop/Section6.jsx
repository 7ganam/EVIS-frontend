import { Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3 from "components/product-cards/ProductCard3";
import React from "react"; // =============================================================

// =============================================================
const Section6 = ({ trendingItems }) => {
  const trendings = trendingItems.slice(1, trendingItems.length);
  return (
    <CategorySectionCreator title="Trending Items">
      <Grid container spacing={4}>
        <Grid item md={3} xs={12}>
          <ProductCard12
            id={trendingItems[0].id}
            title={trendingItems[0].title}
            price={trendingItems[0].price}
            off={trendingItems[0].discount}
            rating={trendingItems[0].rating}
            imgUrl={trendingItems[0].imgUrl}
          />
        </Grid>

        <Grid item container md={9} xs={12} spacing={4}>
          {trendings.map((item, ind) => (
            <Grid item xs={6} sm={4} key={ind}>
              <ProductCard3
                id={item.id}
                title={item.title}
                price={item.price}
                off={item.discount}
                rating={item.raging}
                imgUrl={item.imgUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </CategorySectionCreator>
  );
};

export default Section6;
