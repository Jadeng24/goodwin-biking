import { useDispatch, useSelector } from "react-redux";

import {
  Close,
  HourglassEmpty,
  ProductionQuantityLimits,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

import { CartActions } from "./cart-actions";
import { CartItems } from "./cart-items";
import { Flex } from "../../../../components";
import { RootState, setIsCartOpen } from "../../../../redux-store";
import { shades } from "../../../../theme";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        position: "fixed",
        right: 0,
        bottom: 0,
        width: isGreaterThanMobile ? "max(400px, 30%)" : "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Box padding="30px" overflow="auto" height="100%">
        <Flex marginBottom="15px" justifyContent="space-between">
          <Typography variant="h3">
            SHOPPING BAG ({cartItems.length})
          </Typography>
          <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
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
    </Box>
  );
};
