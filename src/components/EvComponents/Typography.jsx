import { Box, styled } from "@mui/material";
import clsx from "clsx";
import React from "react";
const StyledBox = styled(Box)(({ textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : "",
}));
export const H1 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="30px"
      fontWeight="500"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const H2 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h2"
      mb={0}
      mt={0}
      fontSize="25px"
      fontWeight="400"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const H3 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h3"
      mb={0}
      mt={0}
      fontSize="20px"
      fontWeight="500"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const H4 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h4"
      mb={0}
      mt={0}
      fontSize="17px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const H5 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h5"
      mb={0}
      mt={0}
      fontSize="16px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const H6 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="h6"
      mb={0}
      mt={0}
      fontSize="14px"
      fontWeight="600"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const Paragraph = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="p"
      mb={0}
      mt={0}
      sx={{ fontSize: "20px", lineHeight: "1.5em", fontWeight: "500" }}
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const Small = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="small"
      fontSize="12px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const Span = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="span"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
export const Tiny = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || ""]: true,
      })}
      component="small"
      fontSize="10px"
      lineHeight="1.5"
      {...props}
    >
      {children}
    </StyledBox>
  );
};
