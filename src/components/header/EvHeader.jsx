import { PersonOutline } from "@mui/icons-material";
import { Box, Dialog, styled, Button } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import Image from "components/BazarImage";
import { FlexBox } from "components/flex-box";
import MobileMenu from "components/navbar/MobileMenu";
import Link from "next/link";
import Login from "pages-sections/sessions/Login";
import { useState } from "react";
import { layoutConstant } from "utils/constants";
import SearchBox from "../search-box/SearchBox"; // styled component

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));
const StyledButton = styled(Button)(() => ({
  color: "#fff",
  fontWeight: 400,
  fontSize: "16px",
})); // ==============================================================

// ==============================================================
const Header = ({ className }) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          gap: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlexBox
          mr={2}
          minWidth="170px"
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <div>
            <Link href="/">
              <a>
                <Image
                  height={60}
                  mb={0}
                  src="/assets/images/EvLogo.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </FlexBox>
        <FlexBox
          sx={{ width: { xs: "100%", md: "600px" } }}
          justifyContent="center"
          flex="1 1 0"
        >
          {<SearchBox />}
        </FlexBox>
        <Box sx={{ flexGrow: { xs: 0, md: 1 } }}></Box>

        <FlexBox
          alignItems="center"
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box
            component={IconButton}
            p={1.25}
            bgcolor="grey.200"
            onClick={toggleDialog}
          >
            <PersonOutline />
          </Box>

          <Box ml={2.5} p={1.25} component={IconButton} onClick={toggleSidenav}>
            <StyledButton
              variant="contained"
              color="primary"
              sx={{
                px: "30px",
                py: "6px",
              }}
            >
              Book A Stand
            </StyledButton>
          </Box>
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll="body"
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        {downMd && <MobileMenu />}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
