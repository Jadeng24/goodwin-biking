import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Formik } from "formik";
import * as yup from "yup";

import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { RootState } from "../..";

const stripePromise = loadStripe(
  "pk_live_51PCEdRJG5Gh9OuClxoT60iad0ZtsVjRoMZ2lGpCSiwPJbvMez7RHf7JLcnVIZlte8qpZmMxQfjJ7VIQxV8Y4kAV600v7iNi0lE"
);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values: any, actions: any) => {
    setActiveStep(activeStep + 1);

    // Copy billing address to shipping address
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values: any) {
    // TODO: add type
    const stripe = await stripePromise;
    const requestBody = {
      userName: [values.firstName, values.lastName].join(" "),
      email: values.email,
      products: cart.map((item: any) => ({
        id: item.id,
        count: item.count,
      })),
    };

    const response = await fetch("http://localhost:1337/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe?.redirectToCheckout({
      sessionId: session.id,
    });
  }

  return (
    <Box width="80%" m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Box>
        {/* TODO: move to separate component  */}
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              {isSecondStep && (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
              <Box display="flex" justifyContent="space-between" gap="50px">
                {!isFirstStep && (
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[400],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: "15px 40px",
                  }}
                >
                  {!isSecondStep ? "Next" : "Review and Payment"}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    // shippingAddress: yup.object().shape({
    //   isSameAddress: yup.boolean(),
    //   firstName: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    //   lastName: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    //   country: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    //   street1: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    //   street2: yup.string(),
    //   city: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    //   state: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    //   zipCode: yup.string().when("isSameAddress", {
    //     is: false,
    //     then: yup.string().required("required"),
    //   }),
    // }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

export default Checkout;
