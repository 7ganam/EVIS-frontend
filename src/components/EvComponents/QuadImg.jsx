import React from "react";
import { Box, Grid } from "@mui/material";
import { H2, H6 } from "components/EvComponents/Typography";

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
          <Grid item  xs= {12} sm={6} order={{ sm: 2 }}></Grid>
          <Grid
            item
            xs = {12}
            sm={6}
            order={{ sm: 1 }}
            sx={{
              bgcolor: "rgba(0,0,0,0.3)",
              color: "white",
              height: "500px",
            }}
          >
            <Box sx={{ 
                px: 3, 
                py : 4,
                }}>
              <H2> {item.title} </H2>
              {item.ps?.map((item, index) => {
                return (
                  <Box sx={{ pt: 1 }} key={index}>
                    <H6>{item}</H6>
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
          <Grid item xs = {12} sm={6} order={{ sm: 1 }}></Grid>
          <Grid
            item
            xs = {12}
            sm={6}
            order={{ sm: 2 }}
            sx={{
              bgcolor: "rgba(0,0,0,0.3)",
              color: "white",
              height: "500px",
            }}
          >
            <Box sx={{ px: 3 , py : 3 }}>
              <H2> {item.title} </H2>
              {item.ps?.map((item, index) => {
                return (
                  <Box sx={{ pt: 1 }} key={index}>
                    <H6>{item}</H6>
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
    <Box>
      <Grid
        container
        sx={{          
          mb: 6,
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
