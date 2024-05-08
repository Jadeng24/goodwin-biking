import { useNavigate } from "react-router-dom";

import { Box, useMediaQuery } from "@mui/material";

import NavbarButtons from "./NavbarButtons";

import goodwinLogo from "../../../assets/goodwin-logo.png";
import { Flex } from "../../../components";
import { shades } from "../../../theme";

const Nav = () => {
  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const logoStyle = {
    maxHeight: "30px",
    filter: "invert(1)",
    cursor: "pointer",
  };

  return (
    <Flex
      alignItems="center"
      width="100%"
      height="60px"
      background="rgb(255,255,255, 0.4)"
      color="#222"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Flex
        padding={isGreaterThanMobile ? "0 7%" : "0 3%"}
        width="100%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            transition: ".3s",
            cursor: "pointer",
            padding: "0px 10px",
            marginTop: "5px",
            // borderRadius: "30px",
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

export default Nav;
