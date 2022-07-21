import React from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";
import VideoContentYT from "react-video-content-youtube";

const StyledBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  paddingBottom: "56.25%",
  position: "relative",
  height: "0",
  "& iframe ": {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
}));

const YoutubeEmbed = ({ embedId }) => (
  <StyledBox>
    <VideoContentYT src={embedId} params={{ autoPlay: false }} />
  </StyledBox>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default YoutubeEmbed;
