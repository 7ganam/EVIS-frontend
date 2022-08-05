import React from "react";
import { Box, Grid, Container, useTheme, Card } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import { H4 } from "components/Typography";
const Press = (props) => {
  const theme = useTheme();

  const data = props.data;
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <SectionTitle>EVIS PRESS CONFERENCE</SectionTitle>

      <Container
        sx={{
          mb: "70px",
          pt: 3,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {data.map((item, ind) => {
            return (
              <Grid item lg={2.4} md={3} xs={12} key={ind}>
                <Card
                  hoverEffect
                  sx={{
                    p: "1rem",
                    height: "200px",
                    display: "flex",
                    borderRadius: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    bgcolor: theme.palette.primary.main,
                  }}
                >
                  <H4
                    width="auto"
                    sx={{
                      color: "white",
                    }}
                  >
                    {item}
                  </H4>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Press;
