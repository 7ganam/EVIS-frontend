import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { BigButton } from "components/EvComponents/Buttons";
import { Button } from "@mui/material";
import { Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";





const whyVisit = {
    img: "/assets/images/why-visit/1.jpeg",
    title: "WHY VISIT",
    p1: "The Electric Vehicle Innovation Summit is the leading EV trade show and conference in the region offering access to hundreds of companies and experts in the industry.",
    p2: "EVIS is more focused on Electric Vehicles which include land, air and sea, hence you will be able to get more insight on the latest applications, technologies, and market progress on electric vehicles.",
}

const Section1 = () => {
    return (
        <Box>
            <Grid container spacing={3} sx={{ textAlign: "center", paddingTop: "25px" }}>
                <Grid item xs={12} sm={6} md={6} sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    justifyContent: "start",
                    alignItems: "flex-start",

                }} >
                    <Box sx={{ margin: "-40px 0 20px" }}>
                        <SectionTitle>{whyVisit.title}</SectionTitle>
                    </Box>
                    <Paragraph marginBottom="10px">{whyVisit.p1}</Paragraph>
                    <Paragraph>{whyVisit.p2}</Paragraph>
                    <Box sx={{
                        textAlign: "center",
                        margin: "60px auto"
                    }} >
                        <BigButton text={"REGISTER NOW"} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Image
                        width={"100%"}
                        height={"100%"}
                        mb={0}
                        src={whyVisit.img}
                        alt="logo"
                        sx={{ objectFit: "cover" }}
                    />
                </Grid>

            </Grid>
        </Box>
    )
};

export default Section1;