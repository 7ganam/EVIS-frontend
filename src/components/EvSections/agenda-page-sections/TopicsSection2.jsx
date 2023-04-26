import React from "react";
import ShadedTextContainer from "src/components/EvComponents/ShadedTextContainer";
import {
  SectionTitle,
  SectionTitle2,
} from "src/components/EvComponents/StyledTypography";
import { Box, Grid, Card } from "@mui/material";
import { Container } from "@mui/material";
import { Paragraph, H2 } from "src/components/EvComponents/Typography";
import { useTheme } from "@emotion/react";
import { BigButton } from "src/components/EvComponents/Buttons";
import { styled } from "@mui/material/styles";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import Link from "next/link";

const HoverCard = styled(({ hoverEffect, children, ...rest }) => (
  <Card {...rest}>{children}</Card>
))(({ theme, hoverEffect }) => ({
  "&:hover": {
    boxShadow: hoverEffect ? theme.shadows[2] : "",
    color: theme.palette.primary.main,
  },
}));
// const topics = [
//   "Policies to accelerate the transition to zero-emission vehicles (ZEV).",
//   "Technology development and challenges in the vehicle powertrain and alternative fuels. ",
//   "EV charging infrastructure technology developments and challenges. ",
//   "Investment opportunities in the EV market in the MENA region and globally. ",
//   "Electrification of medium and heavy-duty vehicles. ",
//   "Electrification of the shipping and aviation sectors. ",
//   "Supply chain challenges in the EV sector from the well to the wheel.",
// ];

const TopicsSection = (props) => {
  const theme = useTheme();
  const topics = props.topics;

  return (
    <Box
      sx={{
        mb: 6,
        mt: 1,
      }}
    >
      <Grid>
        <Grid item></Grid>
      </Grid>
      <Box
        bgcolor="grey.300"
        sx={{
          pb: 6,
          width: "auto",
        }}
      >
        <Container sx={{ md: 6, pt: 2, mt: "100px" }}>
          <Box sx={{ mb: "40px", mt: "20px" }}>
            <SectionTitle2>{"EVIS is the ideal platform for: "}</SectionTitle2>
          </Box>
          <Grid container spacing={"20px"} justifyContent="center">
            {topics.map((topic, index) => (
              <Grid key={index} item xs={12} md={6} spacing={"5px"}>
                <HoverCard
                  hoverEffect
                  sx={{
                    width: "100%",
                    p: "20px",
                    height: "100%",
                    // textAlign: "center",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  <FormatAlignJustifyIcon
                    sx={{ mr: "15px" }}
                  ></FormatAlignJustifyIcon>
                  {topic}
                </HoverCard>
              </Grid>
            ))}
          </Grid>

          <Container>
            <Box elevation={2} sx={{ mt: "40px", p: "30px" }}>
              <Box
                sx={{
                  maxWidth: "700px",
                  margin: "auto",
                }}
              >
                <H2>
                  <Box
                    sx={{
                      // color: theme.palette.primary.main,
                      textAlign: "center",
                    }}
                  >{`WAYS TO MAKE AN IMPACT`}</Box>
                </H2>
              </Box>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center ",
                      mt: "40px",
                    }}
                  >
                    <Link href="https://registration.infosalons.ae/EVIS23AD/SPON/Registration/Demographics">
                      <a>
                        <BigButton
                          sx={{ width: "300px" }}
                          content={"Sponsor"}
                        />
                      </a>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center ",
                      mt: "40px",
                    }}
                  >
                    <Link href="https://registration.infosalons.ae/EVIS23AD/EXH/Registration/Demographics">
                      <a>
                        <BigButton
                          sx={{ width: "100%" }}
                          content={"Digital opportunities"}
                        />
                      </a>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center ",
                      mt: "40px",
                    }}
                  >
                    <Link href="https://registration.infosalons.ae/EVIS23AD/EXH/Registration/Demographics">
                      <a>
                        <BigButton
                          sx={{ width: "300px" }}
                          content={"Exhibit"}
                        />
                      </a>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default TopicsSection;
