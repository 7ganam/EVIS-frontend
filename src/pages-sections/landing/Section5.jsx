import { Box, Button, Container, styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import { FlexBox } from "components/flex-box";
import { H2, H3, Paragraph } from "components/Typography";
import Link from "next/link";
import React from "react";
const SectionWrapper = styled("div")(({ theme }) => ({
  background: `${theme.palette.grey[100]}`,
  paddingTop: "6rem",
  paddingBottom: "6rem",
}));

const Section5 = () => {
  return (
    <SectionWrapper id="price">
      <Container
        id="section-3"
        sx={{
          position: "relative",
        }}
      >
        <H2
          color="secondary.main"
          maxWidth="830px"
          mx="auto"
          mb={9}
          textAlign="center"
          fontSize="40px"
          fontWeight="900"
        >
          Build your <br /> you Ecommerce Store?
        </H2>

        <FlexBox flexWrap="wrap" justifyContent="center" m={-2.65}>
          <BazarCard
            sx={{
              minWidth: "270px",
              textAlign: "center",
              pt: "3rem",
              pb: "2rem",
              px: "1rem",
              m: "1.325rem",
            }}
            elevation={2}
            hoverEffect
          >
            <H3>Regular</H3>
            <Box position="relative" display="inline-block" mb={3}>
              <H3 fontSize="72px" color="secondary.main">
                28
              </H3>
              <Box
                position="absolute"
                top="1rem"
                left="-1rem"
                fontWeight="600"
                fontSize="16px"
              >
                $
              </Box>
            </Box>

            <Paragraph maxWidth="216px" mx="auto" mb={16.25}>
              Can be used in a single end product which end users{" "}
              <b>are not charged</b> for.
            </Paragraph>
            <Link
              href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
              passHref={true}
            >
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  mx: "auto",
                  display: "block",
                }}
              >
                Purchase Now
              </Button>
            </Link>
          </BazarCard>

          <BazarCard
            sx={{
              color: "white",
              minWidth: "270px",
              textAlign: "center",
              pt: "3rem",
              pb: "2rem",
              px: "1rem",
              m: "1.325rem",
              bgcolor: "primary.main",
            }}
            elevation={2}
            hoverEffect
          >
            <H3>Extended License</H3>
            <Box position="relative" display="inline-block" mb={3}>
              <H3 fontSize="72px">700</H3>
              <Box
                position="absolute"
                top="1rem"
                left="-1rem"
                fontWeight="600"
                fontSize="16px"
              >
                $
              </Box>
            </Box>

            <Paragraph maxWidth="216px" mx="auto" mb={16.25}>
              Can be used in a single end product which end users{" "}
              <b>are not charged</b> for.
            </Paragraph>

            <Button
              variant="outlined"
              color="inherit"
              sx={{
                mx: "auto",
                display: "block",
              }}
            >
              Purchase Now
            </Button>
          </BazarCard>
        </FlexBox>
      </Container>
    </SectionWrapper>
  );
};

export default Section5;
