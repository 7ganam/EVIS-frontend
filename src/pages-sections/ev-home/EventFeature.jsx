import { Box, Container, styled } from "@mui/material";
import BazarCard from "src/components/BazarCard";
import NavLink2 from "src/components/nav-link/NavLink2";
import { H2, Paragraph } from "src/components/Typography";
// styled component
const StyledCard = styled(BazarCard)(({ theme, feature }) => ({
  padding: "3rem 4rem",
  borderRadius: "0",

  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
  boxShadow: theme.shadows[4],
  "&:hover": {
    boxShadow: theme.shadows[2],
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
  },
}));

const EventFeature = ({ feature }) => {
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <StyledCard
        sx={{
          backgroundImage: {
            md: `linear-gradient(to right,#fff 60%, transparent), url(${feature.image})`,
            xs: `linear-gradient(to right,#000000 10%, transparent), url(${feature.image})`,
          },
          backgroundSize: "auto 100%",
          color: { xs: "white", md: "black" },
        }}
      >
        <Box maxWidth="500px">
          <H2 lineHeight={1.3}>{feature.title}</H2>
          <Paragraph
            color={{ sx: "white", md: "grey.600" }}
            mt="0.5rem"
            mb="1.5rem"
          >
            {feature.text}
          </Paragraph>

          <NavLink2 title={feature.buttonText} url="#" />
        </Box>
      </StyledCard>
    </Container>
  );
};

export default EventFeature;
