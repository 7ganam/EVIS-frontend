import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme, Box, Button } from "@mui/material";
import { H3 } from "components/EvComponents/Typography";
import { SectionTitle } from "components/EvComponents/StyledTypography";
import { styled } from "@mui/material/styles";

function createData(name, first, second,third, full) {
  return { name, first, second ,third, full };
}

const rows = [
  createData("FULL ACCESS PASS (Live & Online) ", 600, 510, 540 ,570),
  createData("ONE DAY PASS (Live & Online)", 400, 340, 360 ,380),
  createData("VIRTUAL ACCESS PASS (Live & Online)", 300, 255, 270 ,285),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "white",
}));

export default function BasicTable() {
  const theme = useTheme();
  return (
    <Box sx={{ px: 6 }}>
      <Box sx={{ py: 5 }}>
        <SectionTitle>CONFERENCE DELEGATE PASSES</SectionTitle>
      </Box>
      <TableContainer component={Paper} sx={{ color: "white" }}>
        <Table
          sx={{
            minWidth: 650,
            bgcolor: theme.palette.primary.light,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>

              <StyledTableCell sx={{ color: "white" }}>
                <H3>2022 Rates</H3>
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }}>
                <H3></H3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <H3>
                ENDS ON November 15, 2022
                </H3>
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                <H3>
                ENDS ON January 15, 2022
                </H3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <H3>   ENDS ON March 15, 2022	</H3>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                style={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <StyledTableCell component="th" scope="row">
                  <H3>{row.name}</H3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H3>{row.first} USD</H3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H3>{row.second} USD</H3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H3>{row.third} USD</H3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H3>{row.full} USD</H3>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          textAlign: "center",
          py: 3,
        }}
      >
        <Button variant="contained"> Get Passes Now </Button>
      </Box>
    </Box>
  );
}
