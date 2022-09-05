import { Badge } from "@mui/material";
import CategoryOutlined from "src/components/icons/CategoryOutline";
import Home from "src/components/icons/Home";
import ShoppingBagOutlined from "src/components/icons/ShoppingBagOutlined";
import User2 from "src/components/icons/User2";
import { useAppContext } from "src/contexts/AppContext";
import useWindowSize from "src/hooks/useWindowSize";
import { iconStyle, StyledNavLink, Wrapper } from "./styles";

const MobileNavigationBar = () => {
  const width = useWindowSize();
  const { state } = useAppContext();
  return width <= 900 ? (
    <Wrapper>
      {list.map((item) => (
        <StyledNavLink href={item.href} key={item.title}>
          {item.title === "Cart" ? (
            <Badge badgeContent={state.cart.length} color="primary">
              <item.icon fontSize="small" sx={iconStyle} />
            </Badge>
          ) : (
            <item.icon sx={iconStyle} fontSize="small" />
          )}

          {item.title}
        </StyledNavLink>
      ))}
    </Wrapper>
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
    href: "/mobile-category-nav",
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
export default MobileNavigationBar;
