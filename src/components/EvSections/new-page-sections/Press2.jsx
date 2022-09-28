import React from "react";
import { Box, Grid, Container, Card } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { H4 } from "src/components/Typography";

const Press2 = (props) => {
  const data = props.data;

  return (
    <Box
      sx={{
        width: "100%",
        pb: 1,
      }}
    >
      <SectionTitle>
        ANNOUNCING THE ELECTRIC VEHICLE INNOVATION SUMMIT
      </SectionTitle>

      <Container
        sx={{
          mb: "70px",
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
                    height: "250px",
                    display: "flex",
                    borderRadius: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.226)),url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                >
                  <H4
                    width="auto"
                    sx={{
                      color: "white",
                    }}
                  >
                    {item.content}
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

export default Press2;
