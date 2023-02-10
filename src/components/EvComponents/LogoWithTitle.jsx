import { Box } from "@mui/material";
import React from "react";
import { H4 } from "../Typography";
import { motion } from "framer-motion";

const StyledImage = (props) => {
  return (
    <img
      src={props.Src}
      style={{
        margin: "10px",
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
      alt={"logo"}
    />
  );
};
function LogoWithTitle({ text, source }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <H4 sx={{ textTransform: "uppercase" }}>{text}</H4>
      </Box>
      <motion.div
        whileHover={{ scale: 1.1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          width: "200px",
          boxShadow: "0px 1px 3px 0px rgb(0 0 1)",
          padding: "6px",
          borderRadius: "6px",
        }}
      >
        <StyledImage Src={source} />
      </motion.div>
    </Box>
  );
}

export default LogoWithTitle;
