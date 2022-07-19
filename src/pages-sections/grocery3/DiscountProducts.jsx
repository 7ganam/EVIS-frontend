import { Box, Button, Card, Grid, styled } from "@mui/material";
import LazyImage from "components/LazyImage";
import { H3, Paragraph } from "components/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react"; // styled components

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  boxShadow: "none",
  alignItems: "center",
  padding: "20px 50px",
  justifyContent: "center",
  background: theme.palette.paste[50],
  [theme.breakpoints.down("sm")]: {
    padding: "20px 30px",
    "& h3": {
      fontSize: 20,
    },
  },
})); // ============================================================

// ============================================================
const DiscountProducts = ({ offerProducts }) => {
  const router = useRouter();
  return (
    <Grid container spacing={3}>
      {offerProducts.map((item, ind) => (
        <Grid key={ind} item md={6} sm={12} xs={12}>
          <Link href="/sale-page-1">
            <a>
              <StyledCard>
                <Box width="60%">
                  <Paragraph fontWeight={600}>{item.title}</Paragraph>
                  <H3 fontSize={25} lineHeight={1.35}>
                    {item.discountOffer}
                  </H3>
                  <Button
                    sx={{
                      mt: 2,
                    }}
                    color="primary"
                    variant="outlined"
                    onClick={() => router.push("/sale-page-1")}
                  >
                    {item.buttonText}
                  </Button>
                </Box>

                <Box width="40%">
                  <LazyImage
                    width={100}
                    height={100}
                    src={item.imgUrl}
                    layout="responsive"
                    objectFit="contain"
                  />
                </Box>
              </StyledCard>
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default DiscountProducts;
