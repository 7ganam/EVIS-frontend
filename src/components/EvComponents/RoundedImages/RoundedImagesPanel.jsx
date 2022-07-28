import React from "react";
import RoundedImage from "./RoundedImage";
import { Grid, Item } from "@mui/material"

const imagesData = [
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

const RoundedImagesPanel = () => {
    return (
        <Grid container columns={{ xs: 1, sm: 3, md: 6 }} sx={{ padding: "35px" }}>

            {Array.from(imagesData).map((_, index) => (
                <Grid item xs={12} sm={1} md={1} key={index}>
                    <RoundedImage Src={imagesData[index].imageSrc} Name={imagesData[index].name} Title={imagesData[index].title} />
                </Grid>
            ))}

            {/* <Grid item xs={12} sm={1} md={1}>
                <RoundedImage Src="/assets/images/faces/face-7.jpg" Name="Test Speaker 1" Title="Test Title 1" />
            </Grid> */}
        </Grid>

    )
}

export default RoundedImagesPanel;