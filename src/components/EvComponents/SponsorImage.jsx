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
                alt="sponsor logo"
            />
        </Box>
    )
}

export default SponsorImage;