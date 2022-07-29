import { Box } from "@mui/system";
import React from "react";
import Image from 'next/image';
import { Grid } from "@mui/material";

const SponsorImage = (props) => {
    return (
        <Box sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px"
        }}>
            <img src={props.imageSrc}
                width={"150px"}
                // height={"50px"}
                alt="sponsor logo"
                sx={{
                    // objectFit: "cover" 
                }}
            />
        </Box>
    )
}

export default SponsorImage;