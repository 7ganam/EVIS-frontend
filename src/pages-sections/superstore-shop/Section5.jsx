import { Grid } from "@mui/material";
import BazarCard from "src/components/BazarCard";
import CategorySectionCreator from "src/components/CategorySectionCreator";
import NewArrival from "src/components/icons/NewArrival";
import ProductCard2 from "src/components/product-cards/ProductCard2";
import React from "react";

const Section5 = ({ newArrivalsList }) => {
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title="New Arrivals"
      seeMoreLink="#"
    >
      <BazarCard
        sx={{
          p: 2,
        }}
      >
        <Grid container spacing={3}>
          {newArrivalsList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <ProductCard2 {...item} />
            </Grid>
          ))}
        </Grid>
      </BazarCard>
    </CategorySectionCreator>
  );
};

export default Section5;
