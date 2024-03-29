import React from "react";
import { Grid, Box } from "@mui/material";
import { BlockTitle } from "src/components/EvComponents/StyledTypography";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
} from "src/components/EvComponents/Typography";

const ModifiedRectangularTextContainer = (props) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        borderRadius: "7px",
        width: "130px",
        height: "130px",
        backgroundColor: props.BGColor,
        color: props.Color,
        margin: "5px",
        padding: "5px",
        // verticalAlign: "middle",
        // padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <H5>{props.text}</H5>

      {/* <Image
                    sx={{
                        objectFit: "cover",
                    }}
                    alt="rounded image"
                    src={props.Src}
                    width={"100%"}
                    height={"100%"}
                /> */}
    </Box>
  );
};

export default ModifiedRectangularTextContainer;
