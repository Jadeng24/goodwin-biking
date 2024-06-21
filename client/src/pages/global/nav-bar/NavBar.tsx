import { useNavigate } from "react-router-dom";

import { Box, useMediaQuery } from "@mui/material";

import NavbarButtons from "./NavbarButtons";

import goodwinLogo from "../../../assets/goodwin-logo.png";
import { Flex } from "../../../components";
import { shades } from "../../../theme";
import NavMessageBar from "../nav-message-bar/NavMessageBar";

const NavBar = () => {
  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const logoStyle = {
    maxHeight: "30px",
    filter: "invert(1)",
    cursor: "pointer",
  };

  return (
    // TODO: hide on scroll down
    <Flex
      alignItems="center"
      flexDirection="column"
      width="100%"
      minHeight="60px"
      background="rgb(255,255,255, 0.4)"
      color="#222"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <NavMessageBar />
      <Flex
        padding={isGreaterThanMobile ? "0 7%" : "0 3%"}
        width="100%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        height="60px"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            transition: ".3s",
            cursor: "pointer",
            padding: "0px 10px",
            marginTop: "5px",
            borderLeft: "solid 2px transparent",
            borderRight: "solid 2px transparent",
            "&:hover": {
              transform: "scale(1.03)",
              borderLeft: `solid 2px ${shades.neutral[500]}`,
              borderRight: `solid 2px ${shades.neutral[500]}`,
            },
          }}
        >
          <img style={logoStyle} src={goodwinLogo} alt="Goodwin biking" />
        </Box>
        <NavbarButtons />
      </Flex>
    </Flex>
  );
};

export default NavBar;
