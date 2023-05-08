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
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1682529320/tech_park_8f2cd50c27.jpg?updated_at=2023-04-26T17:15:21.438Z",
  title: "",
  ps: `The Tech Park is a new feature at EVIS that showcases cutting-edge innovations in solar-powered and electric vehicles, and it's completely free to attend for all registered visitors! Designed for universities, technology incubators, and startups interested in exploring the latest trends in e-mobility, the Tech Park is open to all. Attendees can participate in engaging academic workshops that cover a wide range of topics, providing valuable new knowledge and insights into EV design, components, charging infrastructure, and battery technology. Whether you're a student, a researcher, an industry professional, or a curious member of the public, everyone is welcome to join us at the Tech Park and learn more about the exciting world of e-mobility.`,
};

const item2 = {
  img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  title: "",
  ps: `The Student Innovator Award is an exciting addition to the Tech Park @ EVIS, where it celebrates outstanding EV and e-mobility projects submitted by students from diverse educational institutions. The award provides a unique platform for students to showcase their skills in EV design, components, charging infrastructure, battery technology, and more. Winners and finalists receive prizes, certificates, and media coverage, providing valuable recognition and networking opportunities. Submit your project now and join the next generation of e-mobility innovators!`,
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

        <Box sx={{ display: "flex", mt: "20px", justifyContent: "center" }}>
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

        <Box mt={"30px"} mb={"20px"}>
          <SectionTitle>Student Innovator Award</SectionTitle>
        </Box>
        <TwoColumnBoxV2 item={item2} imgPosition={"left"} />

        <Box
          sx={{
            display: "flex",
            mt: "20px",
            mb: "80px",
            justifyContent: "center",
          }}
        >
          <Link href="https://techpark-evis.netlify.app/apply">
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
                    <span>Submit Your Entry</span>
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
