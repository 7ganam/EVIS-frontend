import { Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import { H4 } from "src/components/EvComponents/Typography";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { styled } from "@mui/material/styles";
const StyledButton1 = styled(Button)({
  minWidth: 0,
  minHeight: 0,
});

export function BigButton({ content }) {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "uppercase",
        minHeight: "70px",
        fontSize: "25px",
        wordSpacing: "0px",
        px: "40px",
        fontWeight: "700",
      }}
    >
      {content}
    </Button>
  );
}

export const ReadMoreButton = (props) => {
  const cmd = props.cmd;
  const theme = useTheme();
  return (
    <StyledButton1 sx={{ pl: 0 }}>
      <KeyboardDoubleArrowRightOutlinedIcon fontSize="small" color="primary" />
      <H4 color={theme.palette.primary.main} sx={{ pb: 0.3, pl: 0.5 }}>
        {cmd}
      </H4>
    </StyledButton1>
  );
};
