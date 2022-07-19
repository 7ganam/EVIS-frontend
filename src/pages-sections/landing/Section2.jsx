import { Card, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import BazarImage from "components/BazarImage";
import { H3, H4 } from "components/Typography"; // styled components

const StyledContent = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  "&:after": {
    content: '" "',
    position: "absolute",
    height: "100px",
    width: "200px",
    top: 0,
    right: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "300px 300px 0 0",
    marginRight: -100,
  },
  "&:before": {
    content: '" "',
    position: "absolute",
    height: "100px",
    width: "200px",
    bottom: 0,
    left: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "0 0 300px 300px",
    marginLeft: -100,
    marginBottom: -50,
  },
}));
const StyledCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "260px",
}));

const Section2 = () => {
  return (
    <Container
      id="features"
      sx={{
        mb: "7rem",
      }}
    >
      <H3
        fontSize="40px"
        textAlign="center"
        fontWeight="900"
        color="secondary.main"
        mb={7.5}
      >
        Powerful Features
      </H3>

      <StyledContent>
        <Grid container spacing={7}>
          {list.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <StyledCard
                elevation={3}
                data-aos="fade-up"
                data-aos-duration={index + 1 * 500}
              >
                <BazarImage
                  src={`/assets/images/icons/${item.icon}.svg`}
                  alt={item.title}
                  sx={{
                    mb: "1.5rem",
                    height: 64,
                  }}
                />
                <H4
                  fontSize="18px"
                  fontWeight="700"
                  maxWidth="200px"
                  textAlign="center"
                  mx="auto"
                >
                  {item.title}
                </H4>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledContent>
    </Container>
  );
};

const list = [
  {
    icon: "verify",
    title: "SEO Friendly",
  },
  {
    icon: "cloud-data",
    title: "REST API",
  },
  {
    icon: "multivendor",
    title: "Multi-Vendor Support",
  },
  {
    icon: "optimization",
    title: "Optimized for Mobile",
  },
  {
    icon: "code",
    title: "Clean Code",
  },
  {
    icon: "lighting",
    title: "Fast",
  },
  {
    icon: "admin-dashboard",
    title: "Admin Dashboard",
  },
  {
    icon: "figma",
    title: "Figma Ready",
  },
];
export default Section2;
