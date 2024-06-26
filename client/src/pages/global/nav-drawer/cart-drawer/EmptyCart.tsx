import { ProductionQuantityLimits } from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";

import { Flex } from "../../../../components";
import { shades } from "../../../../theme";

const EmptyCart = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Flex flexDirection="column">
      <Typography
        variant="h3"
        margin="20px 0 20vh 0"
        sx={{ maxWidth: "350px", color: shades.neutral[700] }}
      >
        Oops! It looks like you don't have any products in your cart yet.
      </Typography>
      <Flex width="100%" alignItems="center" justifyContent="center">
        <ProductionQuantityLimits
          fontSize="large"
          sx={{
            transform: isMobile ? "scale(3)" : "scale(4)",
            color: shades.neutral[300],
          }}
        />
      </Flex>
    </Flex>
  );
};

export default EmptyCart;
