import { Box } from "@mui/material";

import NavbarButtons from "./NavbarButtons";

import goodwinLogo from "../../assets/goodwin-logo.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "60px",
        backgroundColor: "rgba(255,255,255, .0.95)",
        color: "#222",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <img width="250px" src={goodwinLogo} alt="Goodwin biking" />
        </Box>
        <NavbarButtons />
      </Box>
    </Box>
  );
};

export default Navbar;
