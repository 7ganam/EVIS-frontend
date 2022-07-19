import { Container, Grid } from "@mui/material";
import ShopLayout2 from "components/layouts/ShopLayout2";
import CheckoutForm2 from "pages-sections/checkout/CheckoutForm2";
import CheckoutSummary2 from "pages-sections/checkout/CheckoutSummary2";

const CheckoutAlternative = () => {
  return (
    <ShopLayout2>
      <Container
        sx={{
          my: "1.5rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            <CheckoutForm2 />
          </Grid>

          <Grid item lg={4} md={4} xs={12}>
            <CheckoutSummary2 />
          </Grid>
        </Grid>
      </Container>
    </ShopLayout2>
  );
};

export default CheckoutAlternative;
