import React, { useEffect, useState } from "react";
import moment from "moment";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const CoutnerBox = styled("span")(({ theme }) => ({
  border: "1px solid black",
  borderRadius: "10px",
  padding: "10px",
  margin: "5px",
  backgroundColor: "black",
  color: "white",
}));

const targetTime = moment("2023-01-01");

export const CountdownMonths = (props) => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box {...props}>
        {/* <span>{timeBetween.years()}yr </span> */}
        <CoutnerBox>{timeBetween.months()}m</CoutnerBox>
        <span>{":"}</span>
        <CoutnerBox>{timeBetween.days()}d</CoutnerBox>
        <span>{":"}</span>
        <CoutnerBox>{timeBetween.hours()}h</CoutnerBox>
        <span>{":"}</span>
        <CoutnerBox>{timeBetween.minutes()}min</CoutnerBox>
        <span>{":"}</span>
        <CoutnerBox>{timeBetween.seconds()}s</CoutnerBox>
      </Box>
    </>
  );
};
