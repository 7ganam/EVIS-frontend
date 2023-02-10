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
  last_name: "",
  company: "",
  job_title: "",
  country: countryList[229],
  phone_number: "",
  email: "",
}; // uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  company: yup.string().required("required"),
  job_title: yup.string().required("required"),
  country: yup.object().required("required"),
  email: yup.string().required("required"),
  phone_number: yup.string(),
});
function DownloadForm({ sponsors, endpoint, downloadFileUrl, fileName }) {
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

    fetch(downloadFileUrl)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        // the filename you want
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert("your file has downloaded!");
      })
      .catch(() => alert("file failed to download"));
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
                        name="last_name"
                        onChange={handleChange}
                        value={values.last_name}
                        error={!!touched.last_name && !!errors.last_name}
                        helperText={touched.last_name && errors.last_name}
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
                        label="Company"
                        onBlur={handleBlur}
                        name="company"
                        onChange={handleChange}
                        value={values.company}
                        error={!!touched.company && !!errors.company}
                        helperText={touched.company && errors.company}
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
                      Submit & Download
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
