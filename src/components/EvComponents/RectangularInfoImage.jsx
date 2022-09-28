import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, useTheme, Box, Button, Link } from "@mui/material";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
} from "src/components/EvComponents/Typography";
import {
  SectionTitle,
  BlockTitle,
} from "src/components/EvComponents/StyledTypography";
import { styled } from "@mui/material/styles";
import Image from "src/components/BazarImage";

const RectangularInfoImage = (props) => {
  return (
    <Box
      sx={{
        textAlign: "left",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "auto", width: "100%" }}>
        <Image
          // height={60}
          width={"100%"}
          height={"100%"}
          mb={0}
          src={props.src}
          alt="logo"
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Box sx={{ margin: "10px 0 auto" }}>
        <BlockTitle>{props.title}</BlockTitle>
      </Box>
      <H2>{props.name}</H2>
      <H5>Tel: {props.tel}</H5>
      <H5>
        Email: <Link href={props.emailTo}>{props.email}</Link>
      </H5>
    </Box>
  );
};

export default RectangularInfoImage;
