import React from "react";
import { Box } from "@mui/system";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
} from "src/components/EvComponents/Typography";
import { Button, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import TodayIcon from "@mui/icons-material/Today";
import { useRouter } from "next/router";
import Image from "src/components/BazarImage";
const NewsCard = ({ title, img, link }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Box
        sx={{
          display: "flex",
          border: `1px solid ${theme.palette.primary.main}`,
          flexDirection: "column",
          borderRadius: "6px",
          overflow: "hidden",
          // bgcolor: theme.palette.primary.main,
          // color: "white",
          boxShadow:
            " 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <Box
          sx={{
            height: "350px",
            width: "100%",
            padding: "10px 10px 0 10px",
          }}
        >
          <Image
            src={img}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              overflow: "hidden",
            }}
            alt="newsCard"
          ></Image>
        </Box>
        <Box
          sx={{
            minHeight: "50px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <H2>{title}</H2>
        </Box>
      </Box>
    </a>
  );
};

export default NewsCard;
