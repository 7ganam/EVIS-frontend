import { Box } from "@mui/system";
import React, { useState } from "react";
import Image from "components/BazarImage";
import { H1, H2, H3, H4, H5, H6, Paragraph } from "components/EvComponents/Typography";

const ModifiedRoundedImage = (props) => {

    const [show, setShow] = useState(false);
    return (

        <Box sx={{
            padding: "18px 0",
            backgroundColor: props.bgColor,
            borderRadius: "7px",
            height: "100%",
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            // alignItems: "center",
        }}>
            <Box sx={{ textAlign: "center", }}>
                <Image
                    sx={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        // padding: "30px 60px"
                        width: "120px",
                        height: "120px",
                        margin: "10px auto"
                    }}
                    alt="rounded image"
                    src={props.Src}
                    width={"100%"}
                    height={"100%"}
                />
            </Box>
            <Box sx={{ textAlign: "center" }}>
                <H1 sx={{ fontWeight: "bold", fontSize: "medium" }}>{props.Name}</H1>
            </Box>

            <Box sx={{ textAlign: "center", padding: "0 10px", }}>
                <H6 sx={{ fontSize: "small" }}>{props.Title}</H6>
            </Box>
            <Box sx={{ textAlign: "center", padding: "0 10px", margin: "0 0 auto", }}>
                <H6 sx={{ fontWeight: "regular", fontSize: "small" }}>{props.Company}</H6>
            </Box>
        </Box>
    )
}

export default ModifiedRoundedImage;