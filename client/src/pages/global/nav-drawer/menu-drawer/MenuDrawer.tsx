import { useNavigate } from "react-router-dom";
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
import { shades } from "../../../../theme";
import SocialLinks from "../../../../components/social-links/SocialLinks";
import DrawerPill from "../DrawerPill";

interface MenuDrawerProps {
  onClose: () => void;
}

export const MenuDrawer = (props: MenuDrawerProps) => {
  const { onClose } = props;
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    dispatch(closeNavMenus({}));
    navigate(route);
  };

  const linkStyles = {
    cursor: "pointer",
    marginBottom: isMobile ? "10px" : "4px",
    borderRadius: "10px",
    padding: "14px 20px",
  };

  return (
    <Box
      width="100%"
      padding="10px 30px 30px"
      position="relative"
      height="100%"
    >
      <Flex height="100%" flexDirection="column" justifyContent="space-between">
        {/* Drag bar  */}
        {isMobile && <DrawerPill />}
        <Flex width="100%" flexDirection="column">
          <Flex
            marginBottom={isMobile ? "20px" : "40px"}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h3" sx={{ color: shades.neutral[500] }}>
              MENU
            </Typography>
            <IconButton onClick={onClose}>
              <Close fontSize="large" />
            </IconButton>
          </Flex>
          <Flex
            flexDirection="column"
            alignSelf={isMobile ? "flex-end" : "flex-start"}
            alignItems={isMobile ? "flex-end" : "flex-start"}
          >
            <Button
              style={linkStyles}
              color="primary"
              onClick={() => handleNavigate("/")}
            >
              <Typography variant="h3">Home</Typography>
            </Button>

            <Button
              color="primary"
              onClick={() => handleNavigate("/bikepacking-bags")}
              style={linkStyles}
            >
              <Typography variant="h3" textAlign={isMobile ? "right" : "left"}>
                {isMobile ? "Bikepack Bags" : "Bikepacking Bags"}
              </Typography>
            </Button>

            <Button
              color="primary"
              onClick={() => handleNavigate("/accessories-apparel")}
              style={linkStyles}
            >
              <Typography variant="h3" textAlign={isMobile ? "right" : "left"}>
                Accessories & Apparel
              </Typography>
            </Button>
            <Button
              color="primary"
              onClick={() => handleNavigate("/about-us")}
              style={linkStyles}
            >
              <Typography variant="h3">About us</Typography>
            </Button>
            {/* TODO add a contact page  */}
            {/* <Button
            color="primary"
            onClick={() => handleNavigate("/contact")}
            style={linkStyles}
          >
            <Typography variant="h3">Contact us</Typography>
          </Button> */}
          </Flex>
        </Flex>
        <SocialLinks showTitle={true} />
      </Flex>
    </Box>
  );
};
