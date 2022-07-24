import { Container, Grid, Typography } from "@mui/material";

const StyledImage = (props) => {
    return (
        <img src={props.Src} width="170" style={{ margin: "10px" }} />
    )
}

const PartnersGrid = () => {
    return (
        <Container sx={{ textAlign: "center", paddingBottom: "3rem" }}>
            {/* <h6>KNOWLEDGE PARTNERS</h6>, */}
            <Typography variant="h5" component="h5">KNOWLEDGE PARTNERS</Typography>
            <Grid
                sx={{
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                    // margin: "10px auto",
                    textAlign: "center",
                }}
            // columnSpacing={12}
            >
                <StyledImage Src="/assets/images/why-abu-dhabi/Partners/CEBC.png" />
                <StyledImage Src="/assets/images/why-abu-dhabi/Partners/CHARIN.png" />
                <StyledImage Src="/assets/images/why-abu-dhabi/Partners/GEEE.png" />
                <StyledImage Src="/assets/images/why-abu-dhabi/Partners/ISF.png" />
                <StyledImage Src="/assets/images/why-abu-dhabi/Partners/AVERE.png" />
                <StyledImage Src="/assets/images/why-abu-dhabi/Partners/Oxford.png" />
            </Grid>
        </Container>
    )
}

export default PartnersGrid;