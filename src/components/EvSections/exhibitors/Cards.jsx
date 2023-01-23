import React from "react";
import { Box, Grid, Container, useTheme, Card } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import Image from "src/components/BazarImage";
import { H5 } from "src/components/Typography";

const Cards = (props) => {
  const theme = useTheme();

  const data = props.data;
  return (
    <Box
      sx={{
        width: "100%",
        px: 6,
        py: "10px",
      }}
    >
      <SectionTitle sx={{ mb: "20px" }}>{props.title}</SectionTitle>

      <Container
        sx={{
          mb: "70px",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {data.map((item, ind) => {
            return (
              <Grid item lg={4} md={4} xs={12} key={ind}>
                <Card
                  hoverEffect
                  data-aos="fade-up"
                  data-aos-duration={ind * 500}
                  sx={{
                    p: "1rem",
                    height: "250px",
                    display: "flex",
                    borderRadius: "8px",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  <Image
                    height={150}
                    width={150}
                    style={{ objectFit: "contain" }}
                    mb={0.5}
                    src={item.img}
                    alt="logo"
                  />

                  <H5
                    width="190px"
                    sx={{
                      color: "black",
                      mt: "10px",
                      fontSize: "20px",
                    }}
                  >
                    {item.content}
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

export default Cards;
