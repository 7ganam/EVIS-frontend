import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import {
  StatusWrapper,
  StyledTableCell,
  StyledTableRow,
} from "pages-sections/admin";
import React from "react";
const tableHeading = [
  {
    id: "no",
    label: "No",
    align: "left",
  },
  {
    id: "date",
    label: "Date",
    align: "left",
  },
  {
    id: "amount",
    label: "Amount",
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    align: "center",
  },
  {
    id: "message",
    label: "Message",
    align: "center",
  },
]; // =============================================================================

PayoutRequests.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

export default function PayoutRequests() {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData,
    defaultSort: "no",
  });
  return (
    <Box py={4}>
      <H3 mb={2}>Payout Requests</H3>

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 800,
            }}
          >
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={listData.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((payout, index) => (
                  <StyledTableRow role="checkbox" key={index}>
                    <StyledTableCell align="left">{payout.no}</StyledTableCell>
                    <StyledTableCell align="left">
                      {payout.date}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {payout.amount}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <StatusWrapper status={payout.status}>
                        {payout.status}
                      </StatusWrapper>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {payout.message}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(listData.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
} // list data

const listData = [
  {
    no: 1,
    amount: "$1,200",
    date: "20-04-2022",
    status: "Accepted",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 2,
    amount: "$250",
    date: "19-04-2022",
    status: "Pending",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 3,
    amount: "$9,300",
    date: "17-04-2022",
    status: "Processing",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 4,
    amount: "$2,200",
    date: "14-04-2022",
    status: "Pending",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 5,
    amount: "$700",
    date: "08-04-2022",
    status: "Accepted",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 6,
    amount: "$930",
    date: "01-04-2022",
    status: "Pending",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 7,
    amount: "$450",
    date: "26-03-2022",
    status: "Processing",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 8,
    amount: "$360",
    date: "16-03-2022",
    status: "Accepted",
    message: "I am requested to payout this amount of money.",
  },
  {
    no: 9,
    amount: "$120",
    date: "12-03-2022",
    status: "Pending",
    message: "I am requested to payout this amount of money.",
  },
];
