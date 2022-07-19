/* eslint-disable @next/next/no-img-element */
import CreditCard from "@mui/icons-material/CreditCard";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import {
  Button,
  Card,
  IconButton,
  Pagination,
  Typography,
} from "@mui/material";
import { FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import TableRow from "components/TableRow";
import { H5 } from "components/Typography";
import Link from "next/link";

const AddressList = () => {
  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        title="Payment Methods"
        icon={CreditCard}
        button={
          <Link href="/payment-methods/add">
            <a>
              <Button
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                Add New Payment Method
              </Button>
            </a>
          </Link>
        }
      />

      {orderList.map((item, ind) => (
        <TableRow
          sx={{
            my: "1rem",
            padding: "6px 18px",
          }}
          key={ind}
        >
          <FlexBox alignItems="center" m={0.75}>
            <Card
              sx={{
                width: "42px",
                height: "28px",
                mr: "10px",
                borderRadius: "2px",
              }}
            >
              <img
                src={`/assets/images/payment-methods/${item.payment_method}.svg`}
                alt={item.payment_method}
                width="100%"
              />
            </Card>
            <H5 whiteSpace="pre" m={0.75}>
              Ralf Edward
            </H5>
          </FlexBox>
          <Typography whiteSpace="pre" m={0.75}>
            {item.card_no}
          </Typography>
          <Typography whiteSpace="pre" m={0.75}>
            {item.exp}
          </Typography>

          <Typography whiteSpace="pre" textAlign="center" color="grey.600">
            <Link href="/payment-methods/xkssThds6h37sd" passHref>
              <IconButton>
                <Edit fontSize="small" color="inherit" />
              </IconButton>
            </Link>
            <IconButton onClick={(e) => e.stopPropagation()}>
              <Delete fontSize="small" color="inherit" />
            </IconButton>
          </Typography>
        </TableRow>
      ))}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination
          count={5}
          onChange={(data) => {
            console.log(data);
          }}
        />
      </FlexBox>
    </CustomerDashboardLayout>
  );
};

const orderList = [
  {
    orderNo: "1050017AS",
    exp: "08 / 2022",
    payment_method: "Amex",
    card_no: "1234 **** **** ****",
  },
  {
    orderNo: "1050017AS",
    exp: "10 / 2025",
    payment_method: "Mastercard",
    card_no: "1234 **** **** ****",
  },
  {
    orderNo: "1050017AS",
    exp: "N/A",
    payment_method: "PayPal",
    card_no: "ui-lib@email.com",
  },
  {
    orderNo: "1050017AS",
    exp: "08 / 2022",
    payment_method: "Visa",
    card_no: "1234 **** **** ****",
  },
];
export default AddressList;
