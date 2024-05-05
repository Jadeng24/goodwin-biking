import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

import AddressForm from "./AddressForm";

interface ShippingProps {
  values: any;
  touched: any;
  errors: any;
  handleBlur: any;
  handleChange: any;
  setFieldValue: (fieldName: string, value: any) => void;
}

const Shipping = (props: ShippingProps) => {
  const { values, touched, errors, handleChange, handleBlur, setFieldValue } =
    props;

  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      {/* TODO: break into separate component  */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
        <AddressForm
          errors={errors} // 'required' or ''
          handleBlur={handleBlur}
          handleChange={handleChange}
          touched={touched} // has use clicked on field
          type="billingAddress"
          values={values.billingAddress}
        />
      </Box>

      <Box mb="20px">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() =>
                setFieldValue(
                  "shippingAddress.isSameAddress",
                  !values.shippingAddress.isSameAddress
                )
              }
            />
          }
          label="Same for Shipping Address"
        />
      </Box>

      {/* SHIPPING FORM */}
      {/* TODO: break into separate component  */}
      {!values.shippingAddress.isSameAddress && (
        <Box>
          <Typography sx={{ mb: "15px" }} fontSize="18px">
            Shipping Information
          </Typography>
          <AddressForm
            type="shippingAddress"
            values={values.shippingAddress}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default Shipping;
