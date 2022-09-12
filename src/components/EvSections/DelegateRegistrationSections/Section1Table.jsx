import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme, Box, Button } from "@mui/material";
import { H3 } from "src/components/EvComponents/Typography";
import { SectionTitle } from "src/components/EvComponents/StyledTypography";
import { styled } from "@mui/material/styles";

function createData(name, first, second, full) {
  return { name, first, second, full };
}

const rows = [
  createData("Full Access Pass", 468, 495, 550),
  createData("One Day Pass", 298, 315, 350),
  createData("Virtual Access Pass (online for 1 day)", 198, 215, 250),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: "white",
}));

export default function Section1Table() {
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
              <StyledTableCell align="center">
                <H3>
                  First Early Bird <br /> (valid until 15 Jan)
                </H3>
              </StyledTableCell>
              <StyledTableCell align="center">
                {" "}
                <H3>
                  Second Early Bird <br /> (valid until 15 Mar)
                </H3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <H3>Full Price</H3>
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
                  <H3>{row.full} USD</H3>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
