import { H1 } from "components/Typography";
import { Box, Button, Grid, styled, useTheme } from "@mui/material";


const StyledGrid = styled(Grid)(({ theme }) => ({
    margin: "auto",
    maxWidth: 1200,
    position: "relative",
    alignItems: "center",
    padding: "2rem 0px 5rem 0px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
    padding: 20,
    "& .titleBox": {
        marginBottom: 30,
        "& h1": {
            fontSize: 35,
            lineHeight: 1.3,
        },
    },
    [theme.breakpoints.down("md")]: {
        "& .titleBox": {
            "& h1": {
                fontSize: 30,
            },
        },
    },
    [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        "& .titleBox": {
            textAlign: "center",
            "& h1": {
                fontSize: 25,
            },
        },
    },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const Goal = () => {
    return (
        // <Box>test</Box>
        <StyledGrid>
            <GridItemOne>
                <img src="/assets/images/why-abu-dhabi/economy-environment2.jpg" width="400px" alt="" />
            </GridItemOne>
            <GridItemTwo>
                <H1>Dummy Headline</H1>
                <p>Estidama, the Arabic word for sustainability, is the sustainability initiative of the Abu Dhabi Urban Planning Council (UPC). Abu Dhabi’s Plan 2030 establishes a clear vision for sustainability as the foundation of any new development occurring in the Emirate of Abu Dhabi.The purpose of Estidama is to create a new sustainability framework that will direct the current course of development while allowing adaptation as new understanding evolves. Its ultimate goal is to create an ever-improving quality of life for the residents of the Emirate on four equal pillars of sustainability: environmental, economic, social, and cultural.</p>
            </GridItemTwo>
        </StyledGrid>
    )
}

export default Goal;