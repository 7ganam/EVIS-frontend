import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { FlexBox } from "src/components/flex-box";
import { Paragraph } from "src/components/Typography";
import currency from "currency.js";
import React from "react";
import {
  StatusWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "./StyledComponents"; // ========================================================================

// ========================================================================
const RefundRequestRow = ({ request }) => {
  const { name, image, orderNo, shopName, amount, status } = request;
  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        #{orderNo}
      </StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        {shopName}
      </StyledTableCell>

      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar
            src={image}
            sx={{
              borderRadius: "8px",
            }}
          />
          <Paragraph>{name}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        {currency(amount, {
          separator: ",",
        }).format()}
      </StyledTableCell>

      <StyledTableCell
        align="left"
        sx={{
          fontWeight: 400,
        }}
      >
        <StatusWrapper status={status}>{status}</StatusWrapper>
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default RefundRequestRow;
