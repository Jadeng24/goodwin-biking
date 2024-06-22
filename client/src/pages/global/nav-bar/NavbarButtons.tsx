import { useDispatch, useSelector } from "react-redux";

import { Menu, ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton, Typography } from "@mui/material";
import { RootState } from "../../../redux-store";

import {
  setIsCartOpen,
  setIsNavMenuOpen,
} from "../../../redux-store/navReducer";
import { Flex } from "../../../components";

const NavbarButtons = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <Flex gap="4px">
      <IconButton
        onClick={() => dispatch(setIsCartOpen({}))}
        sx={{
          transition: ".3s",
          "&:hover": { transform: "scale(1.03)" },
        }}
      >
        <ShoppingCart fontSize="large" />
      </IconButton>

      <Badge
        badgeContent={
          <Typography fontSize="12px" variant="h4" fontWeight="600">
            {cartItems.length}
          </Typography>
        }
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
      <IconButton
        onClick={() => dispatch(setIsNavMenuOpen({}))}
        sx={{
          transition: ".3s",
          "&:hover": { transform: "scale(1.03)" },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
    </Flex>
  );
};

export default NavbarButtons;
