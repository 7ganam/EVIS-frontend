import { Box } from "@mui/system";
import React from "react";
import Image from "src/components/BazarImage";
import { Paragraph } from "src/components/EvComponents/Typography";
import { H1, H2, H3, H4 } from "src/components/EvComponents/Typography";
import { BlockTitle } from "src/components/EvComponents/StyledTypography";
import { useTheme } from "@emotion/react";
import Link from "next/link";
function CardWithImageButton({ img, link, title }) {
  const theme = useTheme();
  return (
    <Box>
      <Link href={link} passHref>
        <a>
          <Box sx={{ height: "auto", width: "100%" }}>
            <Image
              // height={60}

              width={"100%"}
              mb={0}
              src={img}
              alt="logo"
              sx={{
                objectFit: "cover",
                aspectRatio: " 16 / 12",
                borderRadius: "10px",
                //shadow
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.2)",
                //on hover change shadow:
                "&:hover": {
                  boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.4)",
                },
              }}
            />
          </Box>

          <Box sx={{ textAlign: "center", my: "10px" }}>
            <H2>{title}</H2>
          </Box>
        </a>
      </Link>
    </Box>
  );
}

export default CardWithImageButton;
