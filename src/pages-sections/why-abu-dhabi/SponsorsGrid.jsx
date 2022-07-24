import { Box, Button, Grid, styled, useTheme } from "@mui/material";


const SponsorsGrid = () => {
    return (
        <Grid
            sx={{
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                // margin: "10px auto",
                textAlign: "center",
            }}
        >
            <img src="/assets/images/why-abu-dhabi/Organizers/AbuDhabi.png" width="200" />
            <img src="/assets/images/why-abu-dhabi/Organizers/ADNEC.png" width="200" />
            <img src="/assets/images/why-abu-dhabi/Organizers/Audi.png" width="200" />
            <img src="/assets/images/why-abu-dhabi/Organizers/BritishVolt.png" width="200" />
            <img src="/assets/images/why-abu-dhabi/Organizers/Masdar.png" width="200" />
            <img src="/assets/images/why-abu-dhabi/Organizers/Nirvana.png" width="200" />
        </Grid>
    )
}

export default SponsorsGrid;