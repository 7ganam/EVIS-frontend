import { Button, Divider, TextField, Typography } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween, FlexBox } from "components/flex-box";
import React from "react";

const CheckoutSummary = () => {
  return (
    <Card1>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Subtotal:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            $2610.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Shipping:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Tax:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            $40.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={2}>
        <Typography color="grey.600">Discount:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>

      <Divider
        sx={{
          mb: "1rem",
        }}
      />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb={3}
      >
        $2610.00
      </Typography>

      <TextField
        placeholder="Voucher"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{
          mt: "1rem",
          mb: "30px",
        }}
      >
        Apply Voucher
      </Button>
    </Card1>
  );
};

export default CheckoutSummary;
