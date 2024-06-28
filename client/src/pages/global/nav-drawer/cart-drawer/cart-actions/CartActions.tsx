import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Box, Button, Divider, Typography } from "@mui/material";

import { shades } from "../../../../../theme";
import { RootState } from "../../../../../redux-store";
import { Flex } from "../../../../../components";
import { closeNavMenus } from "../../../../../redux-store/navReducer";

export const CartActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const totalPriceWithDiscounts = cartItems?.reduce((total: any, item: any) => {
    const { price, discountPrice } = item?.attributes || {};

    const itemPrice = discountPrice || price;

    return total + item.count * itemPrice;
  }, 0);

  const totalPrice = cartItems?.reduce((total: any, item: any) => {
    return total + item.count * item?.attributes?.price;
  }, 0);

  const totalDiscounted = (totalPrice - totalPriceWithDiscounts).toFixed(2);

  return (
    <Box margin="20px 0">
      <Flex margin="20px 0" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">SHIPPING & HANDLING</Typography>
        <Typography fontWeight="bold">FREE</Typography>
      </Flex>
      <Flex margin="20px 0" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">TAX:</Typography>
        <Typography fontWeight="bold">$0.00</Typography>
      </Flex>
      <Box marginY="20px">
        <Divider />
      </Box>
      {totalPrice !== totalPriceWithDiscounts && (
        <>
          <Flex
            margin="20px 0"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight="bold">SUBTOTAL:</Typography>
            <Typography
              sx={{
                color: shades.neutral[700],
                textDecoration: "line-through",
              }}
              fontWeight="bold"
            >
              ${totalPrice}
            </Typography>
          </Flex>
          <Flex
            margin="20px 0"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight="bold">DISCOUNTS:</Typography>
            <Typography
              sx={{
                color: shades.secondary[500],
              }}
              fontWeight="bold"
            >
              - ${totalDiscounted}
            </Typography>
          </Flex>
        </>
      )}

      <Flex margin="20px 0" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">TOTAL:</Typography>
        <Typography fontWeight="bold">${totalPriceWithDiscounts}</Typography>
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
          dispatch(closeNavMenus({}));
        }}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};
