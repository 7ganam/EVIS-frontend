import React from "react";
import { SectionTitle, BlockTitle } from "components/EvComponents/StyledTypography";
import { H1 } from "components/EvComponents/Typography";
import { Box, Grid, useTheme, Container } from "@mui/material";
import ModifiedRectangularTextContainer from "components/EvComponents/ModifiedRectangularTextContainer";

const agenciesAndSuppliers = [
    {
        name: "Regulatory and Government Agencies"
    },
    {
        name: "Component Manufacturers & Suppliers"
    },
    {
        name: "Environmental Agencies"
    },
    {
        name: "Equipment Suppliers"
    },
    {
        name: "Suppliers of Electric Components & Spare Parts"
    },
    {
        name: "Local authorities"
    },
];

const managersAndSpecialists = [
    {
        name: "Innovators and Planning Specialists"
    },
    {
        name: "Public Transport Operators"
    },
    {
        name: "Law Firms and Academia"
    },
    {
        name: "Fleet Owners and Managers"
    },
    {
        name: "Engineering and Designing Companies"
    },
    {
        name: "Investors, banks and financial companies"

    },
];

const providersAndManufactures = [
    {
        name: "Battery Manufacturers"
    },
    {
        name: "Manufacturers of Electric & Hybrid Vehicles"
    },
    {
        name: "Charging Infrastructure Providers"
    },
    {
        name: "EV Charging Application Providers"
    },
    {
        name: "Automotive EV Service Providers"
    },
    {
        name: "Thermal management system providers"
    },
]

const groupsTitle = [
    "Agencies & Suppliers", "Managers & Specialists", "Providers & Manufactures"
]

const Section3 = () => {
    const theme = useTheme();
    return (
        <Box>

            <Box margin="10px 0 80px">
                <SectionTitle>
                    WHO YOU CAN EXPECT TO MEET
                </SectionTitle>
            </Box>
            <Container>
                <Grid container
                    sx={{ textAlign: "center", placeItems: "center", padding: "0 0 5px" }}
                >
                    <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "center", }}>
                        <SectionTitle>
                            {groupsTitle[0]}
                        </SectionTitle>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "450px",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            {agenciesAndSuppliers.map(({ name }) => {
                                return (
                                    <Box item xs={12} sm={4} md={4} key={name}>
                                        <ModifiedRectangularTextContainer text={name} Color={theme.palette.paste.contrastText} BGColor={theme.palette.primary.main} />
                                    </Box>)
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box backgroundColor={theme.palette.primary.main} sx={{ textAlign: "center", }}>
                <Container>
                    <Box backgroundColor={theme.palette.primary.main} sx={{ margin: "20px 0", }}>
                        <Grid container
                            sx={{ textAlign: "center", placeItems: "center", padding: "25px" }}
                        >
                            <Grid item xs={12} sm={6} md={6}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "450px",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    {managersAndSpecialists.map(({ name }) => {
                                        return (
                                            <Box item xs={12} sm={4} md={4} key={name}>
                                                <ModifiedRectangularTextContainer text={name} Color={theme.palette.primary.main} BGColor={theme.palette.paste.contrastText} />
                                            </Box>)
                                    })}
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <H1 color={theme.palette.paste.contrastText}>
                                    {groupsTitle[1]}
                                </H1>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Container>
                <Grid container
                    sx={{ textAlign: "center", placeItems: "center", padding: "0 0 25px" }}
                >
                    <Grid item xs={12} sm={6} md={6} sx={{ textAlign: "center", }}>
                        <SectionTitle>
                            {groupsTitle[2]}
                        </SectionTitle>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "450px",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            {providersAndManufactures.map(({ name }) => {
                                return (
                                    <Box item xs={12} sm={4} md={4} key={name}>
                                        <ModifiedRectangularTextContainer text={name} Color={theme.palette.paste.contrastText} BGColor={theme.palette.primary.main} />
                                    </Box>)
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Container>


        </Box>
    )
};

export default Section3;