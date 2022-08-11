import React from "react";
import NewEventFeature from "components/EvComponents/NewEventFeature";
import Image from "components/BazarImage";
import { H1, H2, H3, H4, Paragraph } from "components/EvComponents/Typography";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { BigButton } from "components/EvComponents/Buttons";
// import { Button } from "@mui/material";
import RoundedImage from "components/EvComponents/RoundedImage";
import { Box, Button, Grid, styled, useTheme, Typography, Container } from "@mui/material";

const NewEventFeatureSection = (props) => {
    return (
        <Container>
            <Grid container spacing={3}
                sx={{ textAlign: "center", placeItems: "center", marginTop: "40px", alignItems: "stretch", }}
            >
                {props.Data.map(({ text, buttonText }) => {
                    return (
                        <Grid item xs={12} sm={4} md={4} key={text}>
                            <NewEventFeature Body={text} BtnText={buttonText} />
                        </Grid>)
                })}
            </Grid>
        </Container>
    )
};

export default NewEventFeatureSection;