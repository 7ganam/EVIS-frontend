import React from "react";
import { Grid, Card, Box } from "@mui/material";
import { H4 } from "components/EvComponents/Typography";

const FeedbackCard = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign : "center",
          backgroundColor: "#f5f5f5",
          height: "400px",
          width: "350px",
          borderRadius: "30%",
        }}
      >
        <H4 
        sx = {{pt : 6 ,px : 6}}
        >
            this is th feedback given from certain person and this text is made for testing </H4>
      </Box>
    </Box>
  );
};

export default FeedbackCard;
