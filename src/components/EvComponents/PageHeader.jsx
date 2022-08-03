import { Box, styled, Button } from "@mui/material";
import React from "react";
import { H1 } from "components/Typography";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
import Link from "next/link";

function PageHeader({ text, buttonText, buttonLink, image }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "350px",
        background: `linear-gradient(rgba(0, 0, 0, 0.531), rgba(0, 0, 0, 0.381)),url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "white",
        }}
      >
        <Box sx={{ maxWidth: "530px", textAlign: "center" }}>
          {" "}
          <H1 sx={{ fontSize: "35px" }}>{text}</H1>
          <Box ml={2.5} p={1.25}>
            <Link href={buttonLink}>
              <a>
                {" "}
                <StyledButton
                  variant="contained"
                  color="primary"
                  sx={{
                    px: "30px",
                    py: "15px",
                    fontWeight: "700",
                    border: "1px white solid",
                  }}
                >
                  {buttonText}
                </StyledButton>
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PageHeader;
