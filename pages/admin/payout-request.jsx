import { RemoveRedEye } from "@mui/icons-material";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import { H3 } from "components/Typography";
import currency from "currency.js";
import useMuiTable from "hooks/useMuiTable";
import {
  StatusWrapper,
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "pages-sections/admin";
import React from "react";
import api from "utils/api/dashboard"; // table column list

const tableHeading = [
  {
    id: "no",
    label: "No",
    align: "left",
  },
  {
    id: "seller",
    label: "Seller Info",
    align: "left",
  },
  {
    id: "shopName",
    label: "Shop Name",
    align: "left",
  },
  {
    id: "totalAmount",
    label: "Total Amount",
    align: "left",
  },
  {
    id: "requestAmount",
    label: "Req. Amount",
    align: "left",
  },
  {
    id: "date",
    label: "Date",
    align: "left",
  },
  {
    id: "status",
    label: "Status",
    align: "left",
  },
  {
    id: "action",
    label: "Action",
    align: "center",
  },
]; // =============================================================================

PayoutRequests.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
}; // =============================================================================

// =============================================================================
export default function PayoutRequests({ requests }) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: requests,
    defaultSort: "no",
  });
  return (
    <Box py={4}>
      <H3 mb={2}>Payout Requests</H3>

      <Card>
        <Scrollbar>
          <TableContainer
            sx={{
              minWidth: 1100,
            }}
          >
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                rowCount={requests.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((request, index) => (
                  <StyledTableRow role="checkbox" key={index}>
                    <StyledTableCell align="left">{request.no}</StyledTableCell>
                    <StyledTableCell align="left">
                      {request.seller}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {request.shopName}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {currency(request.totalAmount, {
                        separator: ",",
                      }).format()}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {currency(request.requestAmount, {
                        separator: ",",
                      }).format()}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {request.date}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <StatusWrapper status={request.status}>
                        {request.status}
                      </StatusWrapper>
                    </StyledTableCell>

                    <StyledTableCell align="center">
                      <StyledIconButton>
                        <RemoveRedEye />
                      </StyledIconButton>
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
            count={Math.ceil(requests.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
export const getStaticProps = async () => {
  const requests = await api.payoutRequests();
  return {
    props: {
      requests,
    },
  };
};
