import { Box } from "@mui/system";
import React from "react";
import Image from "components/BazarImage";
import { Paragraph } from "components/EvComponents/Typography";
import { H1, H2, H3, H4 } from "components/EvComponents/Typography";
import { BlockTitle } from "components/EvComponents/StyledTypography";
function CardWithImageButton({ text, img, buttonText, buttonURL, title }) {
  return (
    <Box>
      <Box sx={{ height: "auto", width: "100%" }}>
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
      <Box sx={{ textAlign: "center", my: "10px" }}>
        <H2>{title}</H2>
      </Box>
      <Box>
        <Paragraph>{text}</Paragraph>
      </Box>
      <Box sx={{ mt: "10px" }}>
        <BlockTitle>{buttonText}</BlockTitle>
      </Box>
    </Box>
  );
}

export default CardWithImageButton;
