import { alpha, Grid, styled } from "@mui/material";
import BazarImage from "components/BazarImage";
import { H1, Paragraph, Span } from "components/Typography";
import Link from "next/link";
import React from "react"; // styled component

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "100%",
  borderRadius: 4,
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
  [theme.breakpoints.down("sm")]: {
    "& .grid-1": {
      order: 2,
    },
    "& .grid-2": {
      order: 1,
    },
  },
}));

const ShowcaseCard5 = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledGrid container>
          <Grid item sm={7} xs={12} p="2rem" className="grid-1">
            <Paragraph color="grey.600" mb={1}>
              SPECIAL OFFER
            </Paragraph>

            <H1 lineHeight={1.3}>
              <Span color="primary.600" lineHeight={1.3}>
                $100 Off
              </Span>{" "}
              Over $1200
            </H1>

            <Paragraph color="grey.600" mt={1}>
              Handcrafted from genuine Italian. One inner compartment
            </Paragraph>
          </Grid>

          <Grid item sm={5} xs={12} className="grid-2">
            <BazarImage
              alt="apple-watch-1"
              sx={{
                mx: "auto",
                maxHeight: "200px",
              }}
              src="/assets/images/products/paper-bag.png"
            />
          </Grid>
        </StyledGrid>
      </a>
    </Link>
  );
};

export default ShowcaseCard5;
