import { Box } from "@mui/material";
import { H1 } from "components/Typography";

const Section1 = () => {
    return (
        <Box sx={{
            background: "url(/assets/images/why-abu-dhabi/Abu-Dhabi-skyline.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            // filter: "blur(4px)",
            // backdropFilter: "blur(4px)",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "-1",
        }}
        >
            <H1 color="white" fontSize="80px" textAlign="center" verticalAlign="middle"
            >
                WHY ABU DHABI?
            </H1>
        </Box>
    )
}

export default Section1;