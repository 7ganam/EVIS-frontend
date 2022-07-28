import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { H1, H2, H3 } from "components/EvComponents/Typography";

const FeedbackCard = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign : "center",
          backgroundColor: "#f5f5f5",
          height: "350px",
            width: "250px",
          borderRadius: "20%",
        }}
      >
        <H3>Feedback</H3>
      </Box>
    </Box>
  );
};

export default FeedbackCard;
