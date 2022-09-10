import { Box, styled, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { H1 } from "src/components/Typography";
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
}));
import Link from "next/link";
function PageHeader({ text, buttonText, buttonLink, image, children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "450px",
        background: `linear-gradient(rgba(0, 0, 0, 0.531), rgba(0, 0, 0, 0.381)),url(${image})`,
        backgroundSize: "cover",
        borderBottom: `10px solid ${theme.palette.primary.main}`,
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
        {children ? (
          children
        ) : (
          <Box sx={{ maxWidth: "730px", textAlign: "center" }}>
            {text && (
              <H1
                sx={{ fontSize: { xs: "50px", md: "90px" }, fontWeight: "500" }}
              >
                {text}
              </H1>
            )}
            {buttonText && buttonLink && (
              <Box ml={2.5} p={1.25}>
                <Link href={buttonLink}>
                  <a>
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
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PageHeader;
