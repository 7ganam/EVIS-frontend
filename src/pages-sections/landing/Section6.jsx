import { Avatar, Box, Container, Grid } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H2, Paragraph } from "components/Typography";
import Router from "next/router";
const list = [
  {
    title: "Niche Demos",
    thumbnail: "/assets/images/landing/niche-demos.png",
    subTitle:
      "9 Niche shop demos for online store. Super store, Fashion, Electronic, Grocery and etc",
    category: "homepage",
    buttonText: "Browse Demos",
  },
  {
    title: "Shop Pages",
    thumbnail: "/assets/images/landing/inner-pages.png",
    subTitle:
      "Clean Shop inner pages. Vendor shop, Sale/discount product page, checkout, cart and etc.",
    category: "shop",
    buttonText: "Browse Pages",
  },
  {
    title: "User Dashboard",
    thumbnail: "/assets/images/landing/user-dashboard.png",
    subTitle:
      "Structured User dashboard for managing user account, orders, address and etc.",
    category: "user",
    buttonText: "Browse User Dashboard",
  },
  {
    title: "Admin Dashboard",
    thumbnail: "/assets/images/landing/admin-dashboard.png",
    subTitle: "30+ Super admin and vendor dashboard interfaces.",
    category: "admin",
    buttonText: "Browse Admin Dashboard",
  },
]; // ==================================================================

// ==================================================================
const Section6 = ({ setFilterDemo }) => {
  const handleNavigate = (active) => () => {
    Router.push("#section-3");
    setFilterDemo(active);
  };

  return (
    <Box id="get">
      <Container
        sx={{
          my: 8,
        }}
      >
        <H2
          fontSize={40}
          textAlign="center"
          fontWeight="900"
          color="secondary.main"
          mb={7.5}
        >
          What You Get?
        </H2>

        <Grid container spacing={6}>
          {list.map((item, index) => (
            <Grid item md={6} xs={12} key={index}>
              <FlexBox
                data-aos="fade-up"
                data-aos-duration={index + 1 * 500}
                gap={3}
                sx={{
                  alignItems: {
                    sm: "center",
                    xs: "flex-start",
                  },
                  flexDirection: {
                    sm: "row",
                    xs: "column",
                  },
                }}
              >
                <Avatar
                  src={item.thumbnail}
                  sx={{
                    boxShadow: 1,
                    borderRadius: "10px",
                    height: {
                      sm: 150,
                      xs: 300,
                    },
                    width: {
                      sm: 200,
                      xs: "100%",
                    },
                  }}
                />

                <Box>
                  <H2 fontSize={22} mb={1}>
                    {item.title}
                  </H2>
                  <Paragraph mb={4}>{item.subTitle}</Paragraph>

                  <Box
                    onClick={handleNavigate(item.category)}
                    sx={{
                      cursor: "pointer",
                      color: "primary.main",
                      textDecoration: "underline",
                      ":hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.buttonText}
                  </Box>
                </Box>
              </FlexBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section6;
