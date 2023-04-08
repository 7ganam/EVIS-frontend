import { Box, Container } from "@mui/material";
import EvLayout from "src/components/layouts/EvLayout";
import MarketGateway from "@/components/EvSections/about-page-sections/MarketGateway";

import { H1, H6 } from "src/components/Typography";
import PageHeader from "src/components/EvComponents/PageHeader";
import { styled, Button } from "@mui/material";
import Link from "next/link";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
// ======================================================
// ======================================================

const WhyExhibitComponent = (props) => {
  const headers = props?.headers ?? [];

  return (
    <EvLayout showNavbar={true}>
      <PageHeader image={headers?.EXHIBIT_SPONSOR?.image?.data?.attributes?.url}>
        <Box sx={{ maxWidth: "830px", textAlign: "center" }}>
          {headers?.EXHIBIT_SPONSOR?.text && (
            <H1
              sx={{
                fontSize: { xs: "40px", md: "55px" },
                marginBottom: "20px",
              }}
            >
              {headers?.EXHIBIT_SPONSOR?.text}
            </H1>
          )}
          {headers?.EXHIBIT_SPONSOR?.sub_text && (
            <H6
              sx={{
                fontSize: { xs: "20px", md: "25px" },
                marginBottom: "20px",
              }}
            >
              {headers?.EXHIBIT_SPONSOR?.sub_text}
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
                <Link href={"/download/brochure"}>
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
                      {"Download the Event Brochure"}
                    </StyledButton>
                  </a>
                </Link>
              </Box>
            </Box>
          }
        </Box>
      </PageHeader>
      <Container
        sx={{
          mb: 6,
        }}
      >
        <MarketGateway></MarketGateway>
      </Container>
    </EvLayout>
  );
};

export default WhyExhibitComponent;
