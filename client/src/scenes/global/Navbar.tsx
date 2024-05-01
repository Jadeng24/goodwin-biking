import { Box } from "@mui/material";

import NavbarButtons from "./NavbarButtons";

import goodwinLogo from "../../assets/goodwin-logo.png";
import { Flex } from "../../components/flex";

const Navbar = () => {
  const logoStyle = {
    maxHeight: "30px",
    filter: "invert(1)",
  };

  return (
    <Flex
      alignItems="center"
      width="100%"
      height="60px"
      background="rgba(255,255,255, .0.95)"
      color="#222"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Flex
        width="80%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <img style={logoStyle} src={goodwinLogo} alt="Goodwin biking" />
        </Box>
        <NavbarButtons />
      </Flex>
    </Flex>
  );
};

export default Navbar;
