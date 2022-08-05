// import { Box } from "@mui/system";
import React from "react";
// import { Grid } from "@mui/material";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { BigButton } from "components/EvComponents/Buttons";
// import { Button } from "@mui/material";
import { H3, Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";
import RoundedImage from "components/EvComponents/RoundedImage";
// import { useTheme } from "@mui/material";
import { Box, Button, Grid, styled, useTheme, Typography, Container } from "@mui/material";

const StyledImage = (props) => {
    return (

        <img src={props.Src} width="170" style={{ margin: "10px" }} />

    )
};

const sponsorsData = [
    {
        source: "/assets/images/organizers/Masdar.png"
    },
    {
        source: "/assets/images/organizers/ADNEC.png"
    },
    {
        source: "/assets/images/organizers/AbuDhabi.png"
    },
    {
        source: "/assets/images/organizers/Nirvana.png"
    },
    {
        source: "/assets/images/organizers/Audi.png"
    },
    {
        source: "/assets/images/organizers/BritishVolt.png"
    },
];

const partnersData = [
    {
        source: "/assets/images/partners/CEBC.png"
    },
    {
        source: "/assets/images/partners/CHARIN.png"
    },
    {
        source: "/assets/images/partners/GEEE.png"
    },
    {
        source: "/assets/images/partners/ISF.png"
    },
    {
        source: "/assets/images/partners/AVERE.png"
    },
    {
        source: "/assets/images/partners/Oxford.png"
    },
];

const Section3 = () => {
    const theme = useTheme();
    return (
        <Container>
            {/* Sponsors Grid */}
            <Grid container
                sx={{ textAlign: "center", placeItems: "center", marginTop: "40px" }}
            >
                {sponsorsData.map(({ source }) => {
                    return (
                        <Grid item xs={12} sm={4} md={2} key={source}>
                            <StyledImage Src={source} />
                        </Grid>)
                })}
            </Grid>

            <Box sx={{ textAlign: "center", paddingBottom: "3rem" }}>
                {/* <h6>KNOWLEDGE PARTNERS</h6>, */}
                <Typography variant="h5" component="h5">KNOWLEDGE PARTNERS</Typography>
                <Grid container
                    sx={{ textAlign: "center", placeItems: "center", }}
                >
                    {partnersData.map(({ source }) => {
                        return (
                            <Grid item xs={12} sm={4} md={2} key={source}>
                                <StyledImage Src={source} />
                            </Grid>)
                    })}
                </Grid>
            </Box>

        </Container>
    )
};

export default Section3;