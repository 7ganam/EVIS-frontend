import React from "react";
import { Box, Grid } from "@mui/material";
import { H2, H6 } from "src/components/EvComponents/Typography";
import { H4, H5 } from "../Typography";

const Content = (item, index) => {
  if (item.direction === "right") {
    return (
      <Grid
        item
        key={index}
        xs={12}
        sm={6}
        sx={{
          backgroundImage: `url("${item.img}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} order={{ sm: 2 }}></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            order={{ sm: 1 }}
            sx={{
              bgcolor: "rgba(0,0,0,0.6)",
              color: "white",
              height: "500px",
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 4,
              }}
            >
              <H2> {item.title} </H2>
              {item.ps?.map((item, index) => {
                return (
                  <Box sx={{ pt: 1 }} key={index}>
                    <H4>{item}</H4>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  if (item.direction === "left") {
    return (
      <Grid
        item
        key={index}
        xs={12}
        sm={6}
        sx={{
          backgroundImage: `url("${item.img}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} order={{ sm: 1 }}></Grid>
          <Grid
            item
            xs={12}
            sm={6}
            order={{ sm: 2 }}
            sx={{
              bgcolor: "rgba(0,0,0,0.6)",
              color: "white",
              height: "500px",
            }}
          >
            <Box sx={{ px: 3, py: 3 }}>
              <H2> {item.title} </H2>
              {item.ps?.map((item, index) => {
                return (
                  <Box sx={{ pt: 1 }} key={index}>
                    <H4>{item}</H4>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

const QuadImg = (props) => {
  const data = props.data;
  return (
    <Box sx={{ boxShadow: "-2px 5px 4px #00000078" }}>
      <Grid
        container
        sx={{
          mb: 6,
          pt: 3,
        }}
      >
        {data.map((item, index) => {
          return Content(item, index);
        })}
      </Grid>
    </Box>
  );
};

export default QuadImg;
