import React from "react";
import RoundedImage from "components/EvComponents/RoundedImage";
import { Grid } from "@mui/material"

let imagesData = [
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 1",
        title: "Head Manager 1"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 2",
        title: "Head Manager 2"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 3",
        title: "Head Manager 3"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 4",
        title: "Head Manager 4"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 5",
        title: "Head Manager 5"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 6",
        title: "Head Manager 6"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 7",
        title: "Head Manager 7"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 8",
        title: "Head Manager 8"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 9",
        title: "Head Manager 9"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 10",
        title: "Head Manager 10"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 11",
        title: "Head Manager 11"
    },
    {
        imageSrc: "/assets/images/faces/face-7.jpg",
        name: "Speaker 12",
        title: "Head Manager 12"
    },
];

const RoundedImagesSection = (props) => {
    if (props.Data) {
        imagesData = props.Data;
    }
    return (
        <Grid container spacing={props.Spacing} sx={{ padding: "35px", textAlign: "center", placeItems: "center", }}>
            {imagesData.map(({ imageSrc, name, title }) => {
                return (
                    <Grid item xs={12} sm={4}
                        md={props.md ? props.md : 2} key={name}>
                        <RoundedImage Src={imageSrc} Name={name} Title={title} bgColor={props.backgroundColor} />
                    </Grid>)
            })}
        </Grid>
    )
}

export default RoundedImagesSection;