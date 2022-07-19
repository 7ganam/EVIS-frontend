import { Button, Card, Grid, styled } from "@mui/material";
import Image from "components/BazarImage";
import { H1, Paragraph } from "components/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const Container = styled(Card)(({ theme }) => ({
  padding: "50px",
  background: "#efefef",
  transition: "all 0.3s",
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    padding: "30px 20px",
    "& .content": {
      marginBottom: 30,
      textAlign: "center",
      "& h1": {
        fontSize: 25,
      },
    },
  },
}));

const DiscountSection = () => {
  const router = useRouter();
  return (
    <Container>
      <Link href="/sale-page-1">
        <a>
          <Grid container>
            <Grid className="content" item sm={7} xs={12}>
              <Paragraph>Till 10 Dec, 2021</Paragraph>
              <H1>25% Special Off Today</H1>
              <H1>Only for Vegetables</H1>
              <Button
                color="primary"
                variant="contained"
                sx={{
                  mt: 5,
                  fontSize: "12px",
                }}
                onClick={() => router.push("/sale-page-1")}
              >
                Shop Now
              </Button>
            </Grid>

            <Grid item sm={5}>
              <Image
                width="100%"
                src="/assets/images/Groceries Shop/vagitable.png"
                alt="discount"
              />
            </Grid>
          </Grid>
        </a>
      </Link>
    </Container>
  );
};

export default DiscountSection;
