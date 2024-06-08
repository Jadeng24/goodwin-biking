import { useState } from "react";
import { useSelector } from "react-redux";

import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";

import { Formik } from "formik";
import * as yup from "yup";

import { shades } from "../../theme";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { makeRequest } from "../../makeRequest";
import { RootState } from "../../redux-store";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const products = useSelector((state: RootState) => state.cart.cartItems);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const stripePromise = loadStripe(
    process.env.REACT_APP_PUBLISHABLE_STRIPE_KEY || ""
  );

  const handlePayment = async (formValues: any) => {
    const { email, shippingAddress } = formValues || {};
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
        shippingAddress,
        email: email,
        userName: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (formValues: any, actions: any) => {
    setActiveStep(activeStep + 1);

    // Copy billing address to shipping address
    if (isFirstStep && formValues.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...formValues.billingAddress,
        isSameAddress: true,
      });
    }

    if (isSecondStep) {
      handlePayment(formValues);
    }

    actions.setTouched({});
  };

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
