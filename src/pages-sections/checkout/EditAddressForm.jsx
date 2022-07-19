import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
const checkoutSchema = yup.object({
  address2: yup.string(),
  name: yup.string().required("required"),
  address1: yup.string().required("required"),
  phone: yup.number().required("required"),
}); // ================================================================

// ================================================================
const EditAddressForm = (props) => {
  const {
    addressData,
    selected,
    setAddressData,
    openEditForm,
    setOpenEditForm,
  } = props;
  const initialValues = {
    name: selected.name,
    phone: selected.phone,
    address1: selected.address1,
    address2: selected.address2,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      const updated = addressData.map((item) => {
        return item.name === selected.name ? values : item;
      });
      setAddressData(updated);
      if (updated) return setOpenEditForm(false);
    },
  });
  return (
    <Dialog open={openEditForm} onClose={() => setOpenEditForm(false)}>
      <DialogContent>
        <Typography variant="h6" mb={3}>
          Edit Address Information
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Box mb={3}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  type="text"
                  label="Enter Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  helperText={formik.touched.name && formik.errors.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="address1"
                  label="Address line 1"
                  value={formik.values.address1}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address1 && Boolean(formik.errors.address1)
                  }
                  helperText={formik.touched.address1 && formik.errors.address1}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="address2"
                  label="Address line 2"
                  value={formik.values.address2}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address2 && Boolean(formik.errors.address2)
                  }
                  helperText={formik.touched.address2 && formik.errors.address2}
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="phone"
                  label="Enter Your Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
            </Grid>
          </Box>

          <Button color="primary" variant="contained" type="submit">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditAddressForm;
