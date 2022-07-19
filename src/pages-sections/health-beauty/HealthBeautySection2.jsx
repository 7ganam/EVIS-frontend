import { Box, Button, Card, Grid, styled } from "@mui/material";
import Image from "components/BazarImage";
import { FlexRowCenter } from "components/flex-box";
import { H4, Paragraph } from "components/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
const ContentBox = styled(Card)(() => ({
  height: 220,
  display: "flex",
  alignItems: "center",
  "& .content": {
    width: "50%",
  },
}));
const RightContent = styled(FlexRowCenter)(({ theme }) => ({
  width: "50%",
  height: "100%",
  flexDirection: "column",
  borderRadius: "0px 50% 50% 0px",
  background: theme.palette.primary[200],
  "& p": {
    fontSize: 13,
    lineHeight: 1.4,
  },
}));
const LeftContent = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  "& img": {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    "& img": {
      width: "100%",
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "12px",
  marginTop: "16px",
  padding: "4px 12px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400],
  },
}));

const HealthBeautySection2 = () => {
  const router = useRouter();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <Link href="/shops/123">
          <a>
            <ContentBox>
              <RightContent px="20px">
                <Image
                  width="40px"
                  src="/assets/images/Health Shop/Vector (1).png"
                  alt="shop"
                />
                <Paragraph
                  sx={{
                    mt: 2,
                  }}
                >
                  Our Pharmaciests are
                </Paragraph>
                <Paragraph>here to Help People</Paragraph>
              </RightContent>

              <LeftContent px="10px">
                <Image src="/assets/images/Health Shop/Doctor.png" alt="shop" />
              </LeftContent>
            </ContentBox>
          </a>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Link href="/shops/123">
          <a>
            <ContentBox
              sx={{
                px: "20px",
              }}
            >
              <Box className="content">
                <Paragraph
                  sx={{
                    fontSize: 12,
                  }}
                >
                  BEAUTY PACK
                </Paragraph>
                <H4 fontWeight="700">CREAM BRIGHT</H4>
                <H4 fontWeight="700">UP TO 25%</H4>
                <StyledButton onClick={() => router.push("/shops/123")}>
                  Shop Now
                </StyledButton>
              </Box>

              <Box className="content">
                <Image
                  width="100%"
                  src="/assets/images/Health Shop/Product (4).png"
                  alt="shop"
                />
              </Box>
            </ContentBox>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
};

export default HealthBeautySection2;
