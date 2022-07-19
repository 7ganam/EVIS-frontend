import { Container, Grid, Pagination } from "@mui/material";
import { FlexBetween } from "components/flex-box";
import SaleLayout from "components/layouts/SaleLayout";
import ProductCard1 from "components/product-cards/ProductCard1";
import { Span } from "components/Typography";
import productDatabase from "data/product-database";
import { renderProductCount } from "lib";
import { useEffect, useState } from "react";

const SalePage2 = () => {
  const productPerPage = 28;
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState([]);

  const handlePageChange = (_, page) => setPage(page);

  useEffect(() => {
    setProductList(
      productDatabase.slice(page * productPerPage, (page + 1) * productPerPage)
    );
  }, [page]);
  return (
    <SaleLayout type="two">
      <Container
        sx={{
          mt: 4,
        }}
      >
        <Grid container spacing={3} minHeight={500}>
          {productList.map((item, ind) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
              <ProductCard1 {...item} />
            </Grid>
          ))}
        </Grid>

        <FlexBetween flexWrap="wrap" my={8}>
          <Span>
            {renderProductCount(page, productPerPage, productDatabase.length)}
          </Span>

          <Pagination
            page={page}
            color="primary"
            variant="outlined"
            onChange={handlePageChange}
            count={Math.ceil(productDatabase.length / productPerPage)}
          />
        </FlexBetween>
      </Container>
    </SaleLayout>
  );
};

export default SalePage2;
