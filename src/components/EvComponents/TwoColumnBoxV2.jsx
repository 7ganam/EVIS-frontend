import React from "react";
import { Grid, Box } from "@mui/material";
import { BlockTitle } from "components/EvComponents/StyledTypography";
import { Paragraph } from "components/EvComponents/Typography";
import Image from "components/BazarImage";

// const item = {
//   img: "https://di9mr54a05a64.cloudfront.net/api-ntravel.expoplatform.com/image/1200x0/MTYzMTc5NzcxODYxNDM0MWQ2M2VhYWQ=.jpeg",
//   title: "New Energy Vehicles",
//   ps: [
//     "Electric Passenger Vehicles",
//     "Electric Light Vehicles",
//     "Electric Commercial Vehicles",
//     "Electric Motorcycles",
//     "Electric Scooters",
//     "Electric Bicycles",
//     "Hybrid Electric Vehicles",
//     "Fuel Cell Electric Vehicles",
//   ],
// };

const TwoColumnBoxV2 = ({ item, imgPosition }) => {
  const { img, title, ps } = item;
  return (
    <Box sx={{}}>
      <Grid
        container
        rowSpacing={{ xs: "0", md: "0" }}
        columnSpacing={{ xs: "0", md: "0" }}
        direction={{
          xs: "column",
          md: imgPosition === "left" ? "row" : "row-reverse",
        }}
      >
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{}}>
            <Image
              width={"100%"}
              mb={0}
              src={img}
              alt="logo"
              sx={{ objectFit: "cover", aspectRatio: " 16 / 10" }}
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ pl: { md: "20px" } }}>
            <BlockTitle> {title} </BlockTitle>
            {ps?.map((item, index) => {
              return (
                <Box sx={{ pt: 1 }} key={index}>
                  <Paragraph>{item}</Paragraph>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnBoxV2;
