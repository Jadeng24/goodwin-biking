import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../..";
import { shades } from "../../../../../theme";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../../../../state";
import { Flex } from "../../../../../components";

export const CartActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice: number = cart.reduce((total: number, item: any) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box margin="20px 0">
      <Flex margin="20px 0" justifyContent="space-between">
        <Typography fontWeight="bold">SUBTOTAL</Typography>
        <Typography fontWeight="bold">${totalPrice}</Typography>
      </Flex>

      <Button
        sx={{
          backgroundColor: shades.primary[400],
          color: "#fff",
          borderRadius: 0,
          minWidth: "100%",
          padding: "20px 40px",
          margin: "20px 0",
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
