import { Box, Container, Grid, styled } from "@mui/material";
import BazarIconButton from "components/BazarIconButton";
import BazarImage from "components/BazarImage";
import { FlexBox } from "components/flex-box";
import Facebook from "components/icons/Facebook";
import Google from "components/icons/Google";
import Instagram from "components/icons/Instagram";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import { Paragraph } from "components/Typography";
import Link from "next/link";
import { CallOutlined, MailOutline } from "@mui/icons-material";
import { Span } from "components/Typography";

// styled components
const StyledFooter = styled("footer")(({ theme, bgcolor }) => ({
  color: "white",
  padding: "40px",
  background: bgcolor ? bgcolor : theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    marginBottom: "4rem",
  },
}));
const StyledLink = styled("a")(({ theme }) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[300],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));
const SectionElement = styled("a")(({ theme }) => ({
  borderRadius: 4,
  display: "block",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[300],
}));
const SectionTitle = styled("div")(({ theme }) => ({
  borderRadius: 4,
  display: "block",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[300],
  fontSize: "30px",
  fontWeight: "bolder",
  marginBottom: 10,
})); // =================================================================

// =================================================================
const PageFooter = ({ sx, id, bgcolor }) => {
  return (
    <StyledFooter id={id} sx={sx} bgcolor={bgcolor}>
      <Container>
        <Grid container spacing={6}>
          <Grid item md={3} sm={6} xs={12}>
            <Box
              sx={{
                bgcolor: "white",
                width: "200px",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
                borderRadius: 3,
              }}
            >
              <Link href="/">
                <a>
                  <BazarImage
                    height={80}
                    src="/assets/images/NirvanaLogo.png"
                    alt="logo"
                  />
                </a>
              </Link>
            </Box>
            <Paragraph mb={2.5} color="grey.300" maxWidth="370px">
              Nirvana Holding organizes B2B and B2C events in different markets
              and industries.
            </Paragraph>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <SectionTitle>{`QUICK LINKS`}</SectionTitle>
              {customerCareLinks.map((item, ind) => (
                <Link href="/" key={ind} passHref>
                  <StyledLink>{item}</StyledLink>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <SectionTitle>{`CONTACT US`}</SectionTitle>
            <SectionElement>
              <FlexBox alignItems="center">
                <MailOutline fontSize="small" mr={2.5} />
                <Span ml={1.5} className="title">
                  support@evis.com
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              {" "}
              <FlexBox alignItems="center">
                <CallOutlined fontSize="small" />
                <Span ml={1.5} className="title">
                  +05402 1111 1111
                </Span>
              </FlexBox>
            </SectionElement>

            <FlexBox className="flex" mx={-0.625} mt={2}>
              {iconList.map((item, ind) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer noopenner"
                  key={ind}
                >
                  <BazarIconButton
                    m={0.5}
                    bgcolor="rgba(0,0,0,0.2)"
                    fontSize="12px"
                    padding="10px"
                  >
                    <item.icon fontSize="inherit" />
                  </BazarIconButton>
                </a>
              ))}
            </FlexBox>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <SectionTitle>{`OPENING TIMES`}</SectionTitle>
            <SectionElement>
              {"Mon, 23 May, 2022 - 9:00 AM to 5:00 PM"}
            </SectionElement>
            <SectionElement>
              {"Tue , 24 May, 2022 - 9:00 AM to 5:00 PM"}
            </SectionElement>
            <SectionElement>
              {"Wed, 25 May, 2022 - 9:00 AM to 5:00 PM"}
            </SectionElement>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

const customerCareLinks = [
  "Help Center",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];
const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com",
  },
  {
    icon: Twitter,
    url: "/",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com",
  },
  {
    icon: Google,
    url: "/",
  },
  {
    icon: Instagram,
    url: "/",
  },
];
export default PageFooter;
