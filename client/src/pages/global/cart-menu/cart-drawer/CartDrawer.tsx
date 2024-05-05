import { useDispatch, useSelector } from "react-redux";

import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import { CartActions } from "./cart-actions";
import { CartItems } from "./cart-items";
import { Flex } from "../../../../components";
import { RootState, setIsCartOpen } from "../../../../redux-store";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        bottom: 0,
        width: "max(400px, 30%)",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Box padding="30px" overflow="auto" height="100%">
        <Flex marginBottom="15px" justifyContent="space-between">
          <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
          <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
            <Close />
          </IconButton>
        </Flex>

        <CartItems />

        <CartActions />
      </Box>
    </Box>
  );
};
