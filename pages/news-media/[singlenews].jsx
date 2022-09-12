import EvLayout from "src/components/layouts/EvLayout";
import { useRouter } from "next/router";
import { Container, Grid, Box } from "@mui/material";
import { H2, H4, H5, Paragraph } from "src/components/EvComponents/Typography";
import TodayIcon from "@mui/icons-material/Today";
import { useTheme } from "@emotion/react";

import Image from "src/components/BazarImage";

const newsList = [
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15",
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/",
        title: "Time for the Middle East to go electric How and why",
        date: "2022-08-08",
    },
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15",
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/",
        title: "'Time for the Middle East to go electric? How and why?'",
        date: "2022-08-08",
    },
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15",
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/",
        title: "Time for the Middle East to go electric? How and why?",
        date: "2022-08-08",
    },
    {
        img: "/assets/images/news-page/2.png",
        content:
            "EVIS features important discussions on how cities can be more sustainable by lowering transport emissions & build the right infrastructure & policy framework for a sustainable & just mobility sector.",
        buttonText: "READ MORE",
        buttonLink: "/",
        title:
            "EVIS Reveals Policy, Infrastructure and Behavior: Towards a mobility paradigm shift in MENA Cities",
        date: "2022-08-15",
    },
    {
        img: "/assets/images/news-page/1.png",
        content: "An informative article on EV Adoption in the Middle East",
        buttonText: "READ MORE",
        buttonLink: "/",
        title: "Time for the Middle East to go electric? How and why?",
        date: "2022-08-08",
    },
];

const SpeakerPage = () => {
    const router = useRouter();
    const theme = useTheme();

    const filterName = router.query.singlenews;
    const nameData = newsList.filter((item) => item.title === filterName)[0];
    if (!nameData) {
        return (
            <Box pt={20}>
                <Container mb={6}>
                    <Box
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        <H2>Loading ...</H2>
                    </Box>
                </Container>
            </Box>
        );
    }

    // console.log(nameData);

    return (
        <EvLayout showNavbar={true} title={nameData.name}>
            <Box py={5}>
                <Container mb={6}>
                    <Grid
                        container
                        sx={{
                            boxShadow: "1px 1px 5px 1px gray",
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            sx={{
                                backgroundColor: "#f0f0f0",
                                borderRight: " solid 1px #d9d9d9",
                            }}
                        >
                            <Box
                                sx={{
                                    my: "1em",
                                    mx: "1em",
                                }}
                            >
                                <Image
                                    sx={{
                                        objectFit: "cover",
                                        // padding: "30px 60px"
                                        //   width: "120px",
                                        //   height: "120px",
                                        margin: "auto",
                                    }}
                                    alt="image"
                                    src={nameData.img}
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={8}
                            sx={{
                                backgroundColor: "#f0f0f0",
                                paddingTop: "15px",
                            }}
                        >
                            <Box ml={3} my={3} sx={{}}>
                                <H2>{nameData.title}</H2>
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                borderTop: "solid 1px #d9d9d9",
                                color: theme.palette.primary.main,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                JustifyContent: "center",
                                padding: "10px",
                            }}
                        >
                            <TodayIcon
                                sx={{
                                    fontSize: "40px",
                                    marginRight: "7px",
                                    marginLeft: "auto",
                                    verticalAlign: "middle",
                                    color: theme.palette.primary.main,
                                }}
                            />
                            <H4 sx={{ marginRight: "auto" }}>{nameData.date}</H4>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                borderTop: "solid 1px #d9d9d9",
                            }}
                        >
                            <Box mx={2} my={2} sx={{ margin: "30px" }}>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet. Quo veritatis unde aut sunt
                                    blanditiis sed veritatis tempore non reiciendis explicabo est
                                    tenetur consequuntur rem assumenda porro ea incidunt
                                    consectetur. Et rerum voluptates et tempora impedit qui nulla
                                    quod. Et quae quod aut minus nulla non corrupti voluptas! At
                                    earum nihil ut dolorem omnis et aliquid excepturi a fuga nulla
                                    aut sint iure et doloremque quo veniam consequatur. Est
                                    voluptatem voluptas et debitis omnis et blanditiis alias aut
                                    distinctio quia. Lorem ipsum dolor sit amet. Quo veritatis unde
                                    aut sunt blanditiis sed veritatis tempore non reiciendis
                                    explicabo est tenetur consequuntur rem assumenda porro ea
                                    incidunt consectetur. Et rerum voluptates et tempora impedit qui
                                    nulla quod. Et quae quod aut minus nulla non corrupti voluptas!
                                    At earum nihil ut dolorem omnis et aliquid excepturi a fuga
                                    nulla aut sint iure et doloremque quo veniam consequatur. Est
                                    voluptatem voluptas et debitis omnis et blanditiis alias aut
                                    distinctio quia.
                                </Paragraph>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </EvLayout>
    );
};

export default SpeakerPage;
