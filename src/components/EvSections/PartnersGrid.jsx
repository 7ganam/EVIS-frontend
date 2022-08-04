import { Box, Container, Grid, Typography } from "@mui/material";

const StyledImage = (props) => {
    return (
        <img src={props.Src} width="170" style={{ margin: "10px" }} />
    )
}

const imagesData = [
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

const PartnersGrid = () => {
    return (
        <Box sx={{ textAlign: "center", paddingBottom: "3rem" }}>
            {/* <h6>KNOWLEDGE PARTNERS</h6>, */}
            <Typography variant="h5" component="h5">KNOWLEDGE PARTNERS</Typography>
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
        </Box>
    )
}

export default PartnersGrid;