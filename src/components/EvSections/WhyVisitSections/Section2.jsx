import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { BigButton } from "components/EvComponents/Buttons";
import { Button } from "@mui/material";
import { H3, Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";
import RoundedImage from "components/EvComponents/RoundedImage";
import { useTheme } from "@mui/material";


const sectionData = [
    {
        img: "/assets/images/why-visit/2.png",
        title: "Meet potential clients",
        timer: 1700,
    },
    {
        img: "/assets/images/why-visit/3.png",
        title: "Stay updated on new trends",
        timer: 2000,
    },
    {
        img: "/assets/images/why-visit/4.png",
        title: "Keep the pulse on new product launches",
        timer: 2300,
    },
    {
        img: "/assets/images/why-visit/5.png",
        title: "Hear from leaders in the industry",
        timer: 2600,
    },
    {
        img: "/assets/images/why-visit/6.png",
        title: "Industry specific education",
        timer: 2900,
    },
]



const Section2 = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            margin: "60px 0",
            padding: "30px 200px",
            backgroundColor: theme.palette.primary.main
        }}>
            <Grid container spacing={5} columns={{ md: 10 }} sx={{ textAlign: "center" }}>

                {sectionData.map(({ img, title, timer }) => {
                    return (
                        <Grid hoverEffect
                            data-aos="fade-up"
                            data-aos-duration={timer}
                            item xs={12} sm={6} md={2} key={img} sx={{ textAlign: "center" }}>
                            <Box width="150px" margin="0 auto">
                                <RoundedImage Src={img} />
                            </Box>
                            <H3 color={theme.palette.paste.contrastText}>{title}</H3>
                        </Grid>

                    )
                })}
            </Grid>
        </Box>
    )
};

export default Section2;