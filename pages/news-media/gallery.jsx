import React from "react";
import EvLayout from "components/layouts/EvLayout";
import { Container, Grid, Box } from "@mui/material";
import api from "utils/api/grocery3-shop";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import Videos from "components/EvSections/new-page-sections/Videos";
import ExhibitionFeatures from "components/EvSections/why-exhibit-sections/ExhibitionFeatures";
import Press from "components/EvSections/new-page-sections/Press";
import Press2 from "components/EvSections/new-page-sections/Press2";
import Footer from "components/EvSections/why-exhibit-sections/Footer";
import NewsCard from "components/EvComponents/NewsCard";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { useTheme } from "@emotion/react";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "components/EvComponents/Typography";


// const Root = styled('div')(({ theme }) => ({
//   width: '100%',
//   ...theme.typography.body2,
//   '& > :not(style) + :not(style)': {
//     marginTop: theme.spacing(2),
//   },
// }));

const videosList = [
    { youtube: "tKfOCjdwaJ0" },
    { youtube: "Jw_MFPnYn7s" },
    { youtube: "CAKf5hgSZyU" },
    { youtube: "tKfOCjdwaJ0" },
    { youtube: "Jw_MFPnYn7s" },
    { youtube: "CAKf5hgSZyU" },
];

const featureList = [
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15"
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title: "Time for the Middle East to go electric? How and why?",
        date: "2022-08-08"
    },
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15"
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title: "Time for the Middle East to go electric? How and why?",
        date: "2022-08-08"
    },
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15"
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title: "Time for the Middle East to go electric? How and why?",
        date: "2022-08-08"
    },
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15"
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/news-media/event-gallery",
        title: "Time for the Middle East to go electric? How and why?",
        date: "2022-08-08"
    },
];

const news = [
    "Al Ittihad :  Abu Dhabi to host the Electric Vehicle Innovation Summit next May",
    "The National : Abu Dhabi to host MENA's first electric vehicle summit in May",
    "Khaleej Times: Audi, Mercedes, Tesla, GMC to feature in Mena's first-ever electric vehicle exhibition",
    "Al Watan: Announcing the 1st edition of Electric Vehicle Innovation Summit ",
    "Eye of Dubai: Announcing the First Edition of Electric Vehicle Innovation Summit in Abu Dhabi",
];
const news2 = [
    {
        img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/205x0/MTY0NjkxMDM4NDYyMjlkYmIwMzhiZjI=.png",
        content: "EVIS Featured in Al Ittihad",
    },
    {
        img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/205x0/MTY0NjkxMDQ1NzYyMjlkYmY5OWE2N2Y=.png",
        content: "Al Khaleej Features EVIS",
    },
    {
        img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/205x0/MTY0NjkxMDU0MTYyMjlkYzRkMzM2ZDQ=.png",
        content: "Al Bayan on EVIS2022",
    },
];

const footer1 = [
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQyODYxZjIzZDk0NjRmNjA=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ0ODYxZjIzZGE4N2NhZWM=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ3MzYxZjIzZGMxMDU2Mjc=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0MzI2NTQ4NTYxZjIzZGNkZTU0ODc=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTkyODYyMmIwMmM4OTk4YjE=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Njk4NTk2MTYyMmIwMmU5OGQ3MjA=.png",
    },
];

const footer2 = [
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjE0MjYxZmQyZDNlNGE3OWY=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEzMjYxZmQyZDM0NWQ4MzE=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjExMDYxZmQyZDFlNGVlMjY=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0Mzk4MjEyMzYxZmQyZDJiMGY1NTE=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk5NTYyMWM2MGYzZTVhODE=.png",
    },
    {
        source:
            "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/MTY0NjAyNjk4NDYyMWM2MGU4ZGVhYjI=.png",
    },
];

const EvHome = () => {
    const theme = useTheme();

    return (
        <EvLayout showNavbar={true} title={"Home"}>

            <Box sx={{ boxShadow: 5, width: "250px", margin: "20px auto 40px", padding: "1px 10px", borderRadius: "10px" }}>
                <SectionTitle>Gallery</SectionTitle>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "-13px 18px 17px",
                }}>
                    <Divider sx={{ border: "1px solid #bbc4c7", margin: "0", width: "40%", height: "1px", }} />
                    <Divider sx={{ border: "1px solid #55b4d4", margin: "0", width: "20%", height: "3px", backgroundColor: theme.palette.secondary.main }} />
                    <Divider sx={{ border: "1px solid #bbc4c7", margin: "0", width: "40%", height: "2px", }} />
                </Box>
            </Box>

            <Box sx={{
                display: "flex", flexDirection: "column", margin: "50px", textAlign: "center",
            }}>
                <Box><H3>{featureList[0].date.slice(0, 4)}</H3></Box>
                <br />
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "-13px 18px 17px",
                }}>
                    <Divider sx={{ border: "1px solid #bbc4c7", margin: "0", width: "47%", height: "1px", }} />
                    <Divider sx={{ border: "1px solid #55b4d4", margin: "0", width: "6%", height: "2px", backgroundColor: theme.palette.secondary.main }} />
                    <Divider sx={{ border: "1px solid #bbc4c7", margin: "0", width: "47%", height: "2px", }} />
                </Box>
            </Box>



            <Container
                sx={{
                    mb: 6,
                }}
            >
                <Grid container spacing={5} >
                    {featureList.map(({ img, title, date, buttonLink }) => {
                        return (
                            <Grid item xs={12} sm={4} md={3} key={title} >
                                <NewsCard srcImage={img} header={title} date={date} reference={buttonLink} />
                            </Grid>
                        )
                    })}
                </Grid>

                {/* <Box sx={{
                    display: "flex", flexDirection: "column", margin: "50px", textAlign: "center",
                }}>
                    <Box><SectionTitle>VIDEOS</SectionTitle></Box>
                    <br />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "-13px 18px 17px",
                    }}>
                        <Divider sx={{ border: "1px solid #bbc4c7", margin: "0", width: "47%", height: "1px", }} />
                        <Divider sx={{ border: "1px solid #55b4d4", margin: "0", width: "6%", height: "2px", backgroundColor: theme.palette.secondary.main }} />
                        <Divider sx={{ border: "1px solid #bbc4c7", margin: "0", width: "47%", height: "2px", }} />
                    </Box>
                </Box>

                <Videos videosList={videosList} /> */}
                {/* <ExhibitionFeatures data={featureList} /> */}
                {/* <Press data={news} /> */}
                {/* <Press2 data={news2} /> */}
                {/* <Footer footer1={footer1} footer2={footer2} /> */}
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

export default EvHome;
