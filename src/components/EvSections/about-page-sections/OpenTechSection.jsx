import React from "react";
import TwoColumnBoxV2 from "src/components/EvComponents/TwoColumnBoxV2";
import { Grid, Box, useTheme } from "@mui/material";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import YoutubeEmbed from "src/components/YoutubeEmbed";
import { Paragraph } from "src/components/EvComponents/Typography";
import Videos from "src/components/EvSections/new-page-sections/Videos";
const videosList = [
  {
    youtube:
      "https://www.youtube.com/watch?v=BpyJxxkFytY&list=PLZmjl1dQxsOVKeNWFUIwkIGoSOfE4uPQb&index=1&ab_channel=EVIS",
  },
  {
    youtube:
      "https://www.youtube.com/watch?v=PrS08I6_1tc&list=PLZmjl1dQxsOVKeNWFUIwkIGoSOfE4uPQb&index=3&ab_channel=EVIS",
  },
  {
    youtube:
      "https://www.youtube.com/watch?v=cAVSfB97FwI&list=PLZmjl1dQxsOVKeNWFUIwkIGoSOfE4uPQb&index=3&ab_channel=EVIS",
  },
  {
    youtube:
      "https://www.youtube.com/watch?v=tj2qVkh42R8&list=PLZmjl1dQxsOVKeNWFUIwkIGoSOfE4uPQb&index=4&ab_channel=EVIS",
  },
  {
    youtube:
      "Navigating EV Charging Infrastructure ;Providing Access to EV Charging from Homes to Highways",
  },
  {
    youtube:
      "https://www.youtube.com/watch?v=ZBl00Gja9Ow&list=PLZmjl1dQxsOVKeNWFUIwkIGoSOfE4uPQb&index=7&ab_channel=EVIS",
  },
];
const OpenTechSection = (props) => {
  const theme = useTheme();
  const item = props.item;
  const videos = props.videos;
  return (
    <Box id={"open-tech"} sx={{ scrollMarginTop: "250px" }}>
      <Box sx={{ mt: "40px", mb: "20px" }}>
        <SectionTitle>Open Tech Sessions</SectionTitle>
      </Box>
      <Box sx={{ mb: "40px" }}>
        <TwoColumnBoxV2
          item={item}
          imgPosition="left"
        ></TwoColumnBoxV2>
      </Box>
      <Box mt={5}>
        <Videos videosList={videos} />
      </Box>
    </Box>
  );
};

export default OpenTechSection;
