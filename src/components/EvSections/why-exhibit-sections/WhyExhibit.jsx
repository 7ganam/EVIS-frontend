import React from "react";
import { Box } from "@mui/material";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";

const item = {
  img: "https://res.cloudinary.com/drf11lmmn/image/upload/v1672592611/DSC_08355_70a818dd22_65159164aa.jpg",
  title: "Connect, Showcase, Drive Sustainability!",
  ps: `Welcome to the EV Innovation Summit, where the future of electric vehicles takes center stage. This premier event provides a platform for showcasing the latest advancements in electric mobility. You’ll have the opportunity to connect with decision-makers, partners, and customers from around the world and showcase your cutting-edge electric vehicles and solutions to a targeted audience of industry professionals and investors. Join engaging discussions, stay informed about industry trends, and demonstrate your commitment to sustainability by showcasing at the EV Innovation Summit.`,
};

const WhyExhibit = (props) => {
  const whyExhibit = props.whyExhibit;
  return (
    <Box>
      <Box mt={"30px"} mb={"20px"}>
        <SectionTitle>Why Exhibit </SectionTitle>
      </Box>
      <TwoColumnBoxV2 item={item} />
      <Box mt={"20px"}>
        {" "}
        {/* <TwoColumnBoxV2 item={props.futureOfMobility} imgPosition={"left"} /> */}
      </Box>
    </Box>
  );
};

export default WhyExhibit;
