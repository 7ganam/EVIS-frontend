import React from "react";
import { Box, Grid, Container, useTheme, Card } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import { H5 } from "components/Typography";
const ExpectMeet = (props) => {
  const theme = useTheme();

  const data = props.data;
  return (
    <Box
      sx={{
        width: "100%",
        px: 6,
        pb: "10px",
      }}
    >
      <SectionTitle>WHAT TO EXPECT</SectionTitle>

      <Container
        sx={{
          mb: 2,
          pt: 3,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {data.map((item, ind) => {
            return (
              <Grid item lg={4} md={6} xs={12} key={ind}>
                <Card
                  hoverEffect
                  sx={{
                    p: "1rem",
                    height: "150px",
                    display: "flex",
                    borderRadius: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    bgcolor: theme.palette.primary.main,
                  }}
                >
                  <H5
                    width="330px"
                    sx={{
                      color: "white",
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

export default ExpectMeet;
