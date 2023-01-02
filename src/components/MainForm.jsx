import { Formik } from "formik";
import { Button, Grid, Stack, TextField, Box } from "@mui/material";
import { H4 } from "src/components/EvComponents/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Card1 from "src/components/Card1";
import countryList from "src/data/countryList";
import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import Image from "src/components/BazarImage";
import Alert from "@mui/material/Alert";

const initialValues = {
  first_name: "",
  second_name: "",
  job_title: "",
  city: "",
  country: countryList[229],
  phone_number: "",
  address: "",
  website: "",
  email: "",
}; // uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  second_name: yup.string().required("required"),
  job_title: yup.string().required("required"),
  country: yup.object().required("required"),
  // city: yup.string().required("required"),
  email: yup.string().required("required"),
  phone_number: yup.string(),
  // address: yup.string().required("required"),
  // website: yup.string().required("required"),
});
function DownloadForm({ sponsors, endpoint }) {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleFormSubmit = async (values) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${endpoint}`, {
        data: {
          ...values,
          country: values.country.label,
        },
      })
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
    <>
      <Grid container spacing={4}>
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
                  }}
                  elevation={2}
                >
                  {/* <Typography fontWeight="600" mb={2}>
                    Shipping Address
                  </Typography> */}

                  <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Job Title"
                        onBlur={handleBlur}
                        name="job_title"
                        onChange={handleChange}
                        value={values.job_title}
                        error={!!touched.job_title && !!errors.job_title}
                        helperText={touched.job_title && errors.job_title}
                      />
                    </Grid>{" "}
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Nationality"
                        onBlur={handleBlur}
                        name="nationality"
                        onChange={handleChange}
                        value={values.nationality}
                        error={!!touched.nationality && !!errors.nationality}
                        helperText={touched.nationality && errors.nationality}
                      />
                    </Grid>{" "}
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        onBlur={handleBlur}
                        label="Phone Number"
                        onChange={handleChange}
                        name="phone_number"
                        value={values.phone_number}
                        error={!!touched.phone_number && !!errors.phone_number}
                        helperText={touched.phone_number && errors.phone_number}
                      />
                    </Grid>{" "}
                    <Grid item sm={6} xs={12}>
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
                    <Grid item sm={6} xs={12}>
                      <Autocomplete
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        options={countryList}
                        value={values.country}
                        getOptionLabel={(option) => option.label}
                        onChange={(_, value) => {
                          setFieldValue("country", value);
                        }}
                        renderInput={(params) => (
                          <TextField
                            label="Country"
                            variant="outlined"
                            placeholder="Select Country"
                            error={!!touched.country && !!errors.country}
                            helperText={touched.country && errors.country}
                            {...params}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        name="city"
                        label="City"
                        value={values.city}
                        onChange={handleChange}
                        helperText={touched.city && errors.city}
                        error={touched.city && Boolean(errors.city)}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Zip Code"
                        name="zip_code"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.zip_code}
                        error={!!touched.zip_code && !!errors.zip_code}
                        helperText={touched.zip_code && errors.zip_code}
                      />
                    </Grid>{" "}
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="Website"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="website"
                        value={values.website}
                        error={!!touched.website && !!errors.website}
                        helperText={touched.website && errors.website}
                      />
                    </Grid>{" "}
                    <Grid item sm={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="address"
                        value={values.address}
                        error={!!touched.address && !!errors.address}
                        helperText={touched.address && errors.address}
                      />
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
                </Card1>

                <Grid container spacing={6}>
                  <Grid item sm={6} xs={12}></Grid>
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card1
            sx={{
              mb: 4,
            }}
            elevation={2}
          >
            <Stack spacing={"30px"}>
              {sponsors.map((sponsor) => {
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

export default DownloadForm;
