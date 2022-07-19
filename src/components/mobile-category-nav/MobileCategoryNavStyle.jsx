import { styled } from "@mui/material/styles";
import { layoutConstant } from "utils/constants";
const MobileCategoryNavStyle = styled("div")(({ theme }) => ({
  position: "relative",
  "& .header": {
    top: 0,
    left: 0,
    right: 0,
    position: "fixed",
  },
  "& .main-category-holder": {
    left: 0,
    position: "fixed",
    overflowY: "auto",
    background: theme.palette.grey[300],
    top: layoutConstant.mobileHeaderHeight,
    bottom: layoutConstant.mobileNavHeight,
    "& .main-category-box": {
      width: "90px",
      height: "80px",
      display: "flex",
      cursor: "pointer",
      padding: "0.5rem",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      borderBottom: "1px solid",
      borderLeftColor: theme.palette.grey[600],
      borderBottomColor: theme.palette.grey[300],
    },
  },
  "& .container": {
    left: "90px",
    flex: "1 1 0",
    position: "fixed",
    overflowY: "auto",
    padding: "0.5rem 1rem",
    top: layoutConstant.mobileHeaderHeight,
    bottom: layoutConstant.mobileNavHeight,
  },
  "& .ellipsis": {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));
export default MobileCategoryNavStyle;
