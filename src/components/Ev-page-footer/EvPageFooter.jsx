import { Box, Container, Grid, styled } from "@mui/material";
import BazarIconButton from "src/components/BazarIconButton";
import BazarImage from "src/components/BazarImage";
import { FlexBox } from "src/components/flex-box";
import Facebook from "src/components/icons/Facebook";
import Google from "src/components/icons/Google";
import Instagram from "src/components/icons/Instagram";
import Twitter from "src/components/icons/Twitter";
import Youtube from "src/components/icons/Youtube";
import { Paragraph } from "src/components/Typography";
import Link from "next/link";
import { CallOutlined, MailOutline } from "@mui/icons-material";
import { Span } from "src/components/Typography";

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
  padding: "0.3rem 0.3rem",
  color: theme.palette.grey[300],
  "&:hover": {
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[100],
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
  marginTop: "10px",
})); // =================================================================

const quickLinks = [
  { label: "about", link: "/about" },
  { label: "exhibition", link: "/exhibition/why-exhibit" },
  { label: "Sponsors & partners", link: "/sponsors-partners/previous" },
  { label: "CONFERENCE", link: "/agenda/conference" },
  { label: "NEWS", link: "/news-media/news" },
  { label: "TRAVEL & VISAS", link: "/travel-visas" },
  { label: "EVIS2023 ACTIVITIES ", link: "#" },
  { label: "Book Your Stand NOW", link: "/participate/exhibitor" },
  { label: "Delegate Registration", link: "/participate/delegate" },
  { label: "Register your interest to visit", link: "/participate/visitor" },
];

// =================================================================
const PageFooter = ({ sx, id, bgcolor }) => {
  return (
    <StyledFooter id={id} sx={sx} bgcolor={bgcolor}>
      <Container>
        <Grid container spacing={4} columns={{ xs: 12, md: 13 }}>
          <Grid item md={4} sm={6} xs={12}>
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
              {quickLinks.map((item, ind) => (
                <Link href={item.link} key={ind} passHref>
                  <StyledLink sx={{ textTransform: "uppercase" }}>
                    {item.label}
                  </StyledLink>
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
                  evis@nirvanaholding.com
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              {" "}
              <FlexBox alignItems="center">
                <CallOutlined fontSize="small" />
                <Span ml={1.5} className="title">
                  +97150 686 3956
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span
                  ml={1.5}
                  className="title"
                  sx={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  EXHIBITION & SPONSORSHIP:
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title" sx={{ fontWeight: "700" }}>
                  Zayid Ahmed
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title">
                  M:+97150 686 3956
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              {" "}
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title">
                  zayid.ahamed@nirvanatls.com
                </Span>
              </FlexBox>
            </SectionElement>

            <SectionElement>
              <FlexBox alignItems="center">
                <Span
                  ml={1.5}
                  className="title"
                  sx={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  CONFERENCE & DELEGATES:
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title" sx={{ fontWeight: "700" }}>
                  Zayid Ahmed
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title">
                  M:+97150 686 3956
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              {" "}
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title">
                  zayid.ahamed@nirvanatls.com
                </Span>
              </FlexBox>
            </SectionElement>

            <SectionElement>
              <FlexBox alignItems="center">
                <Span
                  ml={1.5}
                  className="title"
                  sx={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  MARKETING & MEDIA
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title">
                  theanleoua.chu@nirvanatls.com
                </Span>
              </FlexBox>
            </SectionElement>

            <SectionElement>
              <FlexBox alignItems="center">
                <Span
                  ml={1.5}
                  className="title"
                  sx={{ fontWeight: "700", textDecoration: "underline" }}
                >
                  OPERATIONS
                </Span>
              </FlexBox>
            </SectionElement>
            <SectionElement>
              <FlexBox alignItems="center">
                <Span ml={1.5} className="title">
                  evis@nirvanaholding.com
                </Span>
              </FlexBox>
            </SectionElement>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <SectionTitle>{`EVENT INFO`}</SectionTitle>
            <SectionElement>{"When: 29 – 31 May 2023"}</SectionElement>
            <SectionElement>{"Timings: 9am - 5pm"}</SectionElement>
            <SectionElement>
              {"Venue: Abu Dhabi National Exhibition Centre, UAE"}
            </SectionElement>
            <SectionElement>{"Email: evis@nirvanaholding.com"}</SectionElement>
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
        </Grid>
      </Container>
    </StyledFooter>
  );
};

const iconList = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/EVInnovationSummit",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/EVISummit",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/channel/UCIhPlRLKj1tUbbs9nuxTiyw",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/evinnovationsummit/",
  },
];
export default PageFooter;
