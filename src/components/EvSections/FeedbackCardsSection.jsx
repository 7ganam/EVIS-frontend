import React from "react";
import FeedbackCard from "src/components/EvComponents/FeedbackCard";
import { Box, Grid } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const data = [
  {
    text: "The amount of leads and visitors we've had has been exponentially bigger than last year. The exhibitors have definitely upped their game in terms of the demos that they're doing and the solutions that they're providing to the industry. It's a bright future for the EV market and I can't wait to see what the future holds.",
    name: "Jim Greig",
    title:
      "Global Director of Business Development and Sales, Electrification Solutions",
    company: "LORD Corporation",
  },
  {
    text: "The amount of leads and visitors we've had has been exponentially bigger than last year. The exhibitors have definitely upped their game in terms of the demos that they're doing and the solutions that they're providing to the industry. It's a bright future for the EV market and I can't wait to see what the future holds.",
    name: "Jim Greig",
    title:
      "Global Director of Business Development and Sales, Electrification Solutions",
    company: "LORD Corporation",
  },
  {
    text: "The amount of leads and visitors we've had has been exponentially bigger than last year. The exhibitors have definitely upped their game in terms of the demos that they're doing and the solutions that they're providing to the industry. It's a bright future for the EV market and I can't wait to see what the future holds.",
    name: "Jim Greig",
    title:
      "Global Director of Business Development and Sales, Electrification Solutions",
    company: "LORD Corporation",
  },
];

const FeedbackCardsSection = () => {
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <SectionTitle>Feedback Boxes Section</SectionTitle>{" "}
      {/* this title will be removed on use */}
      <Grid container sx={{ mt: 2 }} spacing={5}>
        {data.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FeedbackCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeedbackCardsSection;
