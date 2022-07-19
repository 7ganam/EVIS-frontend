import { styled, TableCell, TableHead, TableRow } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";
import UpDown from "components/icons/UpDown";
import React from "react"; // styled components

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  padding: "12px 16px",
  color: theme.palette.grey[900],
  ":first-of-type": {
    paddingLeft: 24,
  },
})); // ----------------------------------------------------------------------

// ----------------------------------------------------------------------
const TableHeader = (props) => {
  const { heading, orderBy, order, onRequestSort } = props;
  return (
    <TableHead
      sx={{
        backgroundColor: "grey.200",
      }}
    >
      <TableRow>
        {heading.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.alignCenter ? "center" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={() => onRequestSort(headCell.id)}
              direction={orderBy === headCell.id ? order : "asc"}
              sx={{
                "& .MuiTableSortLabel-icon": {
                  opacity: 1,
                },
              }}
              IconComponent={() => (
                <UpDown
                  sx={{
                    fontSize: 14,
                    ml: 1,
                    color: "grey.600",
                  }}
                />
              )}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
