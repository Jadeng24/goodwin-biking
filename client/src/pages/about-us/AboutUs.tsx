import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Flex } from "../../components";
import goodwinBiking from "../../assets/gb-grey.png";
import utah from "../../assets/utah-bg.jpg";
const AboutUs = () => {
  const imageStyle = { maxWidth: "200px", borderRadius: "8px" };
  const utahStyle = {
    maxWidth: "100%",
    borderRadius: "8px",
    marginTop: "100px",
    webkitMaskImage:
      " -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
  };

  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Box padding={isMobile ? "30px" : "60px"} marginTop="60px" fontSize="16px">
      <Typography variant="h1">About Us</Typography>
      <Flex
        paddingTop="40px"
        flexDirection={isMobile ? "column-reverse" : "row"}
        gap="20px"
      >
        <Box>
          <Box marginBottom="20px">
            Welcome to Goodwin Biking! We are a passionate and pragmatic gear
            company located in the bikepacking and mountain biking haven of the
            United states, Utah.
          </Box>

          <Box>
            We are dedicated to producing the highest-quality of bags, dry bags,
            and gear for bikepacking that is available to the general public,
            and to do so at an affordable price.
          </Box>
        </Box>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent={isMobile ? "flex-start" : "flex-end"}
          width="100%"
        >
          <img src={goodwinBiking} style={imageStyle} alt="goodwin biking" />
          <Typography variant="h4" color="neutral" paddingTop="5px">
            Goodwin Biking
          </Typography>
        </Flex>
      </Flex>

      <img src={utah} alt="Utah" style={utahStyle} />

      {/* <Flex
        justifyContent="center"
        width="100%"
        marginTop="160px"
        // sx={{ pointerEvents: "none" }}
      >
        <iframe
          style={{ width: isMobile ? "100%" : "50%", height: "300px" }}
          src="http://maps.google.com/maps?q=40.306236, -111.989957&z=5&output=embed"
        ></iframe>
      </Flex> */}
    </Box>
  );
};

export default AboutUs;
