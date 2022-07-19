import FilterList from "@mui/icons-material/FilterList";
import { Container, Grid, IconButton } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import Navbar from "components/navbar/Navbar";
import ProductCardList from "components/products/ProductCard1List";
import ProductFilterCard from "components/products/ProductFilterCard";
import ShopIntroCard from "components/shop/ShopIntroCard";
import Sidenav from "components/sidenav/Sidenav";
import useWindowSize from "hooks/useWindowSize";

const Shop = () => {
  const width = useWindowSize();
  const isTablet = width < 1025;
  return (
    <ShopLayout1 navbar={<Navbar />}>
      <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        <ShopIntroCard />

        <Grid container spacing={3}>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <ProductFilterCard />
          </Grid>

          <Grid item md={9} xs={12}>
            {isTablet && (
              <Sidenav
                position="left"
                handle={
                  <IconButton
                    sx={{
                      float: "right",
                    }}
                  >
                    <FilterList fontSize="small" />
                  </IconButton>
                }
              >
                <ProductFilterCard />
              </Sidenav>
            )}

            <ProductCardList />
          </Grid>
        </Grid>
      </Container>
    </ShopLayout1>
  );
};

export default Shop;
