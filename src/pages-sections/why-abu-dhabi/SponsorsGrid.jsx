import { Box, Button, Grid, styled, useTheme } from "@mui/material";

const StyledImage = (props) => {
    return (

        <img src={props.Src} width="170" style={{ margin: "10px" }} />

    )
}

const SponsorsGrid = () => {
    return (
        <Grid
            sx={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                // margin: "10px auto",
                textAlign: "center",
            }}
        // columnSpacing={12}
        >
            <StyledImage Src="/assets/images/why-abu-dhabi/Organizers/Masdar.png" />
            <StyledImage Src="/assets/images/why-abu-dhabi/Organizers/ADNEC.png" />
            <StyledImage Src="/assets/images/why-abu-dhabi/Organizers/AbuDhabi.png" />
            <StyledImage Src="/assets/images/why-abu-dhabi/Organizers/Nirvana.png" />
            <StyledImage Src="/assets/images/why-abu-dhabi/Organizers/Audi.png" />
            <StyledImage Src="/assets/images/why-abu-dhabi/Organizers/BritishVolt.png" />
        </Grid>
    )
}

export default SponsorsGrid;