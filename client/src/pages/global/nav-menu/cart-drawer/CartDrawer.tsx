import { useDispatch, useSelector } from "react-redux";

import { Close, ProductionQuantityLimits } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

import { CartActions } from "./cart-actions";
import { CartItems } from "./cart-items";
import { Flex } from "../../../../components";
import { RootState } from "../../../../redux-store";
import { closeNavMenus } from "../../../../redux-store/navReducer";
import { shades } from "../../../../theme";

export const CartDrawer = () => {
  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Box padding="30px" overflow="auto" height="100%">
      <Flex marginBottom="15px" justifyContent="space-between">
        <Typography variant="h3">SHOPPING CART ({cartItems.length})</Typography>
        <IconButton onClick={() => dispatch(closeNavMenus({}))}>
          <Close fontSize="large" />
        </IconButton>
      </Flex>
      {cartItems && cartItems?.length > 0 ? (
        <>
          <CartItems />
          <CartActions />
        </>
      ) : (
        <Flex flexDirection="column">
          <Typography
            variant="h3"
            margin="20px 0 20vh 0"
            sx={{ maxWidth: "90%", color: shades.neutral[700] }}
          >
            Oops! It looks like you don't have any products in your cart yet.
          </Typography>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <ProductionQuantityLimits
              fontSize="large"
              sx={{
                transform: isGreaterThanMobile ? "scale(4)" : "scale(3)",
                color: shades.neutral[300],
              }}
            />
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
