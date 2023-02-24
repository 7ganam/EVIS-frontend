import { useEffect } from "react";
import { Field, Formik } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Card1 from "src/components/Card1";
import countryList from "src/data/countryList";
import { Typography } from "@mui/material";
import axios from "axios";

import * as yup from "yup";
import Image from "src/components/BazarImage";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Divider, Radio, styled } from "@mui/material";
import { FlexBox } from "src/components/flex-box";
import { H4, Paragraph } from "src/components/Typography";
import useWindowSize from "src/hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import CheckoutForm2 from "src/pages-sections/checkout/CheckoutForm2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Alert from "@mui/material/Alert";

const sponsorsData = [
  {
    source: "/assets/images/organizations/DCT.png",
    text: "Destination Partner",
  },
  {
    source: "/assets/images/organizers/ADNEC.png",
    text: "Venue Partner",
  },
  {
    source: "/assets/images/organizers/AbuDhabi.png",
    text: "Host City",
  },
  {
    source: "/assets/images/organizers/Nirvana.png",
    text: "Organized By",
  },
  // {
  //   source: "/assets/images/organizations/CEBC.png",
  //   text: "Knowledge Partner",
  // },
];

const StyledDateView = styled(DatePicker)(({ theme }) => ({
  width: "100%",
  padding: 8,
  border: "1px grey solid",
  borderRadius: "4px",
  "&:focus": {
    border: `2px ${theme.palette.primary.main} solid`,
  },
}));

const initialValues = {
  first_name: "",
  second_name: "",
  email: "",
  leaving_from: "",
  arriving_to: "",
  ticket_type: "",
  flight_class: "",
  departure_date: "",
  return_date: "",
  flight_number_of_adults: "",
  flight_number_of_children: "",
  flight_number_of_infants: "",
  staying_city: "",
  check_in_date: "",
  check_out_date: "",
  occupancy: "",
  meal_plan: "",
  hotel_number_of_adults: "",
  hotel_number_of_children_and_age: "",
  hotel_number_of_infants_and_age: "",
  pick_up_date: "",
  pick_up_time: "",
  pick_up_location: "",
  drop_off_location: "",
  number_of_passengers: "",
  car_preferred: "",
  preferred_tour_city: "",
  tour_date: "",
  tour_number_of_adults: "",
  tour_number_of_children: "",
  tour_type: "",
  visa_type: "",
  passport_name: "",
  visa_phone_number: "",
  visa_email: "",
}; // uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  second_name: yup.string().required("required"),
  email: yup.string().required("required"),
  leaving_from: yup.string().required("required"),
  arriving_to: yup.string().required("required"),
  // ticket_type: "",
  // flight_class: "",
  // departure_date: yup.string().required("required"),
  // return_date: yup.string().required("required"),
  flight_number_of_adults: yup.string().required("required"),
  flight_number_of_children: yup.string().required("required"),
  flight_number_of_infants: yup.string().required("required"),
  staying_city: yup.string().required("required"),
  // check_in_date: yup.string().required("required"),
  // check_out_date: yup.string().required("required"),
  // occupancy:"",
  // meal_plan: "",
  // hotel_number_of_adults: "",
  // hotel_number_of_children_and_age: "",
  // hotel_number_of_infants_and_age: "",
  // pick_up_date: "",
  // pick_up_time: "",
  // pick_up_location: "",
  // drop_off_location: "",
  // number_of_passengers: "",
  // car_preferred: "",
  // preferred_tour_city: "",
  // tour_date: "",
  // tour_number_of_adults: "",
  // tour_number_of_children: "",
  // tour_type: "",
  // visa_type: "",
  passport_name: yup.string().required("required"),
  visa_phone_number: yup.string().required("required"),
  visa_email: yup.string().required("required"),
});

function timeFunction(val) {
  let time;
  if (!val) {
    return (time = "");
  }
  time = new Date(val).toLocaleTimeString();
  return time;
}

function dateFunction(val) {
  let date;
  if (!val) {
    return (date = "");
  }
  date = new Date(val).toLocaleDateString();
  return date;
}

function FormSection({ sponsors, endpoint }) {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  useEffect(() => {
    if (success === true || failure === true) {
      const timer = setTimeout(() => {
        setFailure(false);
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, failure]);

  const handleFormSubmit = async (values) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${endpoint}`, {
        data: {
          ...values,
          departure_date: dateFunction(values.departure_date),
          return_date: dateFunction(values.return_date),
          check_in_date: dateFunction(values.check_in_date),
          check_out_date: dateFunction(values.check_out_date),
          pick_up_date: dateFunction(values.pick_up_date),
          tour_date: dateFunction(values.tour_date),
          pick_up_time: timeFunction(values.pick_up_time),
          flight_number_of_adults: values.flight_number_of_adults.toString(),
          flight_number_of_children:
            values.flight_number_of_children.toString(),
          flight_number_of_infants: values.flight_number_of_infants.toString(),
          hotel_number_of_adults: values.hotel_number_of_adults.toString(),
          tour_number_of_adults: values.tour_number_of_adults.toString(),
          tour_number_of_children: values.tour_number_of_children.toString(),
          number_of_passengers: values.number_of_passengers.toString(),
        },
      })
      .then(function (response) {
        setSuccess(true);
        setFailure(false);
      })
      .catch(
        function (error) {
          setSuccess(false);
          setFailure(true);
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={9}>
          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={handleFormSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Info
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="First Name"
                        onBlur={handleBlur}
                        name="first_name"
                        onChange={handleChange}
                        value={values.first_name}
                        error={!!touched.first_name && !!errors.first_name}
                        helperText={touched.first_name && errors.first_name}
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Second Name"
                        onBlur={handleBlur}
                        name="second_name"
                        onChange={handleChange}
                        value={values.second_name}
                        error={!!touched.second_name && !!errors.second_name}
                        helperText={touched.second_name && errors.second_name}
                      />
                    </Grid>{" "}
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        sx={{
                          mb: 2,
                        }}
                        onBlur={handleBlur}
                        name="email"
                        label="Email Address"
                        onChange={handleChange}
                        value={values.email}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>{" "}
                  </Grid>
                </Card1>
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Ticket
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid
                      item
                      sm={6}
                      xs={12}
                      sx={{ flexDirection: "column", display: "flex" }}
                    >
                      <FormControl>
                        <FormLabel id="ticket-type-group-label">
                          Ticket Type
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="ticket-type-group-label"
                          // defaultValue="female"
                          name="ticket_type"
                          value={values.ticket_type}
                          onChange={(event) => {
                            setFieldValue(
                              "ticket_type",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="One Way"
                            control={<Radio />}
                            label="One Way"
                          />
                          <FormControlLabel
                            value="Round Trip"
                            control={<Radio />}
                            label="Round Trip"
                          />
                          <FormControlLabel
                            value="Multi City"
                            control={<Radio />}
                            label="Multi City"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>

                    <Grid
                      item
                      sm={6}
                      xs={12}
                      sx={{ flexDirection: "column", display: "flex" }}
                    >
                      <FormControl>
                        <FormLabel id="flight-class-group-label">
                          Flight Class
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="flight-class-group-label"
                          // defaultValue="female"
                          name="flight_class"
                          value={values.flight_class}
                          onChange={(event) => {
                            setFieldValue(
                              "flight_class",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="First"
                            control={<Radio />}
                            label="First"
                          />
                          <FormControlLabel
                            value="Business"
                            control={<Radio />}
                            label="Business"
                          />
                          <FormControlLabel
                            value="Economy"
                            control={<Radio />}
                            label="Economy"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Card1>

                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Flight Details
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Leaving from (Airport Name)"
                        onBlur={handleBlur}
                        name="leaving_from"
                        onChange={handleChange}
                        value={values.leaving_from}
                        error={!!touched.leaving_from && !!errors.leaving_from}
                        helperText={touched.leaving_from && errors.leaving_from}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Arriving to (Airport Name)"
                        onBlur={handleBlur}
                        name="arriving_to"
                        onChange={handleChange}
                        value={values.arriving_to}
                        error={!!touched.arriving_to && !!errors.arriving_to}
                        helperText={touched.arriving_to && errors.arriving_to}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`departure_date`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`departure_date`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`departure_date`, val)
                                }
                                placeholderText="Departure Date"
                              />
                            );
                          }}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`return_date`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`return_date`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`return_date`, val)
                                }
                                placeholderText="Return Date"
                              />
                            );
                          }}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Adults"
                        onBlur={handleBlur}
                        name="flight_number_of_adults"
                        onChange={handleChange}
                        value={values.flight_number_of_adults}
                        error={
                          !!touched.flight_number_of_adults &&
                          !!errors.flight_number_of_adults
                        }
                        helperText={
                          touched.flight_number_of_adults &&
                          errors.flight_number_of_adults
                        }
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Children"
                        onBlur={handleBlur}
                        name="flight_number_of_children"
                        onChange={handleChange}
                        value={values.flight_number_of_children}
                        error={
                          !!touched.flight_number_of_children &&
                          !!errors.flight_number_of_children
                        }
                        helperText={
                          touched.flight_number_of_children &&
                          errors.flight_number_of_children
                        }
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Infants"
                        onBlur={handleBlur}
                        name="flight_number_of_infants"
                        onChange={handleChange}
                        value={values.flight_number_of_infants}
                        error={
                          !!touched.flight_number_of_infants &&
                          !!errors.flight_number_of_infants
                        }
                        helperText={
                          touched.flight_number_of_infants &&
                          errors.flight_number_of_infants
                        }
                      />
                    </Grid>
                  </Grid>
                </Card1>
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Hotel
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Staying City"
                        onBlur={handleBlur}
                        name="staying_city"
                        onChange={handleChange}
                        value={values.staying_city}
                        error={!!touched.staying_city && !!errors.staying_city}
                        helperText={touched.staying_city && errors.staying_city}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Field
                        name={`check_in_date`}
                        className="form-control in_field"
                      >
                        {({ form, field }) => {
                          const { setFieldValue } = form;
                          const { value } = field;
                          return (
                            <StyledDateView
                              id={`check_in_date`}
                              {...field}
                              selected={value}
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              onChange={(val) =>
                                setFieldValue(`check_in_date`, val)
                              }
                              placeholderText="Check in Date"
                            />
                          );
                        }}
                      </Field>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`check_out_date`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`check_out_date`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`check_out_date`, val)
                                }
                                placeholderText="Check out Date"
                              />
                            );
                          }}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      sm={6}
                      xs={12}
                      sx={{ flexDirection: "column", display: "flex" }}
                    >
                      <FormControl>
                        <FormLabel id="ticket-type-group-label">
                          Occupancy
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="ticket-type-group-label"
                          // defaultValue="female"
                          name="occupancy"
                          value={values.occupancy}
                          onChange={(event) => {
                            setFieldValue(
                              "occupancy",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="Single"
                            control={<Radio />}
                            label="Single"
                          />
                          <FormControlLabel
                            value="Double"
                            control={<Radio />}
                            label="Double"
                          />
                          <FormControlLabel
                            value="Other"
                            control={<Radio />}
                            label="Other"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid
                      item
                      sm={6}
                      xs={12}
                      sx={{ flexDirection: "column", display: "flex" }}
                    >
                      <FormControl>
                        <FormLabel id="ticket-type-group-label">
                          Meal Plan
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="ticket-type-group-label"
                          // defaultValue="female"
                          name="meal_plan"
                          value={values.meal_plan}
                          onChange={(event) => {
                            setFieldValue(
                              "meal_plan",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="Bed & Breakfast"
                            control={<Radio />}
                            label="Bed & Breakfast"
                          />
                          <FormControlLabel
                            value="Breakfast & lunch"
                            control={<Radio />}
                            label="Breakfast & lunch"
                          />
                          <FormControlLabel
                            value="Breakfast & Dinner"
                            control={<Radio />}
                            label="Breakfast & Dinner"
                          />
                          <FormControlLabel
                            value="Breakfast, Lunch & Dinner"
                            control={<Radio />}
                            label="Breakfast, Lunch & Dinner"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Adults"
                        onBlur={handleBlur}
                        name="hotel_number_of_adults"
                        onChange={handleChange}
                        value={values.hotel_number_of_adults}
                        error={
                          !!touched.hotel_number_of_adults &&
                          !!errors.hotel_number_of_adults
                        }
                        helperText={
                          touched.hotel_number_of_adults &&
                          errors.hotel_number_of_adults
                        }
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        rows={6}
                        fullWidth
                        multiline
                        // color="info"
                        // size="medium"
                        onBlur={handleBlur}
                        name="hotel_number_of_children_and_age"
                        onChange={handleChange}
                        label="No of Children & Age"
                        value={values.hotel_number_of_children_and_age}
                        error={
                          !!touched.hotel_number_of_children_and_age &&
                          !!errors.hotel_number_of_children_and_age
                        }
                        helperText={
                          touched.hotel_number_of_children_and_age &&
                          errors.hotel_number_of_children_and_age
                        }
                        sx={{
                          mb: 2,
                        }}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        rows={6}
                        fullWidth
                        multiline
                        // color="info"
                        // size="medium"
                        onBlur={handleBlur}
                        name="hotel_number_of_infants_and_age"
                        onChange={handleChange}
                        label="No of Infants & Age"
                        value={values.hotel_number_of_infants_and_age}
                        error={
                          !!touched.hotel_number_of_infants_and_age &&
                          !!errors.hotel_number_of_infants_and_age
                        }
                        helperText={
                          touched.hotel_number_of_infants_and_age &&
                          errors.hotel_number_of_infants_and_age
                        }
                        sx={{
                          mb: 2,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Card1>
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Transportation
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`pick_up_date`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`pick_up_date`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`pick_up_date`, val)
                                }
                                placeholderText="Pick up Date"
                              />
                            );
                          }}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`pick_up_time`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`pick_up_time`}
                                {...field}
                                selected={value}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={10}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                onChange={(val) =>
                                  setFieldValue(`pick_up_time`, val)
                                }
                                placeholderText="Pick Up Time"
                              />
                            );
                          }}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Pick Up Location"
                        onBlur={handleBlur}
                        name="pick_up_location"
                        onChange={handleChange}
                        value={values.pick_up_location}
                        error={
                          !!touched.pick_up_location &&
                          !!errors.pick_up_location
                        }
                        helperText={
                          touched.pick_up_location && errors.pick_up_location
                        }
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Drop Off Location"
                        onBlur={handleBlur}
                        name="drop_off_location"
                        onChange={handleChange}
                        value={values.drop_off_location}
                        error={
                          !!touched.drop_off_location &&
                          !!errors.drop_off_location
                        }
                        helperText={
                          touched.drop_off_location && errors.drop_off_location
                        }
                      />
                    </Grid>

                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Passengers"
                        onBlur={handleBlur}
                        name="number_of_passengers"
                        onChange={handleChange}
                        value={values.number_of_passengers}
                        error={
                          !!touched.number_of_passengers &&
                          !!errors.number_of_passengers
                        }
                        helperText={
                          touched.number_of_passengers &&
                          errors.number_of_passengers
                        }
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Preferred Car Type"
                        onBlur={handleBlur}
                        name="car_preferred"
                        onChange={handleChange}
                        value={values.car_preferred}
                        error={
                          !!touched.car_preferred && !!errors.car_preferred
                        }
                        helperText={
                          touched.car_preferred && errors.car_preferred
                        }
                      />
                    </Grid>
                  </Grid>
                </Card1>
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Tour
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Preferred Tour City"
                        onBlur={handleBlur}
                        name="preferred_tour_city"
                        onChange={handleChange}
                        value={values.preferred_tour_city}
                        error={
                          !!touched.preferred_tour_city &&
                          !!errors.preferred_tour_city
                        }
                        helperText={
                          touched.preferred_tour_city &&
                          errors.preferred_tour_city
                        }
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`tour_date`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`tour_date`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`tour_date`, val)
                                }
                                placeholderText="Tour Date"
                              />
                            );
                          }}
                        </Field>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Adults"
                        onBlur={handleBlur}
                        name="tour_number_of_adults"
                        onChange={handleChange}
                        value={values.tour_number_of_adults}
                        error={
                          !!touched.tour_number_of_adults &&
                          !!errors.tour_number_of_adults
                        }
                        helperText={
                          touched.tour_number_of_adults &&
                          errors.tour_number_of_adults
                        }
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        type={"number"}
                        sx={{
                          mb: 2,
                        }}
                        label="No of Children"
                        onBlur={handleBlur}
                        name="tour_number_of_children"
                        onChange={handleChange}
                        value={values.tour_number_of_children}
                        error={
                          !!touched.tour_number_of_children &&
                          !!errors.tour_number_of_children
                        }
                        helperText={
                          touched.tour_number_of_children &&
                          errors.tour_number_of_children
                        }
                      />
                    </Grid>

                    <Grid
                      item
                      sm={6}
                      xs={12}
                      sx={{ flexDirection: "column", display: "flex" }}
                    >
                      <FormControl>
                        <FormLabel id="tour-type-group-label">
                          Tour Type
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="tour-type-group-label"
                          // defaultValue="female"
                          name="occupancy"
                          value={values.tour_type}
                          onChange={(event) => {
                            setFieldValue(
                              "tour_type",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="Half Day Tour"
                            control={<Radio />}
                            label="Half Day Tour"
                          />
                          <FormControlLabel
                            value="Full Day Tour"
                            control={<Radio />}
                            label="Full Day Tour"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Card1>
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Card1
                  sx={{
                    mb: 4,
                    overflow: "visible",
                  }}
                  elevation={2}
                >
                  <Typography fontWeight="600" mb={2}>
                    Visa
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid
                      item
                      sm={6}
                      xs={12}
                      sx={{ flexDirection: "column", display: "flex" }}
                    >
                      <FormControl>
                        <FormLabel id="visa-type-group-label">
                          Visa Type
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="tour-type-group-label"
                          // defaultValue="female"
                          name="occupancy"
                          value={values.visa_type}
                          onChange={(event) => {
                            setFieldValue(
                              "visa_type",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="30 Days"
                            control={<Radio />}
                            label="30 Days"
                          />
                          <FormControlLabel
                            value="90 Days"
                            control={<Radio />}
                            label="90 Days"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Full Name as per Passport"
                        onBlur={handleBlur}
                        name="passport_name"
                        onChange={handleChange}
                        value={values.passport_name}
                        error={
                          !!touched.passport_name && !!errors.passport_name
                        }
                        helperText={
                          touched.passport_name && errors.passport_name
                        }
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        onBlur={handleBlur}
                        label="Phone Number"
                        onChange={handleChange}
                        name="visa_phone_number"
                        value={values.visa_phone_number}
                        error={
                          !!touched.visa_phone_number &&
                          !!errors.visa_phone_number
                        }
                        helperText={
                          touched.visa_phone_number && errors.visa_phone_number
                        }
                      />
                    </Grid>{" "}
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        type="email"
                        sx={{
                          mb: 2,
                        }}
                        onBlur={handleBlur}
                        name="visa_email"
                        label="Email Address"
                        onChange={handleChange}
                        value={values.visa_email}
                        error={!!touched.visa_email && !!errors.visa_email}
                        helperText={touched.visa_email && errors.visa_email}
                      />
                    </Grid>{" "}
                  </Grid>
                  <Box id={"visa-info"}>
                    <Box>
                      <H4>Requirements:</H4>
                      <Box sx={{ pl: 3 }}>
                        <Typography> 1. Color Passport Copy</Typography>
                        <Typography>
                          2. Passport Size Photo (White Background)
                        </Typography>
                        <Typography>
                          {" "}
                          3. National ID Card (Manadatory for Pakistan and Iraq
                          Nationalities)
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <H4>Cost:</H4>
                      <Box sx={{ pl: 3 }}>
                        <Typography>
                          {" "}
                          30 days tourist single entry visa - USD 135
                        </Typography>
                        <Typography>
                          90 days tourist single entry visa - USD 410
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <H4>Other Charges:</H4>
                      <Box sx={{ pl: 3 }}>
                        <Typography>Absconding - USD 2050</Typography>
                        <Typography>Lost Passport - USD 140</Typography>
                        <Typography>NOC - USD 85</Typography>
                        <Typography>
                          Tourist Visa Cancellation: USD 100
                        </Typography>
                        <Typography>Health Insurance : USD 85</Typography>
                      </Box>
                    </Box>
                  </Box>
                  {failure && (
                    <Alert sx={{ my: "30px" }} severity="error">
                      Failed to submit form
                    </Alert>
                  )}
                  {success && (
                    <Alert sx={{ my: "30px" }} severity="success">
                      form submitted successfully
                    </Alert>
                  )}
                </Card1>
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                {/* /----------------------------------------------------- */}
                <Grid container spacing={6}>
                  <Grid item sm={6} xs={12}></Grid>
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={12} md={3} pl={{ md: 5, xs: 0 }} pt={{ xs: 5, md: 0 }}>
          <Card1
            sx={{
              mb: 4,
            }}
            elevation={2}
          >
            <Stack spacing={"30px"}>
              {sponsorsData.map((sponsor) => {
                return (
                  <Box
                    key={sponsor.source}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Card1>
                      <H4>{sponsor.text}</H4>
                      <Image
                        key={sponsor.source}
                        src={sponsor.source}
                        alt="sponsor logo"
                        width={"80%"}
                        sx={{ margin: "auto" }}
                      ></Image>
                    </Card1>
                  </Box>
                );
              })}
            </Stack>
          </Card1>
        </Grid>
      </Grid>
    </>
  );
}

export default FormSection;
