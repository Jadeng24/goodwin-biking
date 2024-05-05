import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";

import { CartDrawer } from "./cart-drawer";
import { Flex } from "../../../components";
import { RootState, setIsCartOpen } from "../../../redux-store";

const CartMenu = () => {
  const dispatch = useDispatch();
  const isCartOpen: boolean = useSelector(
    (state: RootState) => state.cart.isCartOpen
  );

  return isCartOpen ? (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.4)",
        position: "fixed",
        zIndex: 10,
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        overflow: "auto",
      }}
    >
      <Flex // Click outside cart drawer to close cart
        onClick={() => {
          dispatch(setIsCartOpen({}));
        }}
        width="100%"
        height="100%"
      />

      <CartDrawer />
    </Box>
  ) : (
    <></>
  );
};

export default CartMenu;
