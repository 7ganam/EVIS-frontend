import { Box } from "@mui/system";
import React from "react";
// import Image from "components/BazarImage";
import Image from 'next/image'
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
            <Grid container columns={{ xs: 1, sm: 3, md: 6 }} sx={{ padding: "35px", textAlign: "center", placeItems: "center", }}>
                {sponsorsImagesData.map(({ source }) => {
                    return (
                        <Grid item xs={1} sm={1} md={1} key={source}>
                            <Box sx={{ height: "100%", width: "100%" }}>
                                <SponsorImage imageSrc={source} />
                            </Box>
                        </Grid>)
                })}
                {/* <SponsorImage imageSrc="/assets/images/brands/samsung.png" />
            <SponsorImage imageSrc="/assets/images/brands/xiaomi.png" />
            <SponsorImage imageSrc="/assets/images/brands/bmw.png" />
            <SponsorImage imageSrc="/assets/images/brands/ferrari.png" />
            <SponsorImage imageSrc="/assets/images/brands/tesla.png" />
            <SponsorImage imageSrc="/assets/images/brands/toyota.png" /> */}
            </Grid>
        </Box>
    )
}

export default SponsorsImageGrid;