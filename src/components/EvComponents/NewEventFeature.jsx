import React from "react";
import Image from "components/BazarImage";
import { H1, H2, H3, H4, Paragraph } from "components/EvComponents/Typography";
import SponsorImage from "components/EvComponents/SponsorImage";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { BigButton } from "components/EvComponents/Buttons";
// import { Button } from "@mui/material";
import RoundedImage from "components/EvComponents/RoundedImage";
import { Box, Button, Grid, styled, useTheme, Typography, Container } from "@mui/material";

const NewEventFeature = (props) => {
    const theme = useTheme();
    return (
        <Box sx={{
            backgroundColor: theme.palette.primary.main,
            // margin: "auto 10px",
            padding: "22px 25px 60px",
            height: "100%",
            // display: "flex",
            // flexDirection: "column",
        }}>
            <Box sx={{
                marginBottom: "-10px",
                height: "100%"
            }}>
                <Paragraph sx={{ color: theme.palette.paste.contrastText, }}>
                    {props.Body}
                </Paragraph>
            </Box>

            <Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.main, }}>{props.BtnText}</Button>
        </Box>
    )
};

export default NewEventFeature;