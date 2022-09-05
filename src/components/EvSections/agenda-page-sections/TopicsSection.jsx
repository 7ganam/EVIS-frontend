import React from "react";
import ShadedTextContainer from "src/components/EvComponents/ShadedTextContainer";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { Box, Grid, Card } from "@mui/material";
import { Container } from "@mui/material";
import { Paragraph, H2 } from "src/components/EvComponents/Typography";
import { useTheme } from "@emotion/react";
import { BigButton } from "src/components/EvComponents/Buttons";

const data = {
  title: "EVIS 2023 summit will cover many topics such as: ",
  text: "The motto for the Summit is “Smart Vehicle Mobility” with four themes (concentrations) that are in perfect synergy with Abu Dhabi, which is witnessing an overwhelming energy greening and sustainability awareness trends. Abu Dhabi has proven to be one of the fastest growing smart cities worldwide adopting the latest green technologies after the successful establishment of Masdar City, the first of its kind worldwide.",
};

const topics = [
  "Policies to accelerate the transition to zero-emission vehicles (ZEV).",
  "Technology development and challenges in the vehicle powertrain and alternative fuels. ",
  "EV charging infrastructure technology developments and challenges. ",
  "Investment opportunities in the EV market in the MENA region and globally. ",
  "Electrification of medium and heavy-duty vehicles. ",
  "Electrification of the shipping and aviation sectors. ",
  "Supply chain challenges in the EV sector from the well to the wheel.",
];

const TopicsSection = () => {
  const theme = useTheme();

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
          <SectionTitle>
            {"EVIS 2023 summit will cover many topics such as: "}{" "}
          </SectionTitle>
          <Grid container spacing={"40px"} justifyContent="center">
            {topics.map((topic, index) => (
              <Grid key={index} item xs={12} md={4} spacing={"10px"}>
                <Card
                  sx={{
                    width: "100%",
                    p: "20px",
                    fontSize: "18px",
                    height: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {topic}
                </Card>
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
                {" "}
                <BigButton text={"Register now!"} />
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default TopicsSection;
