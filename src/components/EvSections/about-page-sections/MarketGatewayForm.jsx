import { Button, Card, Grid, TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { SectionSubTitle } from "src/components/StyledTypography";
import axios from "axios";
import Alert from "@mui/material/Alert";

const MarketGatewayForm = () => {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleFormSubmit = async (values) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/application-for-gateway`,
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
            elevation={10}
          >
            <SectionSubTitle
              text={
                "To benefit from this feature, please apply by filling out this form."
              }
            />
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  label="Exhibitor"
                  name="exhibitor"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.exhibitor}
                  error={!!touched.exhibitor && !!errors.exhibitor}
                  helperText={touched.exhibitor && errors.exhibitor}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  label="Focal Person"
                  name="focal_person"
                  onChange={handleChange}
                  value={values.focal_person}
                  error={!!touched.focal_person && !!errors.focal_person}
                  helperText={touched.focal_person && errors.focal_person}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  label="Job Title"
                  name="job_title"
                  onChange={handleChange}
                  value={values.job_title}
                  error={!!touched.job_title && !!errors.job_title}
                  helperText={touched.job_title && errors.job_title}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  label="Mobile Number"
                  name="mobile_number"
                  onChange={handleChange}
                  value={values.mobile_number}
                  error={!!touched.mobile_number && !!errors.mobile_number}
                  helperText={touched.mobile_number && errors.mobile_number}
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
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  sx={{
                    mb: 2,
                  }}
                  onBlur={handleBlur}
                  label="Area of Interest"
                  name="interest_area"
                  onChange={handleChange}
                  value={values.interest_area}
                  error={!!touched.interest_area && !!errors.interest_area}
                  helperText={touched.interest_area && errors.interest_area}
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
  exhibitor: "",
  focal_person: "",
  job_title: "",
  mobile_number: "",
  interest_area: "",
  email: "",
}; // uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  exhibitor: yup.string().required("required"),
  focal_person: yup.string().required("required"),
  job_title: yup.string().required("required"),
  mobile_number: yup.string().required("required"),
  interest_area: yup.string().required("required"),
  email: yup.string().required("required"),
});
export default MarketGatewayForm;
