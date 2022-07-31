import React from "react";
import { Box } from "@mui/material";
import { H3, Paragraph } from "components/EvComponents/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Divider } from '@mui/material';
import { useTheme } from "@mui/material";


const FeedbackQuote = (props) => {
    const theme = useTheme();
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            margin: "5px 10px 0",
            height: "240px",

        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "0",
            }}>
                <FormatQuoteIcon sx={{
                    transform: "rotate(180deg)",
                    color: theme.palette.secondary.main,
                    fontSize: "60px",
                    marginLeft: "-12px",
                }} />
                <Box sx={{
                    margin: "10px",
                }}>
                    <hr width="55px" height="1px" border="none" />
                </Box>
            </Box>

            <Paragraph sx={{
                fontSize: "medium",
                fontWeight: "medium",
                lineHeight: "20px",
                fontStyle: "italic",
                color: theme.palette.paste.contrastText,
                marginBottom: "auto"
            }}>
                {props.Quote}
            </Paragraph>
            <H3 sx={{
                fontSize: "large",
                fontWeight: "bold",
                lineHeight: "20px",
                color: theme.palette.paste.contrastText,
            }}> {props.Name}</H3>
            <Paragraph sx={{
                fontSize: "medium",
                fontWeight: "medium",
                lineHeight: "20px",
                color: theme.palette.paste.contrastText,
            }}>
                {props.Position}
            </Paragraph>

        </Box>
    )
};

export default FeedbackQuote;