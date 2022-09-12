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
import QuadImgSection from "src/components/EvSections/QuadImgSection";

const CoreSection = () => {
  const theme = useTheme();

  return (
    <Box>
      <SectionTitle>{"Core Sectors"}</SectionTitle>
      <QuadImgSection />
    </Box>
  );
};

export default CoreSection;
