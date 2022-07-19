import { Container, Grid } from "@mui/material";
import CreditCardVerifiedIcon from "components/icons/CreditCardVerified";
import FeedbackThumbsUpIcon from "components/icons/FeedbackThumbsUp";
import Navbar from "components/navbar/Navbar";
import Spacer from "components/Spacer";
import React, { Fragment } from "react";
import ShowcaseCard1 from "./showcase-cards/ShowcaseCard1";
import ShowcaseCard2 from "./showcase-cards/ShowcaseCard2";
import ShowcaseCard3 from "./showcase-cards/ShowcaseCard3";
import ShowcaseCard4 from "./showcase-cards/ShowcaseCard4";
import ShowcaseCard5 from "./showcase-cards/ShowcaseCard5";

const Section1 = () => {
  return (
    <Fragment>
      <Navbar />
      <Container
        sx={{
          pt: "3rem",
          mb: "4rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={4} md={5} xs={12}>
            <ShowcaseCard1 />
          </Grid>

          <Grid item lg={8} md={7} xs={12}>
            <ShowcaseCard2 />
            <Spacer mt="1.5rem" />
            <ShowcaseCard3 />
          </Grid>
        </Grid>

        <Spacer mb="1.5rem" />

        <Grid container spacing={3}>
          <Grid item md={3} sm={6} xs={12}>
            <ShowcaseCard4
              title="Secure Payment"
              Icon={CreditCardVerifiedIcon}
              body="100% secured payment & privacy"
            />
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <ShowcaseCard4
              title="Great Feedback"
              Icon={FeedbackThumbsUpIcon}
              body="More than 97% positive & happy customers"
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <ShowcaseCard5 />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Section1;
