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
import Card1 from "components/Card1";
import countryList from "data/countryList";
import { Typography } from "@mui/material";

import * as yup from "yup";
import Image from "components/BazarImage";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, Divider, Radio, styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { H4, Paragraph } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import CheckoutForm2 from "pages-sections/checkout/CheckoutForm2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  ticketType: "",
  flightClass: "",
  departureDate: "",
}; // uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  // shipping_name: yup.string().required("required"),
  // shipping_email: yup.string().email("invalid email").required("required"),
  // shipping_contact: yup.string().required("required"),
  // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.object().required("required"),
  // billing_address1: yup.string().required("required"),
});
function FormSection({ sponsors }) {
  const handleFormSubmit = async (values) => {
    console.log(values);
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
                          name="ticketType"
                          value={values.ticketType}
                          onChange={(event) => {
                            setFieldValue(
                              "ticketType",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="one-way"
                            control={<Radio />}
                            label="One Way"
                          />
                          <FormControlLabel
                            value="round-trip"
                            control={<Radio />}
                            label="Round Trip"
                          />
                          <FormControlLabel
                            value="multi-city"
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
                          name="flightClass"
                          value={values.flightClass}
                          onChange={(event) => {
                            setFieldValue(
                              "flightClass",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="first"
                            control={<Radio />}
                            label="First"
                          />
                          <FormControlLabel
                            value="business"
                            control={<Radio />}
                            label="Business"
                          />
                          <FormControlLabel
                            value="economy"
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
                        name="leavingAirport"
                        onChange={handleChange}
                        value={values.leavingAirport}
                        error={
                          !!touched.leavingAirport && !!errors.leavingAirport
                        }
                        helperText={
                          touched.leavingAirport && errors.leavingAirport
                        }
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
                        name="arrivingAirport"
                        onChange={handleChange}
                        value={values.arrivingAirport}
                        error={
                          !!touched.arrivingAirport && !!errors.arrivingAirport
                        }
                        helperText={
                          touched.arrivingAirport && errors.arrivingAirport
                        }
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box
                        sx={{
                          mb: 2,
                        }}
                      >
                        <Field
                          name={`departureDate`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`departureDate`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`departureDate`, val)
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
                          name={`returnDate`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`returnDate`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`returnDate`, val)
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
                        name="adultsNo"
                        onChange={handleChange}
                        value={values.adultsNo}
                        error={!!touched.adultsNo && !!errors.adultsNo}
                        helperText={touched.adultsNo && errors.adultsNo}
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
                        name="childrenNo"
                        onChange={handleChange}
                        value={values.childrenNo}
                        error={!!touched.childrenNo && !!errors.childrenNo}
                        helperText={touched.childrenNo && errors.childrenNo}
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
                        name="infantsNo"
                        onChange={handleChange}
                        value={values.infantsNo}
                        error={!!touched.infantsNo && !!errors.infantsNo}
                        helperText={touched.infantsNo && errors.infantsNo}
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
                        name="stayingCity"
                        onChange={handleChange}
                        value={values.stayingCity}
                        error={!!touched.stayingCity && !!errors.stayingCity}
                        helperText={touched.stayingCity && errors.stayingCity}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Field
                        name={`checkInDate`}
                        className="form-control in_field"
                      >
                        {({ form, field }) => {
                          const { setFieldValue } = form;
                          const { value } = field;
                          return (
                            <StyledDateView
                              id={`checkInDate`}
                              {...field}
                              selected={value}
                              peekNextMonth
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                              onChange={(val) =>
                                setFieldValue(`checkInDate`, val)
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
                          name={`checkOutDate`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`checkOutDate`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`checkOutDate`, val)
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
                            value="single"
                            control={<Radio />}
                            label="Single"
                          />
                          <FormControlLabel
                            value="double"
                            control={<Radio />}
                            label="Double"
                          />
                          <FormControlLabel
                            value="other"
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
                          name="mealPlan"
                          value={values.mealPlan}
                          onChange={(event) => {
                            setFieldValue(
                              "mealPlan",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="BedBreakfast"
                            control={<Radio />}
                            label="Bed & Breakfast"
                          />
                          <FormControlLabel
                            value="breakfastLunch"
                            control={<Radio />}
                            label="Breakfast & lunch"
                          />
                          <FormControlLabel
                            value="breakfastDinner"
                            control={<Radio />}
                            label="Breakfast & Dinner"
                          />
                          <FormControlLabel
                            value="breakfastLunchDinner"
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
                        name="adultsNo"
                        onChange={handleChange}
                        value={values.adultsNo}
                        error={!!touched.adultsNo && !!errors.adultsNo}
                        helperText={touched.adultsNo && errors.adultsNo}
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
                        name="childrenAndAges"
                        onChange={handleChange}
                        label="No of Children & Age"
                        value={values.childrenAndAges}
                        error={
                          !!touched.childrenAndAges && !!errors.childrenAndAges
                        }
                        helperText={
                          touched.childrenAndAges && errors.childrenAndAges
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
                        name="infantsAndAges"
                        onChange={handleChange}
                        label="No of Infants & Age"
                        value={values.infantsAndAges}
                        error={
                          !!touched.infantsAndAges && !!errors.infantsAndAges
                        }
                        helperText={
                          touched.infantsAndAges && errors.infantsAndAges
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
                          name={`pickupDate`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`pickupDate`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`pickupDate`, val)
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
                          name={`pickupTime`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`pickupTime`}
                                {...field}
                                selected={value}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={10}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                onChange={(val) =>
                                  setFieldValue(`pickupTime`, val)
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
                        name="pickUpLocation"
                        onChange={handleChange}
                        value={values.pickUpLocation}
                        error={
                          !!touched.pickUpLocation && !!errors.pickUpLocation
                        }
                        helperText={
                          touched.pickUpLocation && errors.pickUpLocation
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
                        name="drpOffLocation"
                        onChange={handleChange}
                        value={values.drpOffLocation}
                        error={
                          !!touched.drpOffLocation && !!errors.drpOffLocation
                        }
                        helperText={
                          touched.drpOffLocation && errors.drpOffLocation
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
                        name="passengersNo"
                        onChange={handleChange}
                        value={values.passengersNo}
                        error={!!touched.passengersNo && !!errors.passengersNo}
                        helperText={touched.passengersNo && errors.passengersNo}
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
                        name="preferredCarType"
                        onChange={handleChange}
                        value={values.preferredCarType}
                        error={
                          !!touched.preferredCarType &&
                          !!errors.preferredCarType
                        }
                        helperText={
                          touched.preferredCarType && errors.preferredCarType
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
                        name="preferredTourCity"
                        onChange={handleChange}
                        value={values.preferredTourCity}
                        error={
                          !!touched.preferredTourCity &&
                          !!errors.preferredTourCity
                        }
                        helperText={
                          touched.preferredTourCity && errors.preferredTourCity
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
                          name={`tourDate`}
                          className="form-control in_field"
                        >
                          {({ form, field }) => {
                            const { setFieldValue } = form;
                            const { value } = field;
                            return (
                              <StyledDateView
                                id={`tourDate`}
                                {...field}
                                selected={value}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={(val) =>
                                  setFieldValue(`tourDate`, val)
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
                        name="tourAdultsNo"
                        onChange={handleChange}
                        value={values.tourAdultsNo}
                        error={!!touched.tourAdultsNo && !!errors.tourAdultsNo}
                        helperText={touched.tourAdultsNo && errors.tourAdultsNo}
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
                        name="tourChildrenNo"
                        onChange={handleChange}
                        value={values.tourChildrenNo}
                        error={
                          !!touched.tourChildrenNo && !!errors.tourChildrenNo
                        }
                        helperText={
                          touched.tourChildrenNo && errors.tourChildrenNo
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
                          value={values.tourType}
                          onChange={(event) => {
                            setFieldValue(
                              "tourType",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="halfDayTour"
                            control={<Radio />}
                            label="Half Day Tour"
                          />
                          <FormControlLabel
                            value="fullDayTour"
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
                          value={values.visaType}
                          onChange={(event) => {
                            setFieldValue(
                              "visaType",
                              event.currentTarget.value
                            );
                          }}
                        >
                          <FormControlLabel
                            value="30Days"
                            control={<Radio />}
                            label="30 Days"
                          />
                          <FormControlLabel
                            value="90Days"
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
                        name="passportFullName"
                        onChange={handleChange}
                        value={values.passportFullName}
                        error={
                          !!touched.passportFullName &&
                          !!errors.passportFullName
                        }
                        helperText={
                          touched.passportFullName && errors.passportFullName
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
                        name="shipping_contact"
                        value={values.shipping_contact}
                        error={
                          !!touched.shipping_contact &&
                          !!errors.shipping_contact
                        }
                        helperText={
                          touched.shipping_contact && errors.shipping_contact
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
                        name="email"
                        label="Email Address"
                        onChange={handleChange}
                        value={values.email}
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
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
              overflow: "visible",
            }}
            elevation={2}
          >
            <Stack>
              {sponsors.map((sponsor) => {
                return (
                  <Image
                    key={sponsor.source}
                    src={sponsor.source}
                    alt="sponsor logo"
                    width={"80%"}
                    sx={{ margin: "auto" }}
                  ></Image>
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
