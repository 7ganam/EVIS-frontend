import { Box, Button, Grid, styled, useTheme } from "@mui/material";


const GridItemTwo = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
    marginTop: "4rem",
    fontSize: "18px",
    fontWeight: "500",
}));

const Section2 = () => {
    return (
        <GridItemTwo >
            <p >Abu Dhabi has been selected as the venue to launch the 1st Electric Vehicle Innovation Summit . The capital of the United Arab Emirates, Abu Dhabi is a business-centric hub, strategically located at the heart of the energy evolution and the application of innovative solutions including the electrical vehicles. With its ‘Economic Vision 2030’ and ‘UAE Energy Strategy 2050’ the UAE government strongly supports a conducive platform towards innovation, cost efficiencies in the energy sector, investor friendly regulations and responsible governance. The Emirate also has easy access to developing markets, with more than 200 air routes, 150 shipping lanes and world-class, fully integrated port and logistics’ infrastructure.
                <br /><br />
                With its booming metropolis, Abu Dhabi is bustling with tourism and trade and recognized throughout the Arabian Gulf region for its balance of business and cultural offerings. It is a vibrant emirate rich with history and heritage which is reflected in the variety of activities available both on land and at sea. Abu Dhabi’s history stretches back as far as 7,000 years – the Oasis city of Al Ain is the Abu Dhabi’s heritage heartland and a UNESCO World Heritage Site.</p>
        </GridItemTwo>
    )
}

export default Section2;