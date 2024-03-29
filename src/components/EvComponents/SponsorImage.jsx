import { Box } from "@mui/system";
import React from "react";
import Image from "src/components/BazarImage";

const SponsorImage = (props) => {
  return (
    <Box
      width={"150px"}
      height={"150px"}
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Image
        src={props.src}
        width={"100%"}
        height={"auto"}
        alt="sponsor logo"
      />
    </Box>
  );
};

export default SponsorImage;
