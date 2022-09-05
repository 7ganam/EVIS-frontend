import React from "react";
import { Box } from "@mui/material";
import { Paragraph } from "src/components/EvComponents/Typography";
import { BlockTitle } from "src/components/EvComponents/StyledTypography";
import { ReadMoreButton } from "src/components/EvComponents/Buttons";

const SectionWithText = (props) => {
  const { title, text, cmd } = props.data;
  return (
    <Box sx={{ pt: 2 }}>
      <BlockTitle>{title}</BlockTitle>
      <Paragraph color="grey.600">{text}</Paragraph>
      <ReadMoreButton cmd={cmd} />
    </Box>
  );
};

export default SectionWithText;
