/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Box } from "@mui/material";
import CategoryOutlined from "components/icons/CategoryOutline";
import Home from "components/icons/Home";
import ShoppingBagOutlined from "components/icons/ShoppingBagOutlined";
import User2 from "components/icons/User2";
import { useAppContext } from "contexts/AppContext";
import useWindowSize from "hooks/useWindowSize";
import { useEffect, useState } from "react";
import { layoutConstant } from "utils/constants";
import {
  iconStyle,
  StyledBox,
  StyledDrawer,
  StyledNavLink,
  Wrapper,
} from "./styles"; // ===================================================

// ===================================================

/**
 * Difference between MobileNaviagationBar and MobileNaviagationBar2
 * 1. In the MobileNaviagationBar we doesn't use conditinally render
 * 2. In the list array if doesn't exists href property then open category menus sidebar drawer in MobileNaviagationBar2
 */
const MobileNavigationBar2 = ({ children }) => {
  const width = useWindowSize();
  const { state } = useAppContext();
  const [open, setOpen] = useState(false);
  const { mobileNavHeight, topbarHeight } = layoutConstant;
  const total = mobileNavHeight + topbarHeight;
  const [totalHeight, setTotalHeight] = useState(total);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  useEffect(() => {
    const listner = () => {
      if (window.scrollY > 30) setTotalHeight(mobileNavHeight);
      else setTotalHeight(total);
    };

    window.addEventListener("scroll", listner);
    return () => window.removeEventListener("scroll", listner);
  }, []);
  return width <= 900 ? (
    <Box position="relative" display="flex" flexDirection="column">
      <StyledDrawer
        open={open}
        anchor="left"
        totalheight={totalHeight}
        onClose={handleDrawerClose}
      >
        {children}
      </StyledDrawer>

      <Wrapper>
        {list.map((item) => {
          if (item.href) {
            return (
              <StyledNavLink href={item.href} key={item.title}>
                {item.title === "Cart" && (
                  <Badge badgeContent={state.cart.length} color="primary">
                    <item.icon fontSize="small" sx={iconStyle} />
                  </Badge>
                )}

                {item.title !== "Cart" && (
                  <item.icon sx={iconStyle} fontSize="small" />
                )}
                {item.title}
              </StyledNavLink>
            );
          } else {
            return (
              <StyledBox
                onClick={open ? handleDrawerClose : handleDrawerOpen}
                key={item.title}
              >
                {item.title === "Cart" && (
                  <Badge badgeContent={state.cart.length} color="primary">
                    <item.icon fontSize="small" sx={iconStyle} />
                  </Badge>
                )}

                {item.title !== "Cart" && (
                  <item.icon sx={iconStyle} fontSize="small" />
                )}
                {item.title}
              </StyledBox>
            );
          }
        })}
      </Wrapper>
    </Box>
  ) : null;
};

const list = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Category",
    icon: CategoryOutlined,
  },
  {
    title: "Cart",
    icon: ShoppingBagOutlined,
    href: "/cart",
  },
  {
    title: "Account",
    icon: User2,
    href: "/profile",
  },
];
export default MobileNavigationBar2;
