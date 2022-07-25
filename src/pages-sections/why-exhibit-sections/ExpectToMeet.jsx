import { Box, Grid, useTheme, Card } from "@mui/material";
import { H5 } from "components/Typography";

import { SectionTitle } from "components/StyledTypography";
import { Container } from "@mui/material";
import React from "react";

const ExpectToMeet = ({ list }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: "10px" }}>
        <Container
                sx={{
                    mb: "70px",
                  }}>
      <SectionTitle text={"WHO YOU CAN EXPECT TO MEET"} />
      <Grid container spacing={2}
            alignItems="center"
        >
          {list.map((item ,ind) => {
            return (
              <Grid item lg={2.4} md={3} xs={10} key={ind}>
                <Card
                  hoverEffect
                  data-aos="fade-up"
                  data-aos-duration={ind * 500}
                  sx={{
                    p: "1rem",
                    height: "100px",
                    display: "flex",
                    borderRadius: "8px",
                    alignItems: "center",
                    flexDirection: "column",
                    bgcolor: theme.palette.primary.light,
                    textAlign:"center"

                  }}
                >

                    <H5
                    width='220px'
                    sx = {{
                        color: 'white',
                        mt : '15px',
                    }}
                    >
                    {item}
                    </H5>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        </Container>
    </Box>
  );
};

export default ExpectToMeet;
