import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card1 from "components/Card1";
import countryList from "data/countryList";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as yup from "yup";
import { SectionSubTitle } from "components/StyledTypography";

const SubscribeSection = () => {
  const router = useRouter();
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const handleFormSubmit = async (values) => {
    router.push("/payment");
  };

  const handleCheckboxChange = (values, setFieldValue) => (e, _) => {
    const checked = e.currentTarget.checked;
    setSameAsShipping(checked);
    setFieldValue("same_as_shipping", checked);
    setFieldValue("billing_name", checked ? values.shipping_name : "");
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
        setFieldValue,
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
                  name="billing_name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.billing_name}
                  error={!!touched.billing_name && !!errors.billing_name}
                  helperText={touched.billing_name && errors.billing_name}
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
                  name="billing_contact"
                  onChange={handleChange}
                  value={values.billing_contact}
                  error={!!touched.billing_contact && !!errors.billing_contact}
                  helperText={touched.billing_contact && errors.billing_contact}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="billing_address1"
                  value={values.billing_address1}
                  error={
                    !!touched.billing_address1 && !!errors.billing_address1
                  }
                  helperText={
                    touched.billing_address1 && errors.billing_address1
                  }
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
          </Card>
        </form>
      )}
    </Formik>
  );
};

const initialValues = {
  shipping_zip: "",
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_country: countryList[229],
  billing_zip: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_address1: "",
  billing_address2: "",
  billing_country: countryList[229],
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
export default SubscribeSection;
