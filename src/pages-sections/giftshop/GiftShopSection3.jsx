import { Box, Button, Card, Grid, styled, useTheme } from "@mui/material";
import { H3, H6, Paragraph } from "components/Typography";
import Link from "next/link";
import React from "react";
const boxStyle = {
  height: 230,
  display: "flex",
  alignItems: "center",
  boxShadow: "none",
  borderRadius: 0,
};
const LeftContentBox = styled(Card)(({ theme }) => ({
  ...boxStyle,
  background: theme.palette.primary[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer Card.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "right bottom",
  "& .content": {
    width: "50%",
  },
}));
const RightContentBox = styled(Card)(({ theme }) => ({
  ...boxStyle,
  background: theme.palette.primary[100],
  backgroundImage: "url('/assets/images/Gift Shop/Offer 1.png')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "bottom",
  display: "block",
}));
const RightContent = styled(Box)(() => ({
  paddingLeft: 60,
  "& p": {
    fontSize: 13,
    lineHeight: 1.4,
  },
}));
const LeftContent = styled(Box)(() => ({}));
const StyledButton = styled(Button)(() => ({
  fontWeight: 600,
  fontSize: "12px",
  marginTop: "5px",
  padding: "4px 12px",
  textDecoration: "underline",
}));

const GiftShopSection3 = () => {
  const { breakpoints } = useTheme();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7} md={7}>
        <Link href="/sale-page-1">
          <a>
            <LeftContentBox>
              <RightContent px="20px">
                <H6>Holiday’s Offer!</H6>
                <H3>Sale 50% Off</H3>
                <Paragraph
                  sx={{
                    mt: 1,
                  }}
                >
                  Use Code : Holi50
                </Paragraph>

                <Box>
                  <StyledButton>Shop Now</StyledButton>
                </Box>
              </RightContent>
              <LeftContent />
            </LeftContentBox>
          </a>
        </Link>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={5}
        sx={{
          pl: "24px !important",
          [breakpoints.down("sm")]: {
            pl: "0 !important",
          },
        }}
      >
        <Link href="/sale-page-1">
          <a>
            <RightContentBox
              sx={{
                p: "20px",
              }}
            >
              <Box textAlign="center">
                <H6>Shop Online Gift Under</H6>
                <H3>$20.00</H3>
                <StyledButton>Shop Now</StyledButton>
              </Box>
              <Box className="content" />
            </RightContentBox>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
};

export default GiftShopSection3;
