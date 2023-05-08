import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import WhatIsNew2 from "src/components/EvSections/why-exhibit-sections/WhatIsNew2";
import Image from "src/components/BazarImage";
import ExpectMeet from "src/components/EvSections/why-exhibit-sections/ExpectMeet";
import { BigButton } from "@/components/EvComponents/Buttons";

const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));

const item = {
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1682529281/test_drive_d7325c66d2.jpg?updated_at=2023-04-26T17:14:42.570Z",
  title: "",
  ps: `At EVIS, we're committed to providing our registered visitors with an immersive experience of electric mobility. As part of this commitment, we're thrilled to offer exclusive test drive opportunities for electric cars on a first-come, first-serve basis.

To take advantage of this exciting opportunity, simply visit our registration area and sign up for a test drive and immerse yourself in the world of electric mobility as you experience the unparalleled performance, efficiency, and eco-friendly features of these cutting-edge vehicles in a hands-on, no-pressure environment. Whether you're looking to test drive the latest model from your favorite manufacturer or trying an electric vehicle for the first time, our exclusive test drive opportunities are not to be missed.

Don't miss your chance to elevate your understanding of electric mobility with an unforgettable test drive experience. Register now and join us on this exciting journey. We can't wait to share it with you!`,
};

const Page = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <Container>
        <Box mt={"30px"} mb={"20px"}>
          <SectionTitle>EV Test Drive</SectionTitle>
        </Box>
        <TwoColumnBoxV2 item={item} />
        <Box
          sx={{
            display: "flex",
            mt: "50px",
            mb: "80px",
            justifyContent: "center",
          }}
        >
          <Link href="https://registration.infosalons.ae/EVIS23AD/Visitor/Registration/Demographics">
            <a>
              <BigButton
                content={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <span>Register to Visit</span>
                  </Box>
                }
              />
            </a>
          </Link>
        </Box>
      </Container>
    </EvLayout>
  );
};

export default Page;
