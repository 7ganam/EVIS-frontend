import { FlexBox } from "components/flex-box";
import React, { useCallback, useEffect, useState } from "react";
import CountBox from "./CountBox"; // component props interface

const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown = ({ expireDate }) => {
  const [timeLeft, setTimeLeft] = useState(initialState);
  const calculateTimeLeft = useCallback(() => {
    const distance = expireDate - new Date().getTime(); // if date expire

    if (distance < 0) return initialState;
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [expireDate]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);
  return (
    <FlexBox
      sx={{
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        height: "auto",
      }}
    >
      <CountBox digit={timeLeft.days} title="DAYS" />
      <CountBox digit={timeLeft.hours} title="HOURS" />
      <CountBox digit={timeLeft.minutes} title="MINS" />
      <CountBox digit={timeLeft.seconds} title="SECS" />
    </FlexBox>
  );
};

export default Countdown;
