import { Container, styled } from "@mui/material";
import { FlexBetween, FlexBox } from "components/flex-box";
import appIcons from "components/icons/index";
import { H3, Span } from "components/Typography";
import React from "react"; // styled component

const StyledFlexBox = styled(FlexBetween)(({ theme }) => ({
  flexWrap: "wrap",
  borderRadius: "8px",
  padding: "1rem 2rem",
  border: `1px solid ${theme.palette.grey[400]}`,
  [theme.breakpoints.between("sm", "lg")]: {
    "&": {
      justifyContent: "space-evenly",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
})); // ===========================================================

// ===========================================================
const Section7 = ({ serviceList }) => {
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <StyledFlexBox>
        {serviceList.map((item, ind) => {
          const Icon = appIcons[item.icon];
          return (
            <FlexBox gap={1} key={ind} p="1rem">
              <Icon
                color="inherit"
                fontSize="inherit"
                sx={{
                  color: "grey.900",
                  fontSize: "40px",
                }}
              />
              <div>
                <H3 color="grey.900" lineHeight={1.3}>
                  {item.title}
                </H3>
                <Span color="grey.600">{item.subtitle}</Span>
              </div>
            </FlexBox>
          );
        })}
      </StyledFlexBox>
    </Container>
  );
};

export default Section7;
