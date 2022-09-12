// import { Box } from "@mui/system";
import React from "react";
// import { Grid } from "@mui/material";
import SponsorImage from "src/components/EvComponents/SponsorImage";
import {
  SectionTitle,
  BlockTitle,
} from "src/components/EvComponents/StyledTypography";
import TwoColumnBox from "src/components/EvComponents/TwoColumnBox";
import { BigButton } from "src/components/EvComponents/Buttons";
// import { Button } from "@mui/material";
import { H3, H5, H6, Paragraph } from "src/components/EvComponents/Typography";
import Image from "src/components/BazarImage";
import RoundedImage from "src/components/EvComponents/RoundedImage";
// import { useTheme } from "@mui/material";
import {
  Box,
  Button,
  Grid,
  styled,
  useTheme,
  Typography,
  Container,
} from "@mui/material";

const data = {
  header1: "For In- Person Conference",
  header2: "Benefits Include",
  body: [
    { text: "Access to 3 days exhibition" },
    { text: "Access to the opening ceremony" },
    { text: "Access to delegate dining area on all days" },
    { text: "Delegate certificate of attendance" },
    { text: "Access to copy of the speaker's presentation after the show" },
  ],
};

const Section2 = () => {
  const theme = useTheme();

  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box margin="40px 0 -25px">
            <BlockTitle>{data.header1}</BlockTitle>
          </Box>
          <SectionTitle>{data.header2}</SectionTitle>
          <Box sx={{ margin: "10px 0", textAlign: "center" }}>
            {data.body.map(({ text }) => {
              return (
                <Box key={text} sx={{ margin: "7px 0" }}>
                  <Paragraph>{text}</Paragraph>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: theme.palette.text.disabled,
          display: "flex",
          justifyContent: "center",
          // color: theme.palette.paste.contrastText,
          padding: "10px",
          margin: "15px 0 2px",
        }}
      >
        <H5>
          If you would like to register and pay via bank transfer or cheque,
          please contact Vilma Ducay at vilma.ducay@nirvanatls.com or +971 50
          686 3740.
        </H5>
      </Box>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            py: 3,
          }}
        >
          <Button variant="contained">BOOK YOUR DELEGATE PASS</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Section2;
