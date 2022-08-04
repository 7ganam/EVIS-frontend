import { Box } from "@mui/system";
import React from "react";
import Image from "components/BazarImage";
import { H2, H4 } from "components/EvComponents/Typography";

const RoundedImage = (props) => {
    return (
        <Box sx={{
            padding: "10px", backgroundColor: props.bgColor,
            borderRadius: "7px",
        }}>
            <Box sx={{ textAlign: "center", }}>
                <Image
                    sx={{
                        display: "block",
                        margin: "0 auto", 
                        pb : 6,
                        borderRadius: "50%"
                    }}
                    alt="rounded image"
                    src={props.Src}
                />
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <H2 sx={{ fontWeight: "bold", fontSize: "medium" }}>{props.Name}</H2>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <H4 sx={{ fontWeight: "regular", fontSize: "medium" }}>{props.Title}</H4>
            </Box>
        </Box>
    )
}

export default RoundedImage;