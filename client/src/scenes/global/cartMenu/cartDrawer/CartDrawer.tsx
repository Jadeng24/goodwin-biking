import { Close } from "@mui/icons-material";

import { setIsCartOpen } from "../../../../state";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../..";

import { CartActions } from "./cartActions";
import { CartItems } from "./cartItems";
import { Flex } from "../../../../components";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

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
        <Flex marginBottom="15px">
          <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
          <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
            <Close />
          </IconButton>
        </Flex>

        <CartItems items={cart} />

        <CartActions />
      </Box>
    </Box>
  );
};
