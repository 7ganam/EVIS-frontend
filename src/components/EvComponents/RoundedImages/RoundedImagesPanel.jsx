import React from "react";
import RoundedImage from "./RoundedImage";
import { Grid, Item } from "@mui/material"

const RoundedImagesPanel = () => {
    return (
        <Grid container columns={{ xs: 1, sm: 3, md: 6 }} sx={{ padding: "35px" }}>
            <Grid item xs={12} sm={1} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={1} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={4} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={4} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={4} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={4} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={4} md={1}>
                <RoundedImage />
            </Grid>
            <Grid item xs={12} sm={4} md={1}>
                <RoundedImage />
            </Grid>

        </Grid>

    )
}

export default RoundedImagesPanel;