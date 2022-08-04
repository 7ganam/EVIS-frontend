import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";

const sponsorsImagesData = [
    {
        source: "/assets/images/brands/tesla.png",
    },
    {
        source: "/assets/images/brands/apple.png",
    },
    {
        source: "/assets/images/brands/bmw.png",
    },
    {
        source: "/assets/images/brands/dell.png",
    },
    {
        source: "/assets/images/brands/ferrari.png",
    },
    {
        source: "/assets/images/brands/ray-ban.png",
    },
    {
        source: "/assets/images/brands/lotto.png",
    },
    {
        source: "/assets/images/brands/toyota.png",
    },
    {
        source: "/assets/images/brands/xiaomi.png",
    },
    {
        source: "/assets/images/brands/samsung.png",
    },
    {
        source: "/assets/images/brands/sony.png",
    },
    {
        source: "/assets/images/brands/occular.png",
    },
    {
        source: "/assets/images/brands/levis.png",
    },
    {
        source: "/assets/images/brands/amazon.png",
    },
]

const SponsorsImageGrid = () => {
    return (
        <Box sx={{ textAlign: "center", }}>
            <SectionTitle>Event Sponsors</SectionTitle>
            <Grid container sx={{ padding: "35px", textAlign: "center", placeItems: "center", }}>
                {sponsorsImagesData.map(({ source }) => {
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

export default SponsorsImageGrid;