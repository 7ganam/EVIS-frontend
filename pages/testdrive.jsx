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

const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));

const item = {
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1682529281/test_drive_d7325c66d2.jpg?updated_at=2023-04-26T17:14:42.570Z",
  title: "",
  ps: `Discover the Future of Mobility at EVIS! As a part of our unwavering dedication to showcasing the latest advancements in sustainable transportation, we are pleased to offer exclusive test drive opportunities for electric cars. Immerse yourself in the world of electric mobility as you experience the unparalleled performance, efficiency, and eco-friendly features of these cutting-edge vehicles in a hands-on, no-pressure environment. It's a unique opportunity to explore the excitement of driving the future of transportation firsthand. Join us at EVIS 2023 and elevate your understanding of electric mobility with an unforgettable test drive experience.`,
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
      </Container>
    </EvLayout>
  );
};

export default Page;
