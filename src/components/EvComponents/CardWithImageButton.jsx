import { Box } from "@mui/system";
import React from "react";
import Image from "src/components/BazarImage";
import { Paragraph } from "src/components/EvComponents/Typography";
import { H1, H2, H3, H4 } from "src/components/EvComponents/Typography";
import { BlockTitle } from "src/components/EvComponents/StyledTypography";
import { useTheme } from "@emotion/react";
function CardWithImageButton({ text, img, buttonText, buttonURL, title }) {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ height: "auto", width: "100%" }}>
        <Image
          // height={60}
          width={"100%"}
          mb={0}
          src={img}
          alt="logo"
          sx={{ objectFit: "cover", aspectRatio: " 16 / 12" }}
        />
      </Box>
      <Box sx={{ textAlign: "center", my: "10px" }}>
        <H2>{title}</H2>
      </Box>
      <Box>
        <Paragraph>{text}</Paragraph>
      </Box>
      <Box
        sx={{
          mt: "10px",
          color: theme.palette.primary.main,
          textDecoration: "underline",
        }}
      >
        <H4>{buttonText}</H4>
      </Box>
    </Box>
  );
}

export default CardWithImageButton;
