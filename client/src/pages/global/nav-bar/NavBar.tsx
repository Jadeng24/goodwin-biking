import { useNavigate } from "react-router-dom";

import { Box, useMediaQuery } from "@mui/material";

import NavbarButtons from "./NavbarButtons";

import goodwinLogo from "../../../assets/goodwin-logo.png";
import { Flex } from "../../../components";
import { shades } from "../../../theme";
import NavMessageBar from "../nav-message-bar/NavMessageBar";
import { useEffect, useState } from "react";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();

  const logoStyle = {
    maxHeight: "30px",
    filter: "invert(1)",
    cursor: "pointer",
  };

  const [showNav, setShowNav] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShowNav(false);
    } else {
      // if scroll up show the navbar
      setShowNav(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <Flex
        alignItems="center"
        flexDirection="column"
        width="100%"
        minHeight="60px"
        background="rgb(255,255,255, 0.6)"
        color="#222"
        position="fixed"
        top={showNav ? "0" : "-100px"} // Height of Message bar and Navigation bar
        left="0"
        zIndex="1"
        sx={{
          transition: "top 0.3s",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.1px)",
        }}
      >
        <NavMessageBar />
        <Flex
          paddingX={isMobile ? "3%" : "7%"}
          width="100%"
          margin="auto"
          justifyContent="space-between"
          alignItems="center"
          height={isMobile ? "50px" : "60px"}
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
      {/* )} */}
    </>
  );
};

export default NavBar;
