import { Done } from "@mui/icons-material";
import { styled, Table, TableContainer } from "@mui/material";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FlexBox } from "components/flex-box";
import Reload from "components/icons/Reload";
import Scrollbar from "components/Scrollbar";
import useMuiTable from "hooks/useMuiTable";
import React from "react";
import TableHeader from "./TableHeader"; // styled components

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ":first-of-type": {
    paddingLeft: 24,
  },
}));
const StatusWrapper = styled(FlexBox)(({ theme, payment }) => ({
  borderRadius: "8px",
  padding: "3px 12px",
  display: "inline-flex",
  color: payment ? theme.palette.error.main : theme.palette.success.main,
  backgroundColor: payment
    ? theme.palette.error[100]
    : theme.palette.success[100],
}));
const StyledTableRow = styled(TableRow)(() => ({
  ":last-child .MuiTableCell-root": {
    border: 0,
  },
})); // =============================================================================

// =============================================================================
const DataListTable = ({ dataList, tableHeading, type }) => {
  const { order, orderBy, filteredList, handleRequestSort } = useMuiTable({
    listData: dataList,
  });
  const recentPurchase = type === "RECENT_PURCHASE";
  return (
    <Scrollbar>
      <TableContainer
        sx={{
          minWidth: recentPurchase ? 600 : 0,
        }}
      >
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            heading={tableHeading}
            onRequestSort={handleRequestSort}
          />
          {/* recent purchase table body */}
          {recentPurchase && (
            <TableBody>
              {filteredList.map((row, index) => {
                const { id, amount, payment, product } = row;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{id}</StyledTableCell>
                    <StyledTableCell align="left">{product}</StyledTableCell>

                    <StyledTableCell align="left">
                      <StatusWrapper
                        gap={1}
                        alignItems="center"
                        payment={payment === "Pending" ? 1 : 0}
                      >
                        <Box>{payment}</Box>
                        {payment === "Pending" && (
                          <Reload
                            sx={{
                              fontSize: 13,
                            }}
                          />
                        )}
                        {payment !== "Pending" && (
                          <Done
                            sx={{
                              fontSize: 13,
                            }}
                          />
                        )}
                      </StatusWrapper>
                    </StyledTableCell>

                    <StyledTableCell align="center">{amount}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}

          {/* stock out table body */}
          {type === "STOCK_OUT" && (
            <TableBody>
              {filteredList.map((row, index) => {
                const { amount, stock, product } = row;
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell align="left">{product}</StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: "error.main",
                      }}
                    >
                      {stock}
                    </StyledTableCell>

                    <StyledTableCell align="center">{amount}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};

export default DataListTable;
