import { Box } from "@mui/system";
import React from "react";
import Image from "components/BazarImage";
import { H2, H4 } from "components/EvComponents/Typography";

const RoundedImage = (props) => {
    return (
        <Box sx={{ padding: "10px" }}>
            <Box sx={{ textAlign: "center", }}>
                <Image
                    sx={{
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                    alt="rounded image"
                    src={props.Src}
                    width={"100%"}
                    height={"100%"}
                />
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "10px" }}>
                <H2 sx={{ fontWeight: "bold", fontSize: "medium" }}>{props.Name}</H2>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <H4 sx={{ fontWeight: "regular", fontSize: "medium" }}>{props.Title}</H4>
            </Box>
        </Box>
    )
}

export default RoundedImage;