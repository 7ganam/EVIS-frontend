import React from "react";
import { Container, Box, useTheme } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import PeopleGrid from "@/components/EvComponents/PeopleGrid";
const SpeakersSection = (props) => {
  const theme = useTheme();
  const data = props.data;
  const title = props.title;
  return (
    <Box id={"advisory-board"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "40px", mb: "20px" }}>
        <SectionTitle sx={{ mt: "40px", mb: "20px" }}> {title} </SectionTitle>
      </Box>
      <Box></Box>
      <Container
        maxWidth="false"
        sx={{
          backgroundColor: theme.palette.primary.main,
          margin: "0",
          textAlign: "center",
          pb: "80px",
          mt: "40px",
        }}
      >
        <PeopleGrid data={data}></PeopleGrid>
      </Container>
    </Box>
  );
};

export default SpeakersSection;
