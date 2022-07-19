import { Container, Grid } from "@mui/material";
import CategorySectionHeader from "components/CategorySectionHeader";
import React from "react";
import HomeFourCard2 from "./homeFour-cards/HomeFourCard2";

const Section2 = ({ featuredCategories }) => {
  const firstItem = featuredCategories[0];
  const featured = featuredCategories.slice(1, featuredCategories.length);
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <CategorySectionHeader title="Featured Categories" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <HomeFourCard2
            title={firstItem.title}
            imgUrl={firstItem.imgUrl}
            headingStyle={{
              pl: "1.5rem",
              pb: "1rem",
              pt: "1.5rem",
            }}
          />
        </Grid>
        <Grid container item md={6} xs={12} spacing={3}>
          {featured.map((category, ind) => (
            <Grid item xs={6} key={ind}>
              <HomeFourCard2 title={category.title} imgUrl={category.imgUrl} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Section2;
