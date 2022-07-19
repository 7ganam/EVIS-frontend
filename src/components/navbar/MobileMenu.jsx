import { Clear, ExpandMore, Menu } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import NavLink from "components/nav-link/NavLink";
import Scrollbar from "components/Scrollbar";
import { H6 } from "components/Typography";
import navbarNavigations from "data/navbarNavigations";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const updateNavigations = navbarNavigations.reduce((prev, curr) => {
    const newArr = [...prev];

    if (!curr.child) {
      newArr.push({ ...curr, extLink: true });
    } else if (curr.megaMenu || curr.megaMenuWithSub) {
      const flated = curr.child.flat();
      newArr.push({
        title: curr.title,
        child: flated,
      });
    } else {
      newArr.push(curr);
    }

    return newArr;
  }, []);

  const renderLevels = (data) => {
    return data.map((item, index) => {
      if (item.child) {
        return (
          <Accordion
            square
            key={index}
            elevation={0}
            disableGutters
            sx={{
              "&:not(:last-child)": {
                borderBottom: 0,
              },
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                padding: 0,
                boxShadow: "none",
                minHeight: 48,
                "& .Mui-expanded": {
                  color: "primary.main",
                  margin: 0,
                },
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                  margin: 0,
                  "& .MuiSvgIcon-root": {
                    color: "primary.main",
                  },
                },
              }}
            >
              <H6>{item.title}</H6>
            </AccordionSummary>

            <Box mx={2}>{renderLevels(item.child)}</Box>
          </Accordion>
        );
      }

      if (item.extLink) {
        return (
          <H6 key={index} py={1}>
            <NavLink href={item.url}>{item.title}</NavLink>
          </H6>
        );
      }

      return (
        <Box key={index} py={1}>
          <NavLink href={item.url}>{item.title}</NavLink>
        </Box>
      );
    });
  };

  return (
    <Fragment>
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{
          flexShrink: 0,
          border: (theme) => `1px solid ${theme.palette.grey[400]}`,
        }}
      >
        <Menu />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          zIndex: 15001,
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100%",
            position: "relative",
          }}
        >
          <Scrollbar
            autoHide={false}
            style={{
              height: "100vh",
            }}
          >
            <Box
              maxWidth={500}
              margin="auto"
              position="relative"
              height="100%"
              px={5}
              py={8}
            >
              <IconButton
                onClick={() => setOpenDrawer(false)}
                sx={{
                  position: "absolute",
                  right: 30,
                  top: 15,
                }}
              >
                <Clear fontSize="small" />
              </IconButton>

              {renderLevels(updateNavigations)}
            </Box>
          </Scrollbar>
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default MobileMenu;
