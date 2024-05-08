import { useDispatch, useSelector } from "react-redux";

import { Box, useMediaQuery } from "@mui/material";

import { CartDrawer } from "./cart-drawer";
import { Flex } from "../../../components";
import { RootState } from "../../../redux-store";
import { closeNavMenus } from "../../../redux-store/navReducer";
import NavMenuDrawer from "./nav-menu-drawer/NavMenuDrawer";

const NavMenu = () => {
  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const isCartOpen: boolean = useSelector(
    (state: RootState) => state.nav.isCartOpen
  );
  const isNavMenuOpen: boolean = useSelector(
    (state: RootState) => state.nav.isNavMenuOpen
  );

  return isNavMenuOpen || isCartOpen ? (
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
          dispatch(closeNavMenus({}));
        }}
        width="100%"
        height="100%"
      />

      <Box
        sx={{
          position: "fixed",
          right: 0,
          bottom: 0,
          width: isGreaterThanMobile ? "max(400px, 30%)" : "100%",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        {isCartOpen && <CartDrawer />}
        {isNavMenuOpen && <NavMenuDrawer />}
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default NavMenu;
