import { Container, TextField } from "@mui/material";
import BazarButton from "components/BazarButton";
import { FlexRowCenter } from "components/flex-box";
import Telegram from "components/icons/Telegram";
import { H2, H5 } from "components/Typography";
import React from "react";

const Section8 = () => {
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <FlexRowCenter flexDirection="column">
        <Telegram
          sx={{
            fontSize: "2.5rem",
            color: "grey.700",
          }}
        />
        <H2 mt="1.5rem" mb="0.5rem" lineHeight={1.2}>
          Subscribe To Our Newsletter
        </H2>
        <H5
          fontWeight="600"
          color="grey.600"
          mb="1.5rem"
          maxWidth="220px"
          textAlign="center"
        >
          and receive $20 coupon for the first Shopping
        </H5>

        <TextField
          variant="outlined"
          placeholder="Searching for..."
          fullWidth
          InputProps={{
            sx: {
              height: 44,
              width: {
                md: "50%",
                sm: "75%",
              },
              mx: "auto",
              borderRadius: "0.5rem",
              paddingRight: 0,
              color: "secondary.300",
              overflow: "hidden",
              backgroundColor: "grey.300",
              "& .css-1o2jng6-MuiOutlinedInput-notchedOutline": {
                borderWidth: 0,
              },
            },
            endAdornment: (
              <BazarButton
                color="primary"
                variant="contained"
                disableElevation
                sx={{
                  px: "3rem",
                  height: "100%",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                SUBSCRIBE
              </BazarButton>
            ),
          }}
        />
      </FlexRowCenter>
    </Container>
  );
};

export default Section8;
