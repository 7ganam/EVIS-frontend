import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import FullWidthCard from "src/components/EvComponents/FullWidthCard";
// import { SectionTitle, BlockTitle } from "src/components/EvComponents/StyledTypography";

const cardsData = [
  {
    imageSource: "/assets/images/whitepaper.png",
    author: "Musashi Engineering, Inc.",
    title:
      "Automotive Electronics for Manufacturing Automobile Components Dispensing Solutions",
    content:
      "In recent years, automobiles have rapidly become integrated with electronics, and the number of on-board electronic components in those vehicles has only increased. Main motors that take the place of engines and various HUDs and CIDs, as well as cameras, sensors, and radar systems, and so forth, that are becoming commonplace as ADAS becomes commercialized. The coming of the age of trillion sensors has particularly changed the world.",
    link: "www.google.com",
  },
  {
    imageSource: "/assets/images/whitepaper.png",
    author: "Musashi Engineering, Inc.",
    title:
      "Automotive Electronics for Manufacturing Automobile Components Dispensing Solutions",
    content:
      "In recent years, automobiles have rapidly become integrated with electronics, and the number of on-board electronic components in those vehicles has only increased. Main motors that take the place of engines and various HUDs and CIDs, as well as cameras, sensors, and radar systems, and so forth, that are becoming commonplace as ADAS becomes commercialized. The coming of the age of trillion sensors has particularly changed the world.",
    link: "www.google.com",
  },
];

const FullWidthCardsSection = () => {
  return (
    <Grid>
      {cardsData.map(({ imageSource, author, title, content, link }) => {
        return (
          <FullWidthCard
            key={author}
            ImageSrc={imageSource}
            Author={author}
            Title={title}
            Content={content}
            Link={link}
          />
        );
      })}
      {/* <FullWidthCard /> */}
    </Grid>
  );
};

export default FullWidthCardsSection;
