import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import OrderSummary from "./order-summary/OrderSummary";
import { Flex } from "../../components";
import PaymentTypes from "../../components/payment-types/PaymentTypes";

interface PaymentProps {
  values: any;
  touched: any;
  errors: any;
  handleBlur: any;
  handleChange: any;
  setFieldValue: (fieldName: string, value: any) => void; // TODO: find actual type for all checkout files
}

const Payment = (props: PaymentProps) => {
  const { values, touched, errors, handleBlur, handleChange } = props;
  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ marginBottom: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
        {/* TODO: Add current cart items and totals here for final review  */}
        <Flex marginTop="40px" flexDirection="column" gap="10px">
          <Typography variant="h4">Available Payment Methods:</Typography>

          <PaymentTypes />
        </Flex>
        <OrderSummary />
      </Box>
    </Box>
  );
};

export default Payment;
