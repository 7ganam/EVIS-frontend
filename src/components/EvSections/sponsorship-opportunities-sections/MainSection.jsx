import { Formik } from "formik";
import { Button, Grid, Stack, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Card1 from "src/components/Card1";
import countryList from "src/data/countryList";
import { Typography } from "@mui/material";

import * as yup from "yup";
import Image from "src/components/BazarImage";

const initialValues = {
  first_name: "",
  second_name: "",
  job_title: "",
  city: "",
  country: countryList[229],
  shipping_contact: "",
  address: "",
  website: "",
  email: "",
  company: "",
  poBox: "",
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
function MainSection({ sponsors }) {
  const handleFormSubmit = async (values) => {
    console.log(values);
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
                  <Typography fontWeight="600" mb={2}>
                    Sponsorship opportunities provided by Electric Vehicle
                    Innovation Summit (EVIS) Annual Exhibition and Conference
                    are specially designed to allow your organization to enjoy
                    maximum exposure to a sophisticated and interested audience
                    of Electric Vehicles. Our audience includes high level
                    decision makers, buyers and investors of the industry.
                  </Typography>
                  <Typography fontWeight="600" mb={2}>
                    Please fill in some basic details and our dedicated
                    executive will be in touch with you shortly.
                  </Typography>

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
                        label="Company Name"
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
                        value={values.shipping_country}
                        getOptionLabel={(option) => option.label}
                        onChange={(_, value) =>
                          setFieldValue("shipping_country", value)
                        }
                        renderInput={(params) => (
                          <TextField
                            label="Country"
                            variant="outlined"
                            placeholder="Select Country"
                            error={
                              !!touched.shipping_country &&
                              !!errors.shipping_country
                            }
                            helperText={
                              touched.shipping_country &&
                              errors.shipping_country
                            }
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
                        type="number"
                        sx={{
                          mb: 2,
                        }}
                        label="Zip Code"
                        name="shipping_zip"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.shipping_zip}
                        error={!!touched.shipping_zip && !!errors.shipping_zip}
                        helperText={touched.shipping_zip && errors.shipping_zip}
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
                    <Grid item sm={12} xs={12}>
                      <TextField
                        fullWidth
                        sx={{
                          mb: 2,
                        }}
                        label="PO Box"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="poBox"
                        value={values.poBox}
                        error={!!touched.poBox && !!errors.poBox}
                        helperText={touched.poBox && errors.poBox}
                      />
                    </Grid>{" "}
                  </Grid>
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

export default MainSection;
