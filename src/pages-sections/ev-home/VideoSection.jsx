import { Box, styled, useTheme } from "@mui/material";

import React from "react"; // styled components

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "20px",
  "& .videoTag": {
    width: "100%",
  },
}));

const VideoSection = () => {
  return (
    <StyledBox id="carouselBox">
      <video className="videoTag" autoPlay loop muted>
        <source
          src={"/assets/images/website_title_video.mp4"}
          type="video/mp4"
        />
      </video>
    </StyledBox>
  );
};

export default VideoSection;
