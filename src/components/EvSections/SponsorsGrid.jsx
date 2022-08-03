import { Box, Button, Grid, styled, useTheme } from "@mui/material";

const StyledImage = (props) => {
    return (

        <img src={props.Src} width="170" style={{ margin: "10px" }} />

    )
}

const imagesData = [
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

const SponsorsGrid = () => {
    return (
        <Grid container
            sx={{ textAlign: "center", placeItems: "center", }}
        >
            {imagesData.map(({ source }) => {
                return (
                    <Grid item xs={12} sm={4} md={2} key={source}>
                        <StyledImage Src={source} />
                    </Grid>)
            })}
        </Grid>
    )
}

export default SponsorsGrid;