import { Box, styled, useTheme, Grid, Container } from "@mui/material";
import EvLayout from "components/layouts/EvLayout";
import api from "utils/api/grocery3-shop";
import Landing from "pages-sections/conference-page-sections/Landing";
import LandingText from "pages-sections/conference-page-sections/LandingText";
import RoundedImagesSection from "components/EvSections/RoundedImagesSection";
import SponsorsImageGridSection from "components/EvSections/SponsorsImageGridSection";
import SponsorsGrid from "components/EvSections/SponsorsGrid";
import PartnersGrid from "components/EvSections/PartnersGrid";
import {
    SectionTitle,
    BlockTitle,
} from "components/EvComponents/StyledTypography";



// ======================================================
// ======================================================
let imagesData = [
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 1",
        title: "Head Manager 1"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 2",
        title: "Head Manager 2"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 3",
        title: "Head Manager 3"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 4",
        title: "Head Manager 4"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 5",
        title: "Head Manager 5"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 6",
        title: "Head Manager 6"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 7",
        title: "Head Manager 7"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 8",
        title: "Head Manager 8"
    },
];



const GeneralPage = (props) => {
    const { offerProducts, allProducts, topSailedProducts } = props;
    const theme = useTheme();

    return (
        <EvLayout showNavbar={true}>
            <Box margin="-30px 0 40px" padding="15px 0 5px">
                <SectionTitle>SPEAKERS</SectionTitle>
            </Box>
            <Container maxWidth="false" sx={{
                backgroundColor: theme.palette.primary.main,
                margin: "0",
                textAlign: "center",
            }}>
                <Container>
                    <RoundedImagesSection Data={imagesData} backgroundColor={theme.palette.paste.contrastText} Spacing={3} md={3} />
                </Container>
            </Container>
            <Container
            >
                <SponsorsGrid />
                <PartnersGrid />
            </Container>
        </EvLayout>
    );
};

export async function getStaticProps() {
    const allProducts = await api.getGrocery3Products();
    const offerProducts = await api.getGrocery3offerProducts();
    const topSailedProducts = await api.getTopSailedProducts();
    return {
        props: {
            allProducts,
            offerProducts,
            topSailedProducts,
        },
    };
}
export default GeneralPage;
