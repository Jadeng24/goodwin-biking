import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

const ItemShippingAndReturns = () => {
  return (
    <Box marginBottom="20px">
      <Typography variant="h4">SHIPPING & RETURNS</Typography>
      <Typography fontWeight="600">
        Free shipping on orders over $100!
      </Typography>
      <Typography>
        For questions about our 30-day return policy, please visit the
        <Link to="/returns"> Returns </Link>page.
      </Typography>
    </Box>
  );
};

export default ItemShippingAndReturns;
