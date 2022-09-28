import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card1 from "src/components/Card1";
import countryList from "src/data/countryList";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as yup from "yup";
import { SectionSubTitle } from "src/components/StyledTypography";
import axios from "axios";
import Alert from "@mui/material/Alert";

const SubscribeSection = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleFormSubmit = async (values) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/application-for-newsletters`,
        {
          data: {
            ...values,
          },
        }
      )
      .then(function (response) {
        setSuccess(true);
        setFailure(false);
      })
      .catch(function (error) {
        setSuccess(false);
        setFailure(true);
      });
  };

  return (
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
      }) => (
        <form onSubmit={handleSubmit}>
          <Card
            sx={{
              my: 4,
              px: 3,
              pb: 3,
            }}
            elevation={3}
          >
            <SectionSubTitle text={"Subscribe To Our News Letter"} />
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  label="First Name"
                  name="first_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.first_name}
                  error={!!touched.first_name && !!errors.first_name}
                  helperText={touched.first_name && errors.first_name}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  label="Last Name"
                  name="last_name"
                  onChange={handleChange}
                  value={values.last_name}
                  error={!!touched.last_name && !!errors.last_name}
                  helperText={touched.last_name && errors.last_name}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6} justifyContent={"center"}>
              <Grid item sm={3} xs={12} mt={{ xs: "20px", md: "10px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Send
                </Button>
              </Grid>
            </Grid>

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
          </Card>
        </form>
      )}
    </Formik>
  );
};

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
}; // uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  email: yup.string().required("required"),
});
export default SubscribeSection;
