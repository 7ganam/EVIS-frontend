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
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1682529320/tech_park_8f2cd50c27.jpg?updated_at=2023-04-26T17:15:21.438Z",
  title: "",
  ps: `EVIS 2023 promises an unparalleled showcase of innovation at the Tech Park. With a spotlight on selected local and regional universities, this prominent highlight offers a unique platform for the display of cutting-edge electric/solar vehicles, as well as e-mobility projects and initiatives to a global audience. Additionally, the Tech Park will proudly feature the innovative startup ventures by Masdar City, further enriching the experience and providing a captivating glimpse into the future of sustainable transportation. Don't miss this exciting opportunity to witness groundbreaking advancements in the world of e-mobility at EVIS 2023!`,
};

const Page = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <Container>
        <Box mt={"30px"} mb={"20px"}>
          <SectionTitle>Tech Park</SectionTitle>
        </Box>
        <TwoColumnBoxV2 item={item} />
      </Container>
    </EvLayout>
  );
};

export default Page;
