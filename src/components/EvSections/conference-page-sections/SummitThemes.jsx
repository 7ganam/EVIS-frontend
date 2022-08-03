import React from "react";
import TwoColumnBox from "components/EvComponents/TwoColumnBox";
import { Box } from "@mui/material";
import { SectionTitle } from "components/EvComponents/StyledTypography";

const SummitThemes = (props) => {
  const data = props.data;
  return (
    <Box
      sx={{
        pt: 1,
        // px : 6
      }}
    >
      <SectionTitle>Summit Themes </SectionTitle>

      {data.map((item, index) => {
        return <TwoColumnBox key={index} item={item} />;
      })}
    </Box>
  );
};

export default SummitThemes;
