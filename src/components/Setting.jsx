import { Close, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import useSettings from "hooks/useSettings";
import { useRouter } from "next/router";
import { useState } from "react";
import { FlexBox } from "./flex-box";
import { H6 } from "./Typography"; // custom styled components

const MainContainer = styled(Box)(({ theme }) => ({
  top: 50,
  right: 50,
  zIndex: 1501,
  position: "fixed",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  right: 50,
  zIndex: 99,
  bottom: 50,
  padding: 12,
  color: "#fff",
  position: "fixed",
  borderRadius: "50%",
  boxShadow: theme.shadows[12],
  backgroundColor: theme.palette.primary.main,
  ":hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));
const BodyWrapper = styled(Box)(({ theme, showBody }) => ({
  overflow: "auto",
  borderRadius: "4px",
  backgroundColor: "white",
  opacity: showBody ? 1 : 0,
  width: showBody ? 300 : 0,
  transition: "transform 0.4s",
  padding: showBody ? 24 : 0,
  boxShadow: theme.shadows[3],
  maxHeight: showBody ? "calc(100vh - 100px)" : 0,
  transform: `translateY(${showBody ? 0 : "10px"})`,
}));
const StyledAvatar = styled(Avatar)(() => ({
  flexGrow: 1,
  height: 100,
  width: "45%",
  cursor: "pointer",
  borderRadius: "10px",
  ":last-of-type": {
    flexGrow: 0,
  },
  ":hover": {
    "&::after": {
      opacity: 0.5,
    },
  },
  "::after": {
    opacity: 0,
    content: '""',
    width: "100%",
    height: "100%",
    background: "black",
    position: "absolute",
    transition: "all 0.3s",
  },
}));

const Setting = () => {
  const { push } = useRouter();
  const { updateSettings, settings } = useSettings();
  const [showBody, setShowBody] = useState(false);
  return (
    <ClickAwayListener onClickAway={() => setShowBody(false)}>
      <MainContainer>
        <Tooltip title="Settings & Demos" placement="left">
          <StyledIconButton onClick={() => setShowBody((state) => !state)}>
            {!showBody && <Settings />}
            {showBody && <Close />}
          </StyledIconButton>
        </Tooltip>

        <BodyWrapper showBody={showBody ? 1 : 0}>
          <FlexBox gap={2}>
            <Button
              fullWidth
              onClick={() =>
                updateSettings({
                  direction: "rtl",
                })
              }
              color={settings.direction === "rtl" ? "primary" : "secondary"}
              variant={settings.direction === "rtl" ? "contained" : "outlined"}
            >
              RTL
            </Button>

            <Button
              fullWidth
              onClick={() =>
                updateSettings({
                  direction: "ltr",
                })
              }
              color={settings.direction === "ltr" ? "primary" : "secondary"}
              variant={settings.direction === "ltr" ? "contained" : "outlined"}
            >
              LTR
            </Button>
          </FlexBox>

          <Divider
            sx={{
              my: 3,
            }}
          />

          <H6 textAlign="center" mb={2}>
            Bazar Demos
          </H6>

          <FlexBox gap={2} flexWrap="wrap">
            {demos.map((demo) => (
              <StyledAvatar
                key={demo.id}
                src={demo.img}
                onClick={() => push(demo.path)}
              />
            ))}
          </FlexBox>
        </BodyWrapper>
      </MainContainer>
    </ClickAwayListener>
  );
};

const demos = [
  {
    id: 1,
    path: "/superstore-shop",
    img: "/assets/images/landing/page-1.png",
  },
  {
    id: 2,
    path: "/grocery2",
    img: "/assets/images/landing/page-2.png",
  },
  {
    id: 3,
    path: "/fashion-shop",
    img: "/assets/images/landing/page-3.png",
  },
  {
    id: 4,
    path: "/gadget-shop",
    img: "/assets/images/landing/page-4.png",
  },
  {
    id: 5,
    path: "/furniture-shop",
    img: "/assets/images/landing/furniture.png",
  },
  {
    id: 6,
    path: "/gift-shop",
    img: "/assets/images/landing/gift-shop.png",
  },
  {
    id: 7,
    path: "/grocery1",
    img: "/assets/images/landing/grocery1.png",
  },
  {
    id: 8,
    path: "/grocery3",
    img: "/assets/images/landing/grocery3.png",
  },
  {
    id: 9,
    path: "/healthbeauty-shop",
    img: "/assets/images/landing/healthbeauty.png",
  },
];
export default Setting;
