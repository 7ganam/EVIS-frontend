import { Box, useTheme } from "@mui/material";
import { H1 } from "src/components/EvComponents/Typography";
import React from "react";

const imgUrl =
  "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTYzMjEyNDI5MzYxNDgzZDg1YTM0ZjU=.jpeg";
const Landing = () => {
  const theme = useTheme();
  return (
    <Box
      container
      sx={{
        border: `0px solid ${theme.palette.primary.main}`,
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",

        color: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.226)),url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Box>
        <H1
          mb={{
            sm: 4,
            xs: 3,
          }}
          fontSize={{
            md: 60,
            sm: 35,
            xs: 30,
          }}
          lineHeight="1.37"
          sx={{ textAlign: "center" }}
        >
          WHY ABU DHABI
        </H1>
      </Box>
    </Box>
  );
};

export default Landing;
