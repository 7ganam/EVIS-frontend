import { Button, Box, useTheme } from "@mui/material";
import Carousel from "src/components/carousel/Carousel";
import { H1, H4 } from "src/components/Typography";
import React from "react"; // styled component
import DownloadingIcon from "@mui/icons-material/Downloading";

// ============================================================
const DownloadSection = ({ cardList = [] }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: "20px",
      }}
    >
      <Button
        sx={{
          mt: 2,
          width: "500px",
          maxWidth: "90%",
          minHeight: "100px",
          fontSize: { xs: "17px", md: "30px" },
        }}
        color="primary"
        variant="outlined"
        onClick={() => console.log("downlaod")}
      >
        {"Download Event Brochure"}
        <DownloadingIcon
          sx={{
            ml: 1,
            height: { xs: "30px", md: "40px" },
            width: { xs: "30px", md: "40px" },
          }}
        />
      </Button>
    </Box>
  );
};

export default DownloadSection;
