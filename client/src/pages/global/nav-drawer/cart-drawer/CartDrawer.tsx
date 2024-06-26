import { useSelector } from "react-redux";

import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

import { CartActions } from "./cart-actions";
import { CartItems } from "./cart-items";
import { Flex } from "../../../../components";
import { RootState } from "../../../../redux-store";
import DrawerPill from "../DrawerPill";
import EmptyCart from "./EmptyCart";

interface CartDrawerProps {
  onClose: () => void;
}
export const CartDrawer = (props: CartDrawerProps) => {
  const { onClose } = props;
  const isMobile = useMediaQuery("max-width:600px");

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Box
      padding="10px 30px 30px"
      overflow="auto"
      height="100%"
      position="relative"
    >
      {isMobile && <DrawerPill />}
      <Flex
        marginBottom="15px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h3">SHOPPING CART ({cartItems.length})</Typography>
        <IconButton onClick={onClose}>
          <Close fontSize="large" />
        </IconButton>
      </Flex>
      {cartItems && cartItems?.length > 0 ? (
        <>
          <CartItems />
          <CartActions />
        </>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};
