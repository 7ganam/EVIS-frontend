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
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672592657/speaker_814395104d_c75580257e.jpg",
  title: "",
  ps: `At EVIS, connect with industry experts, thought leaders, and innovators to explore the future of electric transportation. Our jam-packed agenda includes keynote speakers, panel discussions, workshops, and networking sessions, offering unparalleled access to the latest knowledge and advancements in electric mobility. Don't miss the exciting exhibition showcasing the latest EV models and cutting-edge technologies. Be part of the electric revolution and shape the future of sustainable mobility at EVIS!.`,
};

const item2 = {
  img: "https://images.unsplash.com/flagged/photo-1550946107-8842ae9426db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGJ1c2luZXNzJTIwbWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  title: "",
  ps: `Connect with like-minded individuals, gain valuable industry knowledge, and stay ahead of the curve in the rapidly changing landscape of electric transportation. Whether you're an EV enthusiast, a business professional, or simply curious about the latest advancements in EV technology, EVIS is the place to be. Don't miss this unique opportunity to be part of the ultimate electric vehicle experience!`,
};

const WhatIsNewData = [
  {
    img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1682529320/tech_park_8f2cd50c27.jpg?updated_at=2023-04-26T17:15:21.438Z",
    link: "/techpark",
    title: "Tech Park",
  },
  {
    img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1682529281/test_drive_d7325c66d2.jpg?updated_at=2023-04-26T17:14:42.570Z",
    link: "/testdrive",
    title: "Test Drive",
  },
];

const peopleList = [
  "Vehicle Manufacturers and Distributors",
  "Integrated Energy Companies",
  "Banks, Finance and Investment Firms",
  "R & D Companies",
  "Engineers, Architects, and Designers",
  "Consultants",
  "Environmental Agencies",
  "Government Officials",
  "Law Firms and Academia",
  "Municipalities",
  "CEO/ President/ Chairman",
  "Owner/ Partner/ Proprietor",
  "Public Transport Operators",
  "Technical/ Business Specialists",
  "Technology Service Provider",
];

const Page = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <PageHeader image={headers?.visit?.image?.data?.attributes?.url}>
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.visit?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.visit?.text}
            </H1>
          )}
          {headers?.visit?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginBottom: "20px",
              }}
            >
              {headers?.visit?.sub_text}
            </H6>
          )}
          {
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box mx={"0px"} p={1.25}>
                <Link
                  href={
                    "https://registration.infosalons.ae/EVIS23AD/Visitor/Registration/Demographics"
                  }
                >
                  <a>
                    <StyledButton
                      minWidth={"250px"}
                      variant="contained"
                      color="primary"
                      sx={{
                        width: "250px",
                        px: "30px",
                        py: "15px",
                        fontWeight: "700",
                        border: "1px white solid",
                      }}
                    >
                      {"Register To Visit"}
                    </StyledButton>
                  </a>
                </Link>
              </Box>
            </Box>
          }
        </Box>
      </PageHeader>

      <Container>
        <Box>
          <Box mt={"30px"} mb={"20px"}>
            <SectionTitle>
              Why Visit EVIS - The Ultimate Electric Vehicle Experience!
            </SectionTitle>
          </Box>
          <TwoColumnBoxV2 item={item} />
          <Box my={"30px"}>
            <TwoColumnBoxV2 item={item2} imgPosition={"left"} />
          </Box>
        </Box>
        <WhatIsNew2 data={WhatIsNewData} />

        <Box mt={"30px"} mb={"20px"}>
          <SectionTitle>What to Expect</SectionTitle>
        </Box>
        <Box sx={{ height: "auto", width: "100%", mb: "30px" }}>
          <Image
            // height={590}
            width={"100%"}
            mb={0}
            src={
              "https://res.cloudinary.com/drf11lmmn/image/upload/v1682602149/t_d21a98f619.png?updated_at=2023-04-27T13:29:10.585Z"
            }
            alt="logo"
            sx={{
              //   objectFit: "cover",
              //   aspectRatio: " 16 / 12",
              borderRadius: "10px",
              //shadow
              boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.2)",
            }}
          />
        </Box>
        <ExpectMeet data={peopleList} />
      </Container>
    </EvLayout>
  );
};

export default Page;
