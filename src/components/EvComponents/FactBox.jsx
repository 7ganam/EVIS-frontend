import React from 'react';
import {Box , Grid , useTheme } from  "@mui/material";

const FactBox = (props) => {
    const theme = useTheme();
    const {title, text} = props.data;
  return (
    <Box sx={{
        md : 6,
        width : "100%",
    }}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Box sx={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    mb: 0.1,
                    color: theme.palette.secondary.main,
                }}>
                    {title}
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bolder",
                    mb: 3,
                    color: "white",
                }}>
                    {text}
                </Box>
            </Grid>
        </Grid>
    </Box>

  )
}

export default FactBox