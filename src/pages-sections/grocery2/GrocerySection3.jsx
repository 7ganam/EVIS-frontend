import { Box, Grid, styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import LazyImage from "components/LazyImage";
import { H3, H5, Tiny } from "components/Typography";
import Link from "next/link";
import React from "react"; // styled component

const StyledBazarCard = styled(BazarCard)(({ theme }) => ({
  gap: "1rem",
  height: "100%",
  display: "flex",
  padding: "1.5rem",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    textAlign: "center",
    flexDirection: "column",
  },
})); // ===========================================================

// ===========================================================
const GrocerySection3 = ({ categories = [] }) => {
  return (
    <Box>
      <H3 fontSize={25} mb={3}>
        Shop By Category
      </H3>

      <Grid container spacing={3}>
        {categories.map((item, ind) => (
          <Grid item lg={4} xs={6} key={ind}>
            <Link href={item.url}>
              <a>
                <StyledBazarCard hoverEffect>
                  <LazyImage
                    src={item.imgUrl}
                    height={46}
                    width={46}
                    objectFit="contain"
                  />

                  <Box>
                    <Tiny color="primary.main">{item.subtitle}</Tiny>
                    <H5>{item.title}</H5>
                  </Box>
                </StyledBazarCard>
              </a>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GrocerySection3;
