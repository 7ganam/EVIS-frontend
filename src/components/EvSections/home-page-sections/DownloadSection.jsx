import { Box } from "@mui/system";
import React from "react";
import { Grid, styled } from "@mui/material";
import SponsorImage from "src/components/EvComponents/SponsorImage";
import {
  SectionTitle,
  BlockTitle,
} from "src/components/EvComponents/StyledTypography";
import TwoColumnBox from "src/components/EvComponents/TwoColumnBox";
import { BigButton } from "src/components/EvComponents/Buttons";
import { Button } from "@mui/material";
import { H3, Paragraph } from "src/components/EvComponents/Typography";
import Image from "src/components/BazarImage";
import RoundedImage from "src/components/EvComponents/RoundedImage";
import { useTheme } from "@mui/material";
import Card1 from "@/components/Card1";
import Link from "next/link";

const leftImg = "/assets/images/png_bg.png";

const StyledCard1 = styled(Card1)(({ theme }) => ({
  // backgroundImage: `url('${leftImg}')`,
  // backgroundSize: "contain",
}));
const DownloadSection = (props) => {
  return (
    <Box>
      <Box sx={{ mb: "0px", mt: "30px" }}>
        {" "}
        <SectionTitle>Participate</SectionTitle>
      </Box>
      <StyledCard1 sx={{ mt: "30px", p: "60px" }} elevation={2}>
        {" "}
        <Grid
          container
          spacing={3}
          columns={{ md: 10 }}
          sx={{
            textAlign: "center",
            placeItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {props.ButtonsData.map(({ text, url, type }) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={5}
                key={text}
                sx={{ width: "100%" }}
              >
                {type === "internalLink" && (
                  <Link href={url}>
                    <a>
                      <BigButton
                        sx={{
                          padding: "10px 40px",
                          height: "80px",
                          width: "100%",
                        }}
                        content={text}
                      ></BigButton>
                    </a>
                  </Link>
                )}
                {type === "download" && (
                  <a href={url} download>
                    <BigButton
                      sx={{
                        padding: "10px 40px",
                        height: "80px",
                        width: "100%",
                      }}
                      content={text}
                    ></BigButton>
                  </a>
                )}
              </Grid>
            );
          })}
        </Grid>
      </StyledCard1>
    </Box>
  );
};

export default DownloadSection;

{
  /* <Box sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            ButtonsData
            <Box padding="30px" >
                {props.ButtonsData.map(({ text }) => {
                    return (
                        <Button variant="outlined" key={text}>{text}</Button>
                    )
                }
                )}
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Download Sales Brochure</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Download Post Show Report</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Book Your Stand NO</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Register your interest to visit</Button>
            </Box>
            <Box margin="20px" width="100px">
                <Button variant="outlined">Delegate Registration</Button>
            </Box>

        </Box> */
}
