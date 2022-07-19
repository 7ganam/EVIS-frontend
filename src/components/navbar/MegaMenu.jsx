import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Grid, List, ListItem, styled } from "@mui/material";
import BazarCard from "components/BazarCard";
import { FlexRowCenter } from "components/flex-box";
import NavLink from "components/nav-link/NavLink";
import { H6 } from "components/Typography";
// style components
const Wrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  transition: "color 150ms ease-in-out",
  ":hover": {
    color: theme.palette.primary.main,
    "& .menu-list": {
      display: "block",
    },
  },
}));
const MenusContainer = styled(ListItem)(({ theme }) => ({
  zIndex: 2,
  top: "100%",
  minWidth: 1000,
  display: "none",
  position: "absolute",
  transform: `translate(-50%, 0%)`,
  [theme.breakpoints.down(1070)]: {
    minWidth: 800,
  },
}));
const MenuListItem = styled(ListItem)(() => ({
  padding: ".5rem 0",
}));
const StyledNavLink = styled(NavLink)(() => ({
  transition: "all 0.3s",
  ":hover": {
    paddingLeft: 5,
  },
})); // ===============================================================

// ===============================================================
const gridSize = (length) => {
  if (length === 1) return 12;
  if (length === 2) return 6;
  if (length === 3) return 4;
  if (length === 4) return 3;
  return 3;
};

const MegaMenu = ({ title, menuList }) => {
  // get grid size the basis of menu list
  const grid = gridSize(menuList.length);
  return (
    <Wrapper>
      <FlexRowCenter alignItems="flex-end" gap={0.3}>
        {title}{" "}
        <KeyboardArrowDown
          sx={{
            color: "grey.500",
            fontSize: "1.1rem",
          }}
        />
      </FlexRowCenter>

      <MenusContainer className="menu-list">
        <BazarCard
          elevation={3}
          sx={{
            mt: 1.5,
            overflow: "hidden",
          }}
        >
          <Grid container>
            {menuList.slice(0, 4).map((category, key) => (
              <Grid
                item
                md={grid}
                key={key}
                sx={{
                  px: 4,
                  py: 2,
                  ":nth-of-type(odd)": {
                    backgroundColor: "grey.100",
                  },
                }}
              >
                {category.map((item) => {
                  return (
                    <List key={item.title}>
                      <H6 mb={0.5}>{item.title}</H6>

                      {item.child.map((sub) => {
                        return (
                          <MenuListItem key={sub.title}>
                            <StyledNavLink href={sub.url}>
                              {sub.title}
                            </StyledNavLink>
                          </MenuListItem>
                        );
                      })}
                    </List>
                  );
                })}
              </Grid>
            ))}
          </Grid>
        </BazarCard>
      </MenusContainer>
    </Wrapper>
  );
};

export default MegaMenu;
