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
    // dataAos: "fade-up",
    // dataAosDuration: "500",
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
    paddingLeft: "2rem",
}));

const Goal = (props) => {
    if (props.reversed) {
        return (
            <StyledGrid data-aos="fade-up"
                data-aos-duration={1000}>
                <GridItemTwo >
                    <H1>{props.headline}</H1>
                    <p>{props.paragraph}</p>
                </GridItemTwo>
                <GridItemOne>
                    <img src={props.imageSrc} width="400px" alt="" />
                </GridItemOne>
            </StyledGrid>
        )
    }

    return (
        <StyledGrid data-aos="fade-up"
            data-aos-duration={1000}>
            <GridItemOne>
                <img src={props.imageSrc} width="400px" alt="" />
            </GridItemOne>
            <GridItemTwo>
                <H1>{props.headline}</H1>
                <p>{props.paragraph}</p>
            </GridItemTwo>
        </StyledGrid>
    )
}

export default Goal;