import React from "react";
import { Box } from "@mui/system";
import Image from "components/BazarImage";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "components/EvComponents/Typography";
import { Button, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import TodayIcon from '@mui/icons-material/Today';

const NewsCard = (props) => {
    const theme = useTheme();
    return (
        <Box sx={{ width: "270px", textAlign: "center", boxShadow: 5, height: "100%", display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "stretch", }}>
            <Box sx={{ border: "1px solid #cccccc", display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "stretch", height: "100%", }}>

                <Image alt="news image" src={props.srcImage} sx={{ width: "100%", marginBottom: "10px" }} />

                <H5 sx={{ lineHeight: "17px", height: "100%", margin: "10px 4px auto" }}>{props.header.slice(0, 75) + '...'}</H5>

                <Paragraph sx={{ alignText: "center", margin: "13px auto", }}><TodayIcon sx={{ fontSize: "medium", marginRight: "5px", verticalAlign: "middle", }} />{props.date}</Paragraph>
            </Box>
            {/* <Divider /> */}
            <Box sx={{ backgroundColor: theme.palette.grey[200], padding: "12px 15px", borderRight: "1px solid #cccccc", borderLeft: "1px solid #cccccc", }}>
                {/* <Button></Button> */}
                <Button variant="outlined" sx={{ width: "100%" }}>Know More</Button>
            </Box>

        </Box>
    )
};

export default NewsCard;