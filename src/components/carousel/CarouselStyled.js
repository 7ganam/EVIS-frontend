import { styled } from "@mui/material";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slider,
} from "pure-react-carousel"; // StyledCarouselProvider and StyledSlider component props type

// common styles for arrow back and next button
const commonArrowBtnStyle = ({
  theme,
  showDots,
  dot_margin_top,
  showArrowOnHover,
}) => ({
  width: 40,
  border: 0,
  height: 40,
  borderRadius: "50%",
  alignItems: "center",
  position: "absolute",
  justifyContent: "center",
  transform: "translateY(-50%)",
  display: showArrowOnHover ? "none" : "flex",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  top: `calc(50% - ${showDots ? dot_margin_top : "0px"})`,
  "&:disabled": {
    background: theme.palette.text.disabled,
    color: theme.palette.secondary.main,
    cursor: "not-allowed",
  },
  "&:hover:not(:disabled)": {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  [theme.breakpoints.down("xs")]: {
    display: "block !important",
  },
}); // styled components

const StyledCarouselProvider = styled(CarouselProvider)(({ spacing }) => ({
  position: "relative",
  minWidth: 0,
  "& .focusRing___1airF.carousel__slide-focus-ring": {
    outline: "none !important",
  },
  "& .carousel__inner-slide": {
    margin: "auto",
    width: `calc(100% - ${spacing || "0px"})`,
  },
  "&:hover $arrowButton": {
    display: "flex",
  }, // "& .fade-animation": {
  //   transition: "opacity 1500ms",
  // },
  // "& .hide": {
  //   transition: "opacity 1500ms",
  //   opacity: 0,
  // },
  // "& .show": {
  //   transition: "opacity 1500ms",
  //   opacity: 1,
  // },
}));
const StyledSlider = styled(Slider)(({ spacing }) => ({
  marginLeft: `calc(-1 * ${spacing || "0px"} / 2)`,
  marginRight: `calc(-1 * ${spacing || "0px"} / 2)`,
}));
const StyledDotGroup = styled(DotGroup)(({ dot_margin_top }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: dot_margin_top || "0px",
}));
const StyledDot = styled("div")(({ dot_color, dot_active, theme }) => ({
  width: 16,
  height: 16,
  borderRadius: 300,
  margin: "0.25rem",
  cursor: "pointer",
  position: "relative",
  border: `1px solid ${dot_color || theme.palette.secondary.main}`,
  "&:after": {
    width: 9,
    height: 9,
    top: "50%",
    left: "50%",
    content: '" "',
    borderRadius: 300,
    position: "absolute",
    transform: `translate(-50%, -50%) scaleX(${dot_active ? 1 : 0})`,
    backgroundColor: dot_color || theme.palette.secondary.main,
  },
}));
const StyledArrowBackButton = styled(ButtonBack)(
  ({ theme, showArrowOnHover, showDots, dot_margin_top }) => ({
    ...commonArrowBtnStyle({
      theme,
      showDots,
      showArrowOnHover,
      dot_margin_top,
    }),
    [theme.breakpoints.down("md")]: {
      height: "36px",
      width: "36px",
      left: "-12px",
    },
  })
);
const StyledArrowNextButton = styled(ButtonNext)(
  ({ theme, showArrowOnHover, showDots, dot_margin_top }) => ({
    ...commonArrowBtnStyle({
      theme,
      showDots,
      showArrowOnHover,
      dot_margin_top,
    }),
    [theme.breakpoints.down("md")]: {
      height: "36px",
      width: "36px",
      right: "-12px",
    },
  })
);
export {
  StyledDot,
  StyledSlider,
  StyledDotGroup,
  commonArrowBtnStyle,
  StyledCarouselProvider,
  StyledArrowBackButton,
  StyledArrowNextButton,
};
