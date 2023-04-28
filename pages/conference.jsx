import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));

const item = {
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672592657/speaker_814395104d_c75580257e.jpg",
  title: "",
  ps: `Join the EVIS Main Conference for an enriching experience, featuring renowned industry luminaries as speakers at a cutting-edge venue. Each day starts with a distinguished keynote address, followed by dynamic panel discussions led by top industry leaders. Discover invaluable insights on market disruptors from the past year and gain foresight into future trends shaping the dynamic EV industry. Expand your understanding and stay ahead in the evolving world of electric vehicles at the EVIS Conference..`,
};

const Page = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <PageHeader image={headers?.AGENDA?.image?.data?.attributes?.url}>
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.AGENDA?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.AGENDA?.text}
            </H1>
          )}
          {headers?.AGENDA?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginBottom: "20px",
              }}
            >
              {headers?.AGENDA?.sub_text}
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
                    "https://registration.infosalons.ae/EVIS23AD/DEL/Registration/Demographics"
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
                      {"Register To Attend"}
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
              Elevate Your Industry Knowledge to New Heights at the EVIS Main
              Conference!
            </SectionTitle>
          </Box>
          <TwoColumnBoxV2 item={item} />
          <Box mt={"20px"}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box mx={"0px"} p={1.25} mb={"100px"} mt={"30px"}>
                <Link href={"/download/conference-agenda"}>
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
                      {"Download Agenda"}
                    </StyledButton>
                  </a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </EvLayout>
  );
};

export default Page;
