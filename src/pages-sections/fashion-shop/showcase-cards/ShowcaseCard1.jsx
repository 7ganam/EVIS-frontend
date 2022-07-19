import { alpha, Box, styled } from "@mui/material";
import BazarImage from "components/BazarImage";
import NavLink2 from "components/nav-link/NavLink2";
import { H1, Paragraph, Span } from "components/Typography";
import Link from "next/link";
import React from "react"; // styled components

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100%",
  borderRadius: 4,
  boxShadow: theme.shadows[4],
  transition: "all 250ms ease-in-out",
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  "&:hover": {
    boxShadow: theme.shadows[3],
  },
  [theme.breakpoints.between("sm", "md")]: {
    "&": {
      display: "flex",
      alignItems: "center",
      padding: "2rem",
    },
    "& .content": {
      padding: "0",
      width: "50%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&": {
      padding: "2rem",
    },
    "& .content": {
      padding: 0,
      marginTop: 10,
    },
  },
}));
const StyledImage = styled(BazarImage)(({ theme }) => ({
  padding: "2.5rem",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "50%",
    padding: "1rem",
  },
}));

const ShowcaseCard1 = () => {
  return (
    <Link href="/home-3">
      <a>
        <StyledBox>
          <StyledImage
            src="/assets/images/products/shoes-1.png"
            alt="apple-watch-1"
          />

          <Box p="25px" className="content">
            <Paragraph color="grey.600" mb={1}>
              SPECIAL OFFER
            </Paragraph>

            <H1 lineHeight={1.3}>
              <Span color="primary.600" lineHeight={1.3}>
                Comfortable
              </Span>{" "}
              Original <br /> Cotton Sneaker
            </H1>

            <Paragraph color="grey.600" mt={1} mb={2}>
              Handcrafted from genuine Italian leather. One inner compartment
              with black satin lining
            </Paragraph>

            <NavLink2 title="SHOP NOW" />
          </Box>
        </StyledBox>
      </a>
    </Link>
  );
};

export default ShowcaseCard1;
