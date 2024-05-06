import { Typography, useMediaQuery } from "@mui/material";

import { shades } from "../../../../theme";
import { Flex } from "../../../../components";

const FooterInfo = () => {
  const isMobile = useMediaQuery("(max-width:700px");
  return (
    <Flex
      width="clamp(20%, 30%, 40%)"
      minWidth={isMobile ? "100%" : undefined}
      flexDirection="column"
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        marginBottom="3px"
        color="secondary"
      >
        Goodwin Biking
      </Typography>
      <Typography
        fontSize="10px"
        color={shades.neutral[700]}
        marginBottom="20px"
      >
        Established Jan 2024
      </Typography>
      <Typography variant="h4">
        Your source of authentic, pragmatic bikepacking adventures catered
        specifically for beginner and intermediate bikepackers.
        <br />
        <br />
        Join us on our quest to explore the unknown and get back to the
        simpleness of life. Experience high-quality bikepacking gear at an
        affordable price! Also Join our Youtube channel for in-depth bikepacking
        content.
      </Typography>
    </Flex>
  );
};

export default FooterInfo;
