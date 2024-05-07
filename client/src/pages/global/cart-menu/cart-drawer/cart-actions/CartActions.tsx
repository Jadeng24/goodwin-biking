import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import { shades } from "../../../../../theme";
import { RootState, setIsCartOpen } from "../../../../../redux-store";
import { Flex } from "../../../../../components";

export const CartActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalPrice = cartItems?.reduce((total: any, item: any) => {
    return total + item.count * item.attributes?.price;
  }, 0);

  return (
    <Box margin="20px 0">
      <Flex margin="20px 0" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">SHIPPING & HANDLING</Typography>
        <Typography fontWeight="bold">FREE</Typography>
      </Flex>
      <Flex margin="20px 0" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">SUBTOTAL</Typography>
        <Typography fontWeight="bold">${totalPrice}</Typography>
      </Flex>

      <Button
        sx={{
          backgroundColor: shades.primary[500],
          color: "#fff",
          borderRadius: 0,
          minWidth: "100%",
          padding: "20px 40px",
          margin: "20px 0",
          "&:hover": {
            background: shades.primary[300],
          },
        }}
        onClick={() => {
          navigate("/checkout");
          dispatch(setIsCartOpen({}));
        }}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};
