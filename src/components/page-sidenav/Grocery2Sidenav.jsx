import { Box, useTheme } from "@mui/material";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";
import BazarCard from "components/BazarCard";
import { FlexBox } from "components/flex-box";
import appIcons from "components/icons";
import NavLink from "components/nav-link/NavLink";
import Scrollbar from "components/Scrollbar";
import { Span } from "components/Typography";
import { Fragment, useEffect, useState } from "react"; // ===========================================================

// ===========================================================
const Grocery2SideNav = ({ groceryNavigation }) => {
  const { shadows } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) setScrolled(true);
      else setScrolled(false);
    });
  }, []);

  const renderChild = (childList, type = "parent") => {
    if (type === "parent")
      return childList.map((item) => (
        <Fragment key={item.title}>
          <NavLink href={item.href} color="grey.700">
            <Span display="block" ml={4} py={1}>
              {item.title}
            </Span>
          </NavLink>

          {item.child && renderChild(item.child, "child")}
        </Fragment>
      ));
    else
      return childList.map((item, ind) => (
        <NavLink href={item.href} color="grey.700" key={ind}>
          <Span display="block" ml={6} pb={1}>
            {item.title}
          </Span>
        </NavLink>
      ));
  };

  return (
    <Scrollbar
      style={{
        boxShadow: shadows[1],
        marginTop: scrolled ? 24 : 0,
        transition: "all 0.4s ease-in-out",
        maxHeight: scrolled ? "100%" : `calc(100% - ${104}px)`,
      }}
    >
      <BazarCard
        elevation={3}
        sx={{
          height: "100%",
          borderRadius: "0px",
          position: "relative",
          p: "20px 20px 14px 24px",
        }}
      >
        {groceryNavigation.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <Box mb={1} color="grey.700" key={ind}>
              {item.child ? (
                <Accordion expanded>
                  <AccordionHeader px={0} py={0.75}>
                    <FlexBox gap={1.5} alignItems="center">
                      <Icon fontSize="small" />
                      <Span fontWeight={600}>{item.title}</Span>
                    </FlexBox>
                  </AccordionHeader>

                  {item.child ? renderChild(item.child) : null}
                </Accordion>
              ) : (
                <NavLink key={item.title} href={item.href} color="grey.700">
                  <FlexBox py={0.75} gap={1.5}>
                    <Icon fontSize="small" />
                    <Span fontWeight={600}>{item.title}</Span>
                  </FlexBox>
                </NavLink>
              )}
            </Box>
          );
        })}
      </BazarCard>
    </Scrollbar>
  );
};

export default Grocery2SideNav;
