import { useDispatch, useSelector } from "react-redux";

import { Close, ProductionQuantityLimits } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import { CartActions } from "./cart-actions";
import { CartItems } from "./cart-items";
import { Flex } from "../../../../components";
import { RootState } from "../../../../redux-store";
import { closeNavMenus } from "../../../../redux-store/navReducer";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Box padding="30px" overflow="auto" height="100%">
      <Flex marginBottom="15px" justifyContent="space-between">
        <Typography variant="h3">SHOPPING BAG ({cartItems.length})</Typography>
        <IconButton onClick={() => dispatch(closeNavMenus({}))}>
          <Close />
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
            marginBottom="120px"
            sx={{ maxWidth: "90%" }}
          >
            Oops! It looks like you don't have any products in your cart yet.
          </Typography>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <ProductionQuantityLimits
              fontSize="large"
              sx={{ transform: "scale(2.5)" }}
            />
          </Flex>
        </Flex>
      )}
    </Box>
  );
};
