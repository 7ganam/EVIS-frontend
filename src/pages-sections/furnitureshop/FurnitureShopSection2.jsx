import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import { H1, H3, H6, Paragraph } from "components/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
const boxStyle = {
  height: 230,
  display: "flex",
  borderRadius: 0,
  alignItems: "center",
  boxShadow: "none",
};
const LeftContentBox = styled(Box)(({ theme, imgUrl }) => ({
  ...boxStyle,
  background: theme.palette.primary[50],
  backgroundImage: `url('${imgUrl}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundOrigin: "content-box",
  backgroundPosition: "right bottom",
}));
const RightContentBox = styled(Box)(({ theme, imgUrl }) => ({
  ...boxStyle,
  display: "block",
  background: theme.palette.primary[50],
  backgroundImage: `url('${imgUrl}')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "bottom",
  backgroundOrigin: "content-box",
}));
const RightContent = styled(Box)(() => ({
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

const FurnitureShopSection2 = () => {
  const router = useRouter();
  const { breakpoints } = useTheme();
  const product1 = "/assets/images/Furniture Shop/Furniture (6).png";
  const product2 = "/assets/images/Furniture Shop/Furniture (5).png";
  const product3 = "/assets/images/Furniture Shop/Furniture (1).png";
  const product4 = "/assets/images/Furniture Shop/Furniture (3).png";
  const product5 = "/assets/images/Furniture Shop/Furniture (4).png";
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7} md={7}>
          <Link href="/sale-page-1">
            <a>
              <LeftContentBox
                imgUrl={product1}
                sx={{
                  p: "20px 30px",
                }}
              >
                <RightContent>
                  <H6>Modern Furniture.</H6>
                  <H1 fontSize={35} color="primary.main">
                    Big Sale
                  </H1>
                  <H3 fontSize={23}>UP TO 50% OFF</H3>
                  <Box>
                    <StyledButton onClick={() => router.push("/sale-page-1")}>
                      Shop Now
                    </StyledButton>
                  </Box>
                </RightContent>
                <LeftContent />
              </LeftContentBox>
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} sm={5} md={5}>
          <Link href="/sale-page-1">
            <a>
              <RightContentBox
                imgUrl={product2}
                sx={{
                  pt: "20px",
                }}
              >
                <Box textAlign="center">
                  <H6>Sofa Collection</H6>
                  <H3 fontSize={23} color="primary.main">
                    UP TO 60% OFF
                  </H3>
                  <StyledButton onClick={() => router.push("/sale-page-1")}>
                    Shop Now
                  </StyledButton>
                </Box>
                <Box className="content" />
              </RightContentBox>
            </a>
          </Link>
        </Grid>
      </Grid>

      {/* New Section */}
      <Grid
        container
        spacing={3}
        mt={0}
        sx={{
          [breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column-reverse",
          },
        }}
      >
        <Grid item xs={12} sm={7} md={7}>
          <Link href="/sale-page-1">
            <a>
              <RightContentBox
                imgUrl={product4}
                sx={{
                  height: 484,
                  pt: "20px",
                  px: "80px",
                  [breakpoints.between("xs", "sm")]: {
                    px: "20px",
                  },
                }}
              >
                <Box textAlign="center">
                  <H3>Winter Offer!</H3>
                  <H1 fontSize={50} color="primary.main">
                    50% OFF
                  </H1>
                  <H6>All Kind of Furniture Items</H6>
                  <StyledButton onClick={() => router.push("/sale-page-1")}>
                    Shop Now
                  </StyledButton>
                </Box>
                <Box className="content" />
              </RightContentBox>
            </a>
          </Link>
        </Grid>

        <Grid item xs={12} sm={5} md={5}>
          <Link href="/sale-page-1">
            <a>
              <LeftContentBox
                imgUrl={product5}
                sx={{
                  py: "20px",
                  pl: "20px",
                }}
              >
                <RightContent>
                  <Paragraph>Modern & Comfortable</Paragraph>
                  <H3 fontSize={20} color="primary.main">
                    Chair Collection
                  </H3>
                  <Box>
                    <StyledButton onClick={() => router.push("/sale-page-1")}>
                      Shop Now
                    </StyledButton>
                  </Box>
                </RightContent>
                <LeftContent />
              </LeftContentBox>
            </a>
          </Link>

          <Link href="/sale-page-1">
            <a>
              <LeftContentBox
                imgUrl={product3}
                sx={{
                  mt: 3,
                  py: "20px",
                  pl: "20px",
                }}
              >
                <RightContent>
                  <Paragraph>December New!</Paragraph>
                  <H3 fontSize={20} color="primary.main">
                    Sofa Chair
                  </H3>
                  <Box>
                    <StyledButton onClick={() => router.push("/sale-page-1")}>
                      Shop Now
                    </StyledButton>
                  </Box>
                </RightContent>
                <LeftContent />
              </LeftContentBox>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FurnitureShopSection2;
