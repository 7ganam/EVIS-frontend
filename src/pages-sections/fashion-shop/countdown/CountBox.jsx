import { H3, Span } from "components/Typography";
import React from "react"; // component props interface

const CountBox = ({ digit, title }) => {
  return (
    <H3>
      {digit}{" "}
      <Span color="grey.600" fontSize="14px" fontWeight="600">
        {title}
      </Span>
    </H3>
  );
};

export default CountBox;
CountBox.defaultProps = {
  digit: 365,
  title: "DAYS",
};
