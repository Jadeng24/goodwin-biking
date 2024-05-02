import { Box } from "@mui/material";

import NavbarButtons from "./NavbarButtons";

import goodwinLogo from "../../assets/goodwin-logo.png";
import { Flex } from "../../components/flex";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
        width="80%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box onClick={() => navigate("/")}>
          <img style={logoStyle} src={goodwinLogo} alt="Goodwin biking" />
        </Box>
        <NavbarButtons />
      </Flex>
    </Flex>
  );
};

export default Navbar;
