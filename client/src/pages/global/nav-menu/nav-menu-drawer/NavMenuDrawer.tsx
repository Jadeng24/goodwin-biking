import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { Flex } from "../../../../components";
import { closeNavMenus } from "../../../../redux-store/navReducer";
import { useNavigate } from "react-router-dom";
import { shades } from "../../../../theme";
import SocialLinks from "./social-links/SocialLinks";

const NavMenuDrawer = () => {
  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    dispatch(closeNavMenus({}));
    navigate(route);
  };

  const linkStyles = {
    cursor: "pointer",
    marginBottom: isGreaterThanMobile ? "10px" : "30px",
    borderRadius: "10px",
  };

  return (
    <Flex
      padding="30px"
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex width="100%" flexDirection="column">
        <Flex
          marginBottom={isGreaterThanMobile ? "40px" : "100px"}
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="h2" sx={{ color: shades.neutral[500] }}>
            MENU
          </Typography>
          <IconButton onClick={() => dispatch(closeNavMenus({}))}>
            <Close />
          </IconButton>
        </Flex>
        <Flex flexDirection="column">
          <Button
            style={linkStyles}
            color="primary"
            onClick={() => handleNavigate("/")}
          >
            <Typography variant="h3">Home</Typography>
          </Button>

          <Button
            color="primary"
            onClick={() => handleNavigate("/products")}
            style={linkStyles}
          >
            <Typography variant="h3">Products</Typography>
          </Button>

          <Button
            color="primary"
            onClick={() => handleNavigate("/apparel")}
            style={linkStyles}
          >
            <Typography variant="h3">Apparel</Typography>
          </Button>
          <Button
            color="primary"
            onClick={() => handleNavigate("/about-us")}
            style={linkStyles}
          >
            <Typography variant="h3">About us</Typography>
          </Button>
        </Flex>
      </Flex>
      <SocialLinks />
    </Flex>
  );
};

export default NavMenuDrawer;
