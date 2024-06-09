import { useDispatch, useSelector } from "react-redux";
import { SwipeableDrawer } from "@mui/material";

import { CartDrawer } from "./cart-drawer";
import { MenuDrawer } from "./menu-drawer";
import { RootState } from "../../../redux-store";
import { closeNavMenus } from "../../../redux-store/navReducer";

const NavDrawer = () => {
  const dispatch = useDispatch();
  const isCartOpen: boolean = useSelector(
    (state: RootState) => state.nav.isCartOpen
  );
  const isNavMenuOpen: boolean = useSelector(
    (state: RootState) => state.nav.isNavMenuOpen
  );

  const handleCloseNav = () => {
    dispatch(closeNavMenus({}));
  };

  return (
    <SwipeableDrawer
      anchor="right"
      open={isNavMenuOpen || isCartOpen}
      onOpen={() => undefined}
      onClose={handleCloseNav}
      transitionDuration={300}
    >
      {isCartOpen && <CartDrawer onClose={handleCloseNav} />}
      {isNavMenuOpen && <MenuDrawer onClose={handleCloseNav} />}
    </SwipeableDrawer>
  );
};

export default NavDrawer;
