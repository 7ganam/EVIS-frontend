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
  img: "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60s",
  title: "",
  ps: `As a member of the press or media, we invite you to join us for an electrifying event that brings together industry experts, thought leaders, and innovators to explore the future of electric transportation. With a jam-packed agenda of keynote speakers, panel discussions, workshops, and networking sessions, you'll gain unparalleled access to the latest knowledge and advancements in electric mobility. Don't miss the exciting exhibition showcasing the latest EV models and cutting-edge technologies. Be part of the electric revolution and shape the future of sustainable mobility at EVIS! We welcome press and media to preview the latest advancements in EV technology at EVIS and cover this groundbreaking event.`,
};

const Page = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <Container>
        <Box mt={"30px"} mb={"20px"}>
          <SectionTitle>Press Center</SectionTitle>
        </Box>
        <TwoColumnBoxV2 item={item} />
      </Container>
    </EvLayout>
  );
};

export default Page;
