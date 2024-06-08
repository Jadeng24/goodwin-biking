import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

import { Flex } from "../../../components";
import FooterInfo from "./footer-info/FooterInfo";
import FooterLinkSections from "./footer-link-sections/FooterLinkSections";
import SocialLinks from "../nav-menu/nav-menu-drawer/social-links/SocialLinks";
import { shades } from "../../../theme";

function Footer() {
  const {
    palette: { info },
  } = useTheme() as any;

  return (
    <Flex
      marginTop="70px"
      paddingBottom="40px"
      background={info.light}
      flexDirection="column"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Flex
          width="100%"
          marginY="40px"
          paddingY="4px"
          borderRadius="8px"
          background="#fff"
        >
          <SocialLinks />
        </Flex>
        <FooterInfo />

        <FooterLinkSections />
      </Box>
    </Flex>
  );
}

export default Footer;
