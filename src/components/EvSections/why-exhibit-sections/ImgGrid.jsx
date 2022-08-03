import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const ImgGrid = (props) => {
    const data = props.data;
    return (
        <Box sx={{ textAlign: "center", }}>
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }} sx={{ padding: "35px", textAlign: "center", placeItems: "center", }}>
                {data.map(({ source }) => {
                    return (
                        <Grid item xs={12} sm={4} md={2} key={source} sx={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <SponsorImage imageSrc={source} />
                        </Grid>)
                })}
            </Grid>
        </Box>
    )
}

export default ImgGrid