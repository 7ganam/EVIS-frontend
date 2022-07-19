import East from "@mui/icons-material/East";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import { format } from "date-fns";
import Link from "next/link";

// =================================================
const OrderRow = ({ item }) => {
  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";

      case "Processing":
        return "secondary";

      case "Delivered":
        return "success";

      case "Cancelled":
        return "error";

      default:
        return "";
    }
  };

  return (
    <Link href={item.href}>
      <a>
        <TableRow
          sx={{
            my: "1rem",
            padding: "6px 18px",
          }}
        >
          <H5 m={0.75} textAlign="left">
            {item.orderNo}
          </H5>
          <Box m={0.75}>
            <Chip
              size="small"
              label={item.status}
              sx={{
                p: "0.25rem 0.5rem",
                fontSize: 12,
                color: !!getColor(item.status)
                  ? `${getColor(item.status)}.900`
                  : "inherit",
                backgroundColor: !!getColor(item.status)
                  ? `${getColor(item.status)}.100`
                  : "none",
              }}
            />
          </Box>
          <Typography className="pre" m={0.75} textAlign="left">
            {format(new Date(item.purchaseDate), "MMM dd, yyyy")}
          </Typography>

          <Typography m={0.75} textAlign="left">
            ${item.price.toFixed(2)}
          </Typography>

          <Typography
            color="grey.600"
            textAlign="center"
            sx={{
              flex: "0 0 0 !important",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <IconButton>
              <East
                fontSize="small"
                color="inherit"
                sx={{
                  transform: ({ direction }) =>
                    `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
                }}
              />
            </IconButton>
          </Typography>
        </TableRow>
      </a>
    </Link>
  );
};

export default OrderRow;
