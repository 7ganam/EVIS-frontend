import React from "react";
import { Box } from "@mui/system";
import Image from "src/components/BazarImage";
import { Paragraph } from "src/components/EvComponents/Typography";

const ImageWithTextBox = (props) => {
  const { text, img } = props.data;
  return (
    <Box>
      <Box sx={{ height: "150px", width: "100%" }}>
        <Image
          // height={60}
          width={"100%"}
          height={"100%"}
          mb={0}
          src={img}
          alt="logo"
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Paragraph>{text}</Paragraph>
      </Box>
    </Box>
  );
};

export default ImageWithTextBox;
