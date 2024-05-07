import { Box, Typography } from "@mui/material";

const RefundsAndReturns = () => {
  return (
    <Box padding="60px" marginTop="60px" fontSize="16px">
      <Typography variant="h1">RETURN POLICY</Typography>
      Last updated May 06, 2024
      <br />
      <br />
      <Typography fontSize="18px">
        Thank you for your purchase. We, at Goodwin biking, hope you are happy
        with your purchase. However, if you are not completely satisfied with
        your purchase for any reason, you may return it to us for a full refund
        or an exchange within 30 days of the initial purchase date. <br />
        Please see below for more information on our return policy.
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h2">RETURNS</Typography>
      All returns must be postmarked{" "}
      <span style={{ fontWeight: "600" }}>within thirty (30) days</span> of the
      purchase date. All returned items must be in new and unused condition,
      with all original tags and labels attached.
      <br />
      <br />
      <br />
      <Typography variant="h2">RETURN PROCESS</Typography>
      To return an item, place the item securely in its original packaging, and
      mail your return to the following address:
      <br />
      <br />
      <br />
      <Typography variant="h3" color="primary">
        Goodwin Biking
        <br /> 4063 N Fairfield Dr. <br />
        Eagle Mountain, UT 84005 <br />
        United States of America <br />
      </Typography>
      <br />
      <Typography fontSize="16px">
        Please note, you will be responsible for{" "}
        <span style={{ fontWeight: "600" }}>all return shipping charges.</span>{" "}
        We strongly recommend that you use a trackable method to mail your
        return.
      </Typography>
      <br />
      <br />
      <Typography variant="h2">REFUNDS</Typography>
      After receiving your return and inspecting the condition of your item, we
      will process your return or exchange. Please allow at least seven (7) days
      from the receipt of your item to process your return or exchange. We may
      notify you by email when your return has been processed.
      <br />
      <br />
      <br />
      <Typography variant="h2">EXCEPTIONS</Typography>
      For defective or damaged products due to factory manufacturing or shipping
      complications, please contact us at the contact details below to arrange a
      refund or exchange.
      <br />
      <br />
      <br />
      <Typography variant="h2">QUESTIONS</Typography>
      If you have any questions concerning our return policy, please contact us
      at: 801-884-3549 or email us at: goodwinbiking@gmail.com
    </Box>
  );
};

export default RefundsAndReturns;
