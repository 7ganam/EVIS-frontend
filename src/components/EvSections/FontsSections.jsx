import React from "react";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
} from "src/components/EvComponents/Typography";
import { Box } from "@mui/material";

import {
  SectionTitle,
  BlockTitle,
} from "src/components/EvComponents/StyledTypography";

function FontsSections() {
  return (
    <>
      <SectionTitle>Fonts Section</SectionTitle>

      <Box sx={{ border: "1px solid black", p: "10px" }}>
        <SectionTitle>This is a SectionTitle</SectionTitle>
        <BlockTitle>This is a BlockTitle</BlockTitle>
        <H1>This is an H1</H1>
        <H2>This is an H2</H2>
        <H3>This is an H3</H3>
        <H4>This is an H4</H4>
        <H5>This is an H5</H5>
        <H6>This is an H6</H6>
        <Paragraph>This is a paragraph</Paragraph>
      </Box>
    </>
  );
}

export default FontsSections;
