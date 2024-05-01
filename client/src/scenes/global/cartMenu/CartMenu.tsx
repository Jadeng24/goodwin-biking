import { useSelector } from "react-redux";
import { RootState } from "../../../index";
import { Box } from "@mui/material";
import { CartDrawer } from "./cartDrawer";

const CartMenu = () => {
  const isCartOpen: boolean = useSelector(
    (state: RootState) => state.cart.isCartOpen
  );

  return (
    <Box
      sx={{
        display: isCartOpen ? "block" : "none",
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
      <CartDrawer />
    </Box>
  );
};

export default CartMenu;
