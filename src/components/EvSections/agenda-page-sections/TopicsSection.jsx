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
        <Container sx={{ md: 6, pt: 2 }}>
          <Box sx={{ mb: "40px", mt: "20px" }}>
            <SectionTitle2>
              {"EVIS 2023 summit will cover many topics such as: "}
            </SectionTitle2>
          </Box>
          <Grid container spacing={"20px"} justifyContent="center">
            {topics.map((topic, index) => (
              <Grid key={index} item xs={12} md={12} spacing={"5px"}>
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
                  >{`Join us for 2 days packed with high-quality content from the top EV
              leaders from across the globe and the MENA region. `}</Box>
                </H2>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center ",
                  mt: "40px",
                }}
              >
                <Link href="https://registration.infosalons.ae/EVIS23AD/Visitor/Registration/Demographics">
                  <a>
                    <BigButton content={"Register now!"} />
                  </a>
                </Link>
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default TopicsSection;
