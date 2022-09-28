import { Box } from "@mui/material";
import React from "react";
import { H4 } from "../Typography";
const StyledImage = (props) => {
  return (
    <img
      src={props.Src}
      width="170"
      style={{ margin: "10px" }}
      alt={props.Src}
    />
  );
};
function LogoWithTitle({ text, source }) {
  return (
    <Box sx={{ height: "200px" }}>
      <Box>
        <H4 sx={{ textTransform: "uppercase" }}>{text}</H4>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          height: "100%",
        }}
      >
        <StyledImage Src={source} />
      </Box>
    </Box>
  );
}

export default LogoWithTitle;
