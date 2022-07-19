import { Box, Button, Container } from "@mui/material";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { H1, Paragraph, Span } from "components/Typography";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import Typewriter from "typewriter-effect";
import Header from "./Header";

const Section1 = () => {
  return (
    <Box
      sx={{
        background: "url(/assets/images/landing/landing-bg-1.svg) center/cover",
      }}
    >
      <Header />

      <Container
        id="section-1"
        sx={{
          mt: 8,
          position: "relative",
        }}
      >
        <Box maxWidth="830px" mx="auto" mb={8.5} textAlign="center">
          <H1 color="secondary.main" fontSize="40px" mb={2} fontWeight="900">
            <Box color="primary.main" fontSize="18px">
              Next.js Ecommerce Template
            </Box>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: [
                  "Multi vendor",
                  "Grocery",
                  "Furniture",
                  "Gift",
                  "Fashion",
                  "Health and Beauty",
                  "Gadget",
                ],
              }}
            />
          </H1>

          <Paragraph
            color="grey.700"
            fontSize={16}
            maxWidth="540px"
            mx="auto"
            mb={4}
          >
            Powerful Multi-Purpose React/Next.js Template with Multiple Niches,
            Multi-Vendor & Single-Vendor Layouts and 150+ UI Features. Trusted
            by <Span color="primary.main">450+</Span> Users.
          </Paragraph>

          <FlexBox justifyContent="center" m={-1}>
            <Link
              href="https://material-ui.com/store/items/bazar-pro-react-ecommerce-template/"
              passHref={true}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  m: "0.5rem",
                }}
              >
                Purchase Now
              </Button>
            </Link>

            <Scroll to="get" duration={400} offset={-72 - 16} smooth={true}>
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  m: "0.5rem",
                }}
              >
                View Demos
              </Button>
            </Scroll>
          </FlexBox>

          <Box mt={4}>
            <a
              href="https://forms.gle/f8Yz9dMSvkdkbMkV6"
              target="_blank"
              rel="noreferrer"
            >
              <Paragraph
                color="grey.600"
                sx={{
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                I need a Server & Database
              </Paragraph>
            </a>
          </Box>
        </Box>

        <LazyImage
          width={5417}
          height={1179}
          layout="responsive"
          src="/assets/images/landing/page-group-2.png"
        />
      </Container>
    </Box>
  );
};

export default Section1;
