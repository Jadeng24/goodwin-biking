import { useSelector } from "react-redux";

import { Close, ProductionQuantityLimits } from "@mui/icons-material";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";

import { CartActions } from "./cart-actions";
import { CartItems } from "./cart-items";
import { Flex } from "../../../../components";
import { RootState } from "../../../../redux-store";
import { shades } from "../../../../theme";
import DrawerPill from "../DrawerPill";

interface CartDrawerProps {
  onClose: () => void;
}
export const CartDrawer = (props: CartDrawerProps) => {
  const { onClose } = props;

  const isMobile = useMediaQuery("(max-width:600px)");
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
      )}
    </Box>
  );
};
