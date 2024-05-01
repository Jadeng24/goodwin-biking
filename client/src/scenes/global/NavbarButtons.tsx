import {
  MenuOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../state";
import { shades } from "../../theme";
import { ReduxState } from "../../state/types";
import { RootState } from "../..";

const NavbarButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // grabbing the cartSlice name 'cart' and then 'cart' from state
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <Box
      onClick={() => navigate("/")}
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <IconButton sx={{ color: "#222" }}>
        <SearchOutlined />
      </IconButton>
      <IconButton sx={{ color: "#222" }}>
        <PersonOutline />
      </IconButton>
      <Badge
        badgeContent={cart.length}
        color="secondary"
        invisible={cart.length === 0}
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
        onClick={() => dispatch(setIsCartOpen({}))}
        sx={{ color: "#222" }}
      >
        <ShoppingBagOutlined />
      </IconButton>
      <IconButton color="primary">
        <MenuOutlined />
      </IconButton>
    </Box>
  );
};

export default NavbarButtons;