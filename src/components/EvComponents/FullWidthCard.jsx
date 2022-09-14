import { Box } from "@mui/system";
import React from "react";
import Image from "src/components/BazarImage";
import { Grid } from "@mui/material";
import {
  H2,
  H3,
  H4,
  H5,
  Paragraph,
} from "src/components/EvComponents/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material";

const FullWidthCard = (props) => {
  const theme = useTheme();
  const boxSX = {
    "&:hover": {
      border: "1px solid #00FF00",
      color: "gray",
      backgroundColor: "lightblue",
    },
  };

  return (
    <Grid
      container
      sx={{ padding: "20px 35px", textAlign: "center" }}
      spacing={3}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        sx={{
          textAlign: "center",
        }}
      >
        <Image src={props.src} width={"80%"} height={"auto"} alt="card image" />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        sx={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          marginTop: "20px",
        }}
      >
        <H4>{props.Author}</H4>

        <Link
          href={props.Link}
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "medium",
            fontSize: "large",
            cursor: "pointer",
            marginBottom: "12px",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {props.Title}
        </Link>

        <Paragraph>
          {props.Content}
          <Link
            href={props.Link}
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "medium",
              fontSize: "medium",
              cursor: "pointer",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            To read more, download the full white paper.
          </Link>
        </Paragraph>
      </Grid>
    </Grid>
  );
};

export default FullWidthCard;
