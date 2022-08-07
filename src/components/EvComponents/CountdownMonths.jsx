import React, { useEffect, useState } from "react";
import moment from "moment";
import { Box } from "@mui/system";

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
        <span>{timeBetween.months()}m </span>
        <span>{" : "}</span>
        <span>{timeBetween.days()}d </span>
        <span>{" : "}</span>
        <span>{timeBetween.hours()}h </span>
        <span>{" : "}</span>
        <span>{timeBetween.minutes()}min </span>
        <span>{" : "}</span>
        <span>{timeBetween.seconds()}s </span>
      </Box>
    </>
  );
};
