import React, { useState } from "react";
import { Container, Box, useTheme } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

import PeopleGrid from "@/components/EvComponents/PeopleGrid";
const AdvisoryBoardSection = ({ advisoryBoardData }) => {
  const theme = useTheme();

  return (
    <Box id={"advisory-board"} sx={{ scrollMarginTop: "250px" }}>
      <Container
        maxWidth="false"
        sx={{
          mt: "80px",
          pt: "10px",
          backgroundColor: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        <Box sx={{ mt: "30px" }}>
          <SectionTitle>Advisory Board</SectionTitle>
        </Box>
        <Box pb="80px">
          <PeopleGrid
            data={advisoryBoardData.map((member) => {
              return { ...member, link: `advisory-board/${member.name}` };
            })}
          ></PeopleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default AdvisoryBoardSection;
