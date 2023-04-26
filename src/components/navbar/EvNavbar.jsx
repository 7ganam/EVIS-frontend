import { ArrowLeft, KeyboardArrowDown } from "@mui/icons-material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Box, MenuItem, styled, Button } from "@mui/material";
import BazarCard from "src/components/BazarCard";
import { FlexBox } from "src/components/flex-box";
import NavLink from "src/components/nav-link/NavLink";
import evNavbarNavigations from "src/data/ev-navbarNavigations";
import useSettings from "src/hooks/useSettings";
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2"; // NavList props interface
import Link from "next/link";
import Image from "src/components/BazarImage";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileMenu from "src/components/navbar/MobileMenu";

// const common css style
const navLinkStyle = {
  whitespace: "nowrap",
  cursor: "pointer",
  transition: "color 150ms ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
  "&:last-child": {
    marginRight: "0",
  },
}; // style components

const StyledNavLink = styled(NavLink)(() => ({ ...navLinkStyle }));
const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": {
      display: "block",
    },
  },
}));
const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: "100%",
  display: "none",
  position: "absolute",
  [theme.breakpoints.down(1640)]: {
    right: "100%",
    left: "auto",
  },
}));
const NavBarWrapper = styled(BazarCard)(({ theme, line }) => ({
  display: "block",
  borderRadius: "0px",
  position: "relative",
  ...(line === 0 && {
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  }),
}));
const InnerContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down(1150)]: {
    display: "none",
  },
}));

const ChildNavsWrapper = styled(Box)(() => ({
  left: "50%",
  zIndex: 5,
  top: "100%",
  display: "none",
  position: "absolute",
  transform: "translate(-50%, 0%)",
})); // ==========================================================

// ==========================================================
const Navbar = ({ elevation, isFixed }) => {
  const { settings } = useSettings();
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const renderNestedNav = (list = [], isRoot = false) => {
    return list.map((nav) => {
      if (isRoot) {
        // show megamenu
        if (nav.megaMenu) {
          //@ts-ignore
          return (
            <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
          );
        } // show megamenu with sub

        if (nav.megaMenuWithSub) {
          //@ts-ignore
          return (
            <MegaMenu2 key={nav.title} title={nav.title} menuList={nav.child} />
          );
        }

        // if (nav.url) {
        //   return (
        //     <StyledNavLink
        //       href={nav.url}
        //       key={nav.title}
        //       sx={{
        //         whiteSpace: "nowrap ",
        //         display: "flex",
        //         alignItems: "center",
        //         px: "10px",
        //         height: "55px",
        //         fontWeight: "400",
        //       }}
        //     >
        //       {nav.title}
        //     </StyledNavLink>
        //   );
        // }

        if (nav.child) {
          return (
            <FlexBox
              key={nav.title}
              alignItems="center"
              position="relative"
              flexDirection="column"
              sx={{
                height: "55px",
                fontWeight: "400",
                "&:hover": {
                  "& > .child-nav-item": {
                    display: "block",
                  },
                },
              }}
            >
              <FlexBox
                alignItems="flex-end"
                gap={0.3}
                sx={{
                  ...navLinkStyle,
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  px: "10px",
                }}
              >
                {nav.url ? (
                  <StyledNavLink
                    href={nav.url}
                    key={nav.title}
                    sx={{
                      whiteSpace: "nowrap ",
                      display: "flex",
                      alignItems: "center",
                      px: "10px",
                      height: "55px",
                      fontWeight: "400",
                    }}
                  >
                    {nav.title}
                  </StyledNavLink>
                ) : (
                  nav.title
                )}
                {/* {nav.title} */}
                <KeyboardArrowDown
                  sx={{
                    color: "grey.500",
                    fontSize: "1.1rem",
                  }}
                />
              </FlexBox>

              <ChildNavsWrapper className="child-nav-item">
                <BazarCard
                  elevation={3}
                  sx={{
                    mt: 2.5,
                    py: 1,
                    minWidth: 200,
                  }}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ChildNavsWrapper>
            </FlexBox>
          );
        }
      } else {
        if (nav.url) {
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem sx={{ fontSize: "17px" }}>{nav.title}</MenuItem>
            </NavLink>
          );
        }

        if (nav.child) {
          return (
            <ParentNav position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span" sx={{ fontSize: "17px" }}>
                  {nav.title}
                </Box>

                {settings.direction === "ltr" ? (
                  <ArrowRight fontSize="small" />
                ) : (
                  <ArrowLeft fontSize="small" />
                )}
              </MenuItem>

              <ParentNavItem className="parent-nav-item" pl={1}>
                <BazarCard
                  sx={{
                    py: "0.5rem",
                    minWidth: "230px",
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </BazarCard>
              </ParentNavItem>
            </ParentNav>
          );
        }
      }
    });
  };

  return (
    <NavBarWrapper hoverEffect={false} elevation={elevation} line={elevation}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          // height: isFixed ? "90px" : "110px",
          // height: isFixed ? "100" : "150px",
        }}
      >
        <Box
          sx={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            maxWidth: "400px",
            pl: "30px",
            // bgcolor: "blue",
            // minWidth: "300px",
          }}
        >
          <Link href="/">
            <a>
              <Image
                // height={{ xs: "50", md: isFixed ? "70" : "90" }}
                mb={0}
                src="/assets/images/EvLogo_MENA3.jpg"
                alt="logo"
                sx={{ height: { xs: "60px", md: isFixed ? "70px" : "140px" } }}
              />
            </a>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            px: "40px",
            width: "100%",
            // bgcolor: "red",
          }}
        >
          <Box
            sx={{
              display: downMd || isFixed ? "none" : "flex",
              justifyContent: "end",

              minHeight: "70px",
              // bgcolor: "orange",
            }}
          >
            {/* <Link href="/">
              <a>
                <Image
                  height={70}
                  mb={0}
                  src="/assets/images/NirvanaLogo.png"
                  alt="logo"
                  // sx={{ height: "10%" }}
                />
              </a>
            </Link> */}
          </Box>
          <InnerContainer
            sx={{
              justifyContent: "",
              height: "100%",
              width: "100%",
              // bgcolor: "yellow",
            }}
          >
            <FlexBox
              gap={"1px"}
              sx={{
                width: "100%",
                height: "100%",
                flexWrap: "wrap",
                pb: "20px",
                pt: isFixed ? "20px" : "0",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {renderNestedNav(evNavbarNavigations, true)}
            </FlexBox>
          </InnerContainer>

          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              ml: "auto",
            }}
          >
            {" "}
            {downMd && <MobileMenu />}
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            maxWidth: "400px",
            pr: "30px",
            // bgcolor: "blue",
            // minWidth: "300px",
          }}
        >
          <a href="https://www.moe.gov.ae/En/Pages/Home.aspx">
            <Image
              height={{ xs: "50", md: isFixed ? "70" : "90" }}
              mb={0}
              src="/assets/images/MOEI.png"
              alt="logo"
              sx={{ height: { xs: "60px", md: isFixed ? "70px" : "140px" } }}
            />
          </a>
        </Box>
      </Box>
    </NavBarWrapper>
  );
}; //  set default props data

Navbar.defaultProps = {
  elevation: 2,
  navListOpen: false,
  hideCategories: false,
};
export default Navbar;
