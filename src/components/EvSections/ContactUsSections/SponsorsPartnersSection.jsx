import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

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

const SponsorsPartnersSection = () => {
    return (
        <Container>
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
                <Typography variant="h6" component="h6">KNOWLEDGE PARTNERS</Typography>
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

export default SponsorsPartnersSection;