import {
  MenuOutlined,
  PersonOutline,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //54:20 left off
  return (
    <Box
      onClick={() => navigate("/")}
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      Goodwin Biking
      <IconButton sx={{ color: "#222" }}>
        <SearchOutlined />
      </IconButton>
      <IconButton sx={{ color: "#222" }}>
        <PersonOutline />
      </IconButton>
      <IconButton sx={{ color: "#222" }}>
        <ShoppingBagOutlined />
      </IconButton>
      <IconButton color="primary">
        <MenuOutlined />
      </IconButton>
    </Box>
  );
};

export default NavbarButtons;
