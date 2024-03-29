import React from "react";
import { BigButton } from "src/components/EvComponents/Buttons";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import {
  SectionTitle,
  BlockTitle,
} from "src/components/EvComponents/StyledTypography";

function ButtonsSection() {
  return (
    <>
      <SectionTitle>Buttons Section</SectionTitle>

      <Box sx={{ border: "1px solid black", p: "10px" }}>
        <Box sx={{ mt: "10px" }}>
          {" "}
          <BigButton content={"This is a Big Button"} />
        </Box>
        <Box sx={{ mt: "10px" }}>
          {" "}
          <Button> this is normal button </Button>
        </Box>
        <Box sx={{ mt: "10px" }}>
          {" "}
          <Button variant="contained"> this is contained button button </Button>
        </Box>
        <Box sx={{ mt: "10px" }}>
          <Button variant="outlined"> this is outlined button button </Button>
        </Box>
      </Box>
    </>
  );
}

export default ButtonsSection;
