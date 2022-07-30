import React from "react";
import {  Box, Container } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import { Paragraph , H2 } from "components/EvComponents/Typography";

const ShadedTextContainer = (props) => {
    const { title , text } = props.data;
  return (
    <Box
      bgcolor="grey.300"
      sx={{
        pb: 6,
        width: "auto",
      }}
    >
      <Container sx={{ md: 6, pt: 2 }}>
        <SectionTitle> {title} </SectionTitle>
        <Paragraph>
            {text}
        </Paragraph>
      </Container>
    </Box>
  );
};

export default ShadedTextContainer;
