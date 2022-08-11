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

const DownloadSection = (props) => {
    return (
        <Box>
            <Grid container spacing={3} columns={{ md: 10 }}
                sx={{ textAlign: "center", placeItems: "center", margin: "40px 0 70px" }}
            >
                {props.ButtonsData.map(({ text }) => {
                    return (
                        <Grid item xs={12} sm={4} md={2} key={text}>
                            <Button sx={{ padding: "10px 40px" }} variant="outlined">{text}</Button>
                        </Grid>)
                })}
            </Grid>

        </Box>


    )
};

export default DownloadSection;

{/* <Box sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            ButtonsData
            <Box padding="30px" >
                {props.ButtonsData.map(({ text }) => {
                    return (
                        <Button variant="outlined" key={text}>{text}</Button>
                    )
                }
                )}
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Download Sales Brochure</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Download Post Show Report</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Book Your Stand NO</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Register your interest to visit</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Delegate Registration</Button>
            </Box>

        </Box> */}