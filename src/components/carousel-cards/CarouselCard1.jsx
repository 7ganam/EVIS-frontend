import { Button, Grid, styled } from "@mui/material";
import BazarImage from "components/BazarImage";
import { FlexBetween } from "components/flex-box";
import { Paragraph } from "components/Typography";
// styled component
const StyledBox = styled(FlexBetween)(({ theme }) => ({
  ".title": {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: "1.35rem",
  },
  [theme.breakpoints.up("sm")]: {
    ".grid-item": {
      minHeight: 424,
      display: "flex",
      alignItems: "baseline",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    paddingLeft: 0,
    ".title": {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down("xs")]: {
    ".title": {
      fontSize: 16,
    },
    ".title + *": {
      fontSize: 13,
    },
    ".button-link": {
      height: 36,
      padding: "0 1.5rem",
      fontSize: 13,
    },
  },
})); // ==================================================

// ==================================================
const CarouselCard1 = ({ carousel }) => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item className="grid-item" sm={5} xs={12}>
          <h1 className="title">{carousel.title}</h1>
          <Paragraph color="secondary.main" mb={2.7}>
            {carousel.description}
          </Paragraph>

          <a href={carousel.buttonLik}>
            <Button
              size="large"
              color="primary"
              disableElevation
              variant="contained"
              className="button-link"
              sx={{
                height: 44,
                borderRadius: "4px",
              }}
            >
              {carousel.buttonText}
            </Button>
          </a>
        </Grid>

        <Grid item sm={5} xs={12}>
          <BazarImage
            alt="apple-watch-1"
            src={carousel.photoUrl}
            sx={{
              mx: "auto",
              maxHeight: 400,
              display: "block",
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CarouselCard1;
