import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Menu, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import { RootState } from "../../../redux-store";

import {
  setIsCartOpen,
  setIsNavMenuOpen,
} from "../../../redux-store/navReducer";

const NavbarButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // grabbing the cartSlice name 'cart' and then 'cart' from state
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Box
      onClick={() => navigate("/")}
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <IconButton
        onClick={() => dispatch(setIsCartOpen({}))}
        sx={{ color: "#222" }}
      >
        <ShoppingCart />
      </IconButton>
      <Badge
        badgeContent={cartItems.length}
        color="secondary"
        invisible={cartItems.length === 0}
        sx={{
          "& .MuiBadge-badge": {
            right: 5,
            top: 5,
            padding: "0 4px",
            height: "14px",
            minWidth: "13px",
          },
        }}
      />
      <IconButton onClick={() => dispatch(setIsNavMenuOpen({}))}>
        <Menu />
      </IconButton>
    </Box>
  );
};

export default NavbarButtons;
