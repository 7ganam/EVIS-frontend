import { Box } from "@mui/system";
import React from "react";
import Image from "components/BazarImage";
import { Paragraph } from "components/EvComponents/Typography";
import { H1, H2, H3, H4 } from "components/EvComponents/Typography";
// import { BlockTitle } from "components/EvComponents/StyledTypography";

const RoundedImage = () => {
    return (
        <Box sx={{ padding: "10px" }}>
            <Box sx={{ textAlign: "center", }}>
                <Image
                    sx={{
                        display: "block",
                        margin: "0 auto", borderRadius: "50%"
                    }}
                    alt="rounded image"
                    src="/assets/images/faces/face-7.jpg"
                />
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <H2 sx={{ fontWeight: "bold", fontSize: "medium" }}>Avatar One</H2>
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <H4 sx={{ fontWeight: "regular", fontSize: "medium" }}>Head of Company one</H4>
            </Box>
        </Box>
    )
}

export default RoundedImage;